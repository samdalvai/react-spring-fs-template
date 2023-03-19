DROP TABLE IF EXISTS public.user;

CREATE TABLE public.user 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

-- 5f4dcc3b5aa765d61d8327deb882cf99 is the md5 hash value for the string 'password'
INSERT INTO public.user VALUES (1, 'test', 'test@email.it', '5f4dcc3b5aa765d61d8327deb882cf99');