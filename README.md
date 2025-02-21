# Database
A database is a structured collection of data that can be accessed, managed, and updated.

## Types of Database
- Relational Database (SQL DB): This is a type of database that stores data in tables (columns and rows) 
- Non-relational Database (NOSQL DB): This is a kind of database that stores data in JSON like documents e.g
```javascript
{
  "name": "John",
  "role": "admin",
  "skills": ["JS", "React"]
}
```

## MongoDB
This is a NoSQL Dabatabase that stores data in JSON like documents

To use mongodb you do the setup on the official website then after copy the mongo_db_link to your `.env` file. 

These are packages that should be installed a long
1. dotenv: for retrieving items from `.env `
2. mongoose: this is an ODM (Object Document Model) - It provides us with methods that replaces pure queries.

## Schemas & Models
1. Schema: This is a design/blueprint of your data structure
2. Model: this is an actual object for your schema


# Middleware
This is a function can has access to the request, response and the next function

