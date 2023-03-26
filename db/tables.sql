DROP TABLE IF EXISTS public.user;

CREATE TABLE public.user 
(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO public.user VALUES (1, 'test', 'test@test.it', 'password', NOW());