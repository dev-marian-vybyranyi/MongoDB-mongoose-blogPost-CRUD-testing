# MongoDB Books

This project demonstrates a MongoDB integration with Node.js using Mongoose. It includes data models for Users, BlogPosts, and Comments, showcasing how to handle associations, validations, and virtual types.

## Technology Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MongoDB**: A source-available cross-platform document-oriented database program.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Mocha**: A feature-rich JavaScript test framework running on Node.js.
- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server.

This command runs `nodemon`, which executes `mocha` with the progress reporter.

## Project Structure

- **`src/`**: Contains the Mongoose models.
  - `user.js`: User model definition with validation and virtuals.
  - `blogPost.js`: BlogPost model definition.
  - `comment.js`: Comment model definition.
  - `post.js`: Post schema (subdocument).
- **`test/`**: Contains the test files.
  - `test_helper.js`: Setup and teardown logic for tests.
  - `*_test.js`: Various test files covering CRUD operations, validations, associations, etc.
