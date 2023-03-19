# memory-notes
A web application for keeping notes and knowledge.
The application architecture is based on a backend API with `Java Spring Boot` along with a `PostgreSQL` database,
and a frontend application with `React`.

# Table of contents
* [How to configure](#how-to-configure)
  * [Back-end application](#back-end-application)
  * [Front-end application](#front-end-application)
  * [Database](#database)
* [Author](#author)

# How to configure

## Back-end application

### Application Prerequisites

* Java 1.8 or higher.
* Maven
* Docker

### How to run

To start the Spring Boot API, from the `backend/` folder run:

> mvn spring-boot:run

Access the API on http://localhost:8080/example.

## Front-end application

### Application Prerequisites

* Node.js 16 or higher

### How to run

* From inside the `frontend/` folder run `yarn install` to install the required packages
* To start the frontend application, from inside the `frontend/` folder run:

> yarn start

Access the application at http://localhost:3000 in the browser.


## Database

### Prerequisites

* Docker

### How to run

* From inside the `db/` folder run the following commands:

> docker build -t my-postgres-image .

* After the image has built, run:

> docker run --name my-postgres-container -p 5432:5432 -d my-postgres-image

* You can access the database with any management tool, for example `pgAdmin` by connecting to `https://localhot:5432`, please look in the `Dockerfile` inside the `db/` folder for the credentials.