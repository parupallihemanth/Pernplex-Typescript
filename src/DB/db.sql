-- Movie_info table
create table movie_info( movie_id serial not null PRIMARY KEY, movie_name varchar(30), movie_languages text[], movie_genre varchar(20),
					   movie_rating decimal, movie_duration timestamp);

-- ex: insert into movie_info(movie_name,movie_languages, movie_genre, movie_rating, movie_duration) VALUES('RRR', Array['Telugu','English'],'Fiction', 5,'3:00:30');

-- cast_info table
create table cast_info( cast_id serial not null PRIMARY KEY, movie_cast text[], FOREIGN KEY(movie_id) REFERENCES movie_info(movie_id));

-- Ex: insert into cast_info(movie_cast, movie_id) values( Array['Jr NTR', 'Ram charan','Alia'], 1);

-- schedule
create table schedule( schedule_id serial not null PRIMARY KEY, movie_shows time[], FOREIGN KEY(movie_id) REFERENCES movie_info(movie_id));

-- Ex:insert into schedule(movie_shows, movie_id) VALUES( Array[TIMESTAMP '2004-10-19 10:23:54',TIMESTAMP '2004-10-19 10:23:54'],1);

-- locations
create table locations( location_id serial not null PRIMARY KEY, movie_locations t[], FOREIGN KEY(movie_id) REFERENCES movie_info(movie_id));


-- ex:insert into locations(movie_locations, movie_id) VALUES( Array['Halifax', 'Toronto', 'Vancover'],1);
