## Task Objective

The objective of this task is to build a simple REST API capable of performing CRUD (Create, Read, Update, Delete) operations on a "person" resource, interfacing with a database of your choice. This API should dynamically handle parameters such as adding or retrieving a person. Accompany the development with UML diagrams to represent your system's design and database structure. Host the entire project on GitHub and provide well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.


---

## API Documentation

- [Documentation](./Documentation.md)
## Available Endpoints

| Route | Description |
| --- | ----------- |
| `GET` /api/:id | Fetch a user from the database |
| `POST` /api | Create a new user |
| `PUT` /api/:id | Update a user |
| `DELETE` /api/:id | Delete a user 

## 1. UML Sequence Diagram <a name="sequence"></a>
Follow this link to view the the sequence diagram: https://github.com/samad13/HNG/blob/master/UML/uml-sequence-diagram.png

## 2. Prerequisites <a name="prerequisites"></a>

Before setting up and running the API, ensure that you have the following prerequisites installed on your system:

- Node.js (v12 or higher)
- MongoDB (v4 or higher)

## 3. Set up Database <a name="set-up-database"></a>

To create and set up a MongoDB cluster on Atlas, kindly follow the official documentation: https://www.mongodb.com/docs/atlas/getting-started/

## 4. Installation <a name="installation"></a>

To install the API and its dependencies, follow these steps:

1. Clone the repository:

   `git clone https://github.com/samad13/HNG.git`


2. Install the Node.js dependencies:

   `npm install`

## 3. Configuration <a name="configuration"></a>

You may need to configure environment variables to customize the API's behavior. Create a `.env` file in the project root and specify the following variables:

```
PORT=3000 # Port on which the API will run
DATABASE= # MongoDB connection URL
DATABASE_PASSWORD= # MongoDB cluster password
```

Ensure that you replace `DATABASE` with the correct MongoDB connection URL.

## 4. Running the API <a name="running-the-api"></a>

To start the API, run the following command:

`npm start`

The API will be available at <http://localhost:PORT/api>
