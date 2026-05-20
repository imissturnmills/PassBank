CREATE DATABASE IF NOT EXISTS password_bank;
USE password_bank;

CREATE TABLE IF NOT EXISTS users (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     username VARCHAR(255) NOT NULL UNIQUE,
                                     master_password VARCHAR(255) NOT NULL,
                                     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
                         id         INT AUTO_INCREMENT PRIMARY KEY,
                         user_id    INT NOT NULL,
                         site       VARCHAR(255) NOT NULL,
                         username   VARCHAR(255) NOT NULL,
                         password   VARCHAR(255) NOT NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT IGNORE INTO users (username, master_password) VALUES ('jeff', 'jeffjeff');

INSERT INTO entries (user_id, site, username, password)
VALUES (1, 'jeff.com', 'jeff_admin', 'secret123');