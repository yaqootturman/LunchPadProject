BEGIN;

DROP TABLE IF EXISTS customer
    CASCADE;

CREATE TABLE customer
(
    customer_id serial primary key ,
    first_name VARCHAR(100) ,
    last_name VARCHAR(100) ,
    email VARCHAR(50) UNIQUE,
    Birthday DATE NOT NULL,
    Gender varchar(6) NOT NULL,
    City VARCHAR(100) NOT NULL
);

COMMIT;