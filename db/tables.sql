DROP TABLE IF EXISTS public.user;

CREATE TABLE public.user 
(
    id NUMERIC PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);