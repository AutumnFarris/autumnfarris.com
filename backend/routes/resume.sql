
USE resume;

DROP TABLE IF EXISTS languages;
CREATE TABLE languages
(
  id              int unsigned NOT NULL auto_increment,
  language_name   varchar(30) NOT NULL,

  PRIMARY KEY     (id)
);
