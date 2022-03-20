CREATE DATABASE IF NOT EXISTS ticket_to_ride;
USE ticket_to_ride;

CREATE TABLE IF NOT EXISTS highscores(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    points INT NOT NULL,
    player_count INT NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;