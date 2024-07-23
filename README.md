# Caching Example with Redis

This repository demonstrates how to implement caching using Redis in a Node.js application.

## Repository Setup

To set up the repository, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the application

Start the application by running the following command:

```bash
npm run dev
```

This will start the Node.js application and you can access it at `http://localhost:5001`.

## API Endpoints

### Get all posts

- Method: GET
- URL: `http://localhost:5001/api/v1/posts`

This endpoint retrieves all posts.

### Update post by id

- Method: PUT
- URL: `http://localhost:5001/api/v1/posts/:id`
- Payload:
  ```json
  {
    "title": "Test title2",
    "description": "Test"
  }
  ```

This endpoint updates a post with the specified ID, providing a new title and description in the payload.

### Note: This branch is not optimized with caching

Please note that the code in this branch does not include caching optimizations. This is provided as a the base example before implementing the cache.
