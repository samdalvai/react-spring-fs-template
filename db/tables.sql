DROP TABLE IF EXISTS public.user;

CREATE TABLE public.user 
(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- 'a850c6ccfb92cba03f7fb1b0fb1158fb' is the MD5 encryption of the string 'password' salted with the string '62bb083487480eec82cb5df74431a14a'
INSERT INTO public.user VALUES (1, 'test', 'test@test.it', 'a850c6ccfb92cba03f7fb1b0fb1158fb$62bb083487480eec82cb5df74431a14a', NOW());