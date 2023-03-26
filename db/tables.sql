DROP TABLE IF EXISTS public.user;

/*CREATE TABLE public.user (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL
);

INSERT INTO public.user VALUES (1, 'admin', '{bcrypt}$2a$10$f4aQLof9kgM8mzJIP7a.Vuc3WYcQK8brcL6hrHdCdkzTH8AppEpOm', 'Jerry', NOW());*/

CREATE TABLE public.user 
(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO public.user VALUES (1, 'test', '{bcrypt}$2a$10$f4aQLof9kgM8mzJIP7a.Vuc3WYcQK8brcL6hrHdCdkzTH8AppEpOm', 'Jerry', NOW());