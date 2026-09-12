CREATE TABLE users
(
    user_id    BIGINT       NOT NULL AUTO_INCREMENT,
    login_id   VARCHAR(30)  NOT NULL,
    password   VARCHAR(100) NOT NULL,
    nickname   VARCHAR(20)  NOT NULL,
    created_at DATETIME(6)  NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE KEY uk_users_login_id (login_id)
) DEFAULT CHARSET = utf8mb4;
