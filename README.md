# smart-brain-api
smart brain api backend

## Users & Login Table
create table users ( id serial primary key, name varchar(100) not null, email text unique not null, entries bigint default 0, joined timestamp not null );
create table login ( id serial primary key, hash varchar(100) not null, email text unique not null );

## Backend [Node]
* Create a node project with npm init -y.
* Install express npm install express.
* Install nodemon as dev dependency npm install nodemon --save-dev.
* Install body-parser npm install body-parser.
* Add signin & register endpoint.
* Install cors package to avoid cross origin access problem.
* Add cros to app middleware.
* Install knex,pg to connect to the database.
* Replace all the local array operations with database queries.

https://d1qsx5nyffkra9.cloudfront.net/sites/default/files/article-image/eminence-organics-acne-face-mapping.jpg

## Database [PostgreSQL]
* brew update
* brew doctor
* brew install postgresql
* brew services start postgresql
* brew services stop postgresql
* createdb test / dropdb test
* psql test (to go into database)
* create table users(name text,age smallint,birthday date)
* \d to show the tables
* \q to exit to terminal
* create database, create tables.
