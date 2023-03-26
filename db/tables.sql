DROP TABLE IF EXISTS public.user;

CREATE TABLE public.user 
(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- 5f4dcc3b5aa765d61d8327deb882cf99 is the MD5 encryption of the string password
INSERT INTO public.user VALUES (1, 'test', 'test@test.it', '5f4dcc3b5aa765d61d8327deb882cf99', NOW());