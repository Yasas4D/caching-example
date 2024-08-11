import Redis from "ioredis";

let client;

export function getRedisConnection() {
  if (client) {
    return client;
  } else {
    client = new Redis();

    client.on("ready", () => {
      console.log("Redis connection created");
    });

    client.on("error", (err) => {
      console.error("Redis error: ", err);
    });
    return client;
  }
}
