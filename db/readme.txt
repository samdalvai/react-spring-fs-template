* From inside the `db/` folder run the following commands:

> docker build -t my-postgres-image .

* After the image has built, run:

> docker run --name my-postgres-container -p 5432:5432 -d my-postgres-image

* To stop the container

> docker stop my-postgres-container

* To remove the container you can run:

> docker rm my-postgres-container

* You can access the database with any management tool, for example `pgAdmin` by connecting to `https://localhot:5432`, please look in the `Dockerfile` inside the `db/` folder for the credentials.