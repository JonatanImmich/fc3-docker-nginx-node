USE nodedb;

CREATE TABLE IF NOT EXISTS pessoa (
    id integer not null auto_increment,
    name varchar(255) not null,
    PRIMARY KEY (id)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO pessoa ( name) VALUES ('João Fulano');