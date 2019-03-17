-- MySQL Workbench Forward Engineering
-- -----------------------------------------------------
-- Schema sksmain
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sksmain
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS sksmain DEFAULT CHARACTER SET utf8 ;
USE sksmain ;

-- -----------------------------------------------------
-- Table sksmain.users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table sksmain.roles
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.roles (
  id INT NOT NULL AUTO_INCREMENT,
  role VARCHAR(255) NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table sksmain.permissions
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.permissions (
  id INT NOT NULL AUTO_INCREMENT,
  permission VARCHAR(255) NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table sksmain.role_permissions
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.role_permissions (
  roles_id INT NOT NULL,
  permissions_id INT NOT NULL,
  PRIMARY KEY (roles_id, permissions_id),
  INDEX fk_role_permissions_permissions1_idx (permissions_id ASC) VISIBLE,
  CONSTRAINT fk_role_permissions_roles
    FOREIGN KEY (roles_id)
    REFERENCES sksmain.roles (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_role_permissions_permissions1
    FOREIGN KEY (permissions_id)
    REFERENCES sksmain.permissions (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table sksmain.user_roles
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.user_roles (
  users_id INT NOT NULL,
  roles_id INT NOT NULL,
  PRIMARY KEY (users_id, roles_id),
  INDEX fk_user_roles_roles1_idx (roles_id ASC) VISIBLE,
  CONSTRAINT fk_user_roles_users1
    FOREIGN KEY (users_id)
    REFERENCES sksmain.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_user_roles_roles1
    FOREIGN KEY (roles_id)
    REFERENCES sksmain.roles (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table sksmain.user_details
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sksmain.user_details (
  users_id INT NOT NULL,
  phone VARCHAR(45) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NULL,
  PRIMARY KEY (users_id),
  CONSTRAINT fk_user_details_users1
    FOREIGN KEY (users_id)
    REFERENCES sksmain.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;