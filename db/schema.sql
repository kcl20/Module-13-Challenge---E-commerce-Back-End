-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Use the ecommerce_db --
USE ecommerce_db;

-- -- Creates the table "category" within ecommerce_db --
-- CREATE TABLE category (
--     -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows, Doesn't allow null values --
--     id INT NOT NULL AUTO_INCREMENT,
--     -- Makes a string column called "name" which cannot contain null --
--     category_name VARCHAR(100) NOT NULL,
--     PRIMARY KEY (id)
--     );


-- -- one to many relationship between categories and products, categories can have many products but products can only have one category --

-- CREATE TABLE product (
--     id INT NOT NULL AUTO_INCREMENT,
--     product_name VARCHAR(100) NOT NULL,
--     price DECIMAL(10,2) NOT NULL,
--     stock INT NOT NULL DEFAULT 10,
--     category_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (category_id) REFERENCES category(id)
--     );


-- CREATE TABLE tag (
--     id INT NOT NULL AUTO_INCREMENT,
--     tag_name VARCHAR(100) NOT NULL,
--     PRIMARY KEY (id)
--     );


-- -- joining table linking products to potentially many tags, many to many --
-- CREATE TABLE productTag (
--     id INT NOT NULL AUTO_INCREMENT,
--     product_id INT NOT NULL,
--     tag_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (product_id) REFERENCES product(id),
--     FOREIGN KEY (tag_id) REFERENCES tag(id)
--     );