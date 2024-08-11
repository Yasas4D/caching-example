import objectHash from "object-hash";
import { getRedisConnection } from "../config/redisConnection.js";

const generateCacheKey = (req) => {
  // build a custom object to use as a part of our Redis key
  const reqDataToHash = {
    query: req.query,
  };

  return `${req.baseUrl}@${objectHash.sha1(reqDataToHash)}`;
};

export const cacheLayer = async (req, res, next) => {
  //early return dala lassana karmu -- UB ayyas video
  const redisClient = getRedisConnection();

  if (redisClient?.status == "ready") {
    const key = generateCacheKey(req, req.method);

    //if cached data is found retrieve it
    const cachedValue = await redisClient.get(key);

    if (cachedValue) {
      return res.json(JSON.parse(cachedValue));
    } else {
      const oldSend = res.send;

      // When the middleware function  is executed, it replaces the res.send function with a custom function.
      res.send = async function saveCache(data) {
        res.send = oldSend;

        // cache the response only if it is successful
        if (res.statusCode >= 200 && res.statusCode < 300) {
          await redisClient.set(key, data);
        }

        return res.send(data);
      };

      // continue to the controller function
      next();
    }
  } else {
    next();
  }
};

export const invalidateCache = async (req, res, next) => {
  const redisClient = getRedisConnection();
  const pattern = req.baseUrl + "@*";
  const keys = await redisClient.keys(pattern);

  if (keys.length) {
    await redisClient.del(keys);
  }

  next();
};
