# Express-GraphQL Bookstore API

This is a sample project showcasing an API built using `Express`, `express-graphql`, and `GraphQL`. It provides a set of GraphQL queries and mutations to interact with authors and their books. Whether you're looking to retrieve book information, author details, or perform operations like adding new books or updating existing ones, this API has got you covered.

## Tech Stack
- **express**: Used as the web server framework.
- **express-graphql**: Provides a simple way to create an Express server that runs a GraphQL API.
- **graphql**: Used to define the API schema and resolve queries and mutations.

## Features

1. **Queries**:
    - Fetch all authors
    - Fetch an author by ID
    - Fetch all books
    - Fetch a book by ID

2. **Mutations**:
    - Add a new author
    - Add a new book under an author

## Getting Started

1. Clone this repository
2. Navigate to the project directory and run `npm install` to install all dependencies.
3. Start the development server using:
```bash
npm run dev
```
This will start the server using `nodemon`, which will automatically restart your server upon code changes. By default, the server is started on port 5000, but you can modify `server.js` to choose a different port.

4. Once the server is running, navigate to `http://localhost:5000/graphql` in your browser to access the GraphQL playground. Here, you can test out queries, mutations, and explore the schema.

## Fetch all books
```javascript
query {
	books {
        id,
        title,
        author {
        name
        }
    }
}
```

## Fetch a book by ID
```javascript
query {
  book(id:1) {
    author {
      name
    }
  }
}
```

## Fetch all authors
```javascript
query {
    authors{
        id,
        name,
        books {
            id,
            title
        }
    }
}
```

## Fetch an author by ID
```javascript
query {
	author(id:1) {
    name,
    books{
      title
    }
  }
}
```

## Add a new book under an author
```javascript
mutation {
    addBook(title: "Gym", authorId: 1) {
        id
    }
}
```

## Add a new author
```javascript
mutation {
    addAuthor(name:"dale") {
        id
    }
}
```

## Further Work

As this is a sample project, there's always room for expansion. Future work could involve adding user authentication, expanding the data model, or integrating a database for persistent storage.

## Contributions

Feel free to fork this repository, submit PRs, or raise issues if you encounter any. Your feedback and contributions are welcome!

---

This README provides a concise overview of your project, its tech stack, and its features. Always consider your target audience when writing a README, and ensure it has clear instructions that are easy for new users to follow.