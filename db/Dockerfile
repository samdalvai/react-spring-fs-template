# Use an official PostgreSQL runtime as a parent image
FROM postgres:latest

# Set the environment variables
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Copy the database initialization script to the container
COPY init.sql /docker-entrypoint-initdb.d/
COPY tables.sql /app/

# Expose the PostgreSQL port
EXPOSE 5432