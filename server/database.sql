CREATE DATABASE talentfit_database

-- table super admin
CREATE TABLE superadmin (
  sa_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- table participant
CREATE TABLE participant (
  id SERIAL PRIMARY KEY,
  applied_position VARCHAR(255) NOT NULL,
  participant_name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  email VARCHAR(255) NOT NULL,
  phone INT,
  participant_address VARCHAR(255) NOT NULL,
  domicile VARCHAR(255) NOT NULL,
  education_level VARCHAR(255) NOT NULL,
  major VARCHAR(255),
  university VARCHAR(255),
  job_expereince_1 VARCHAR(255),
  job_experience_type_1 VARCHAR(255),
  year_experience_1 INT,
  company_1 VARCHAR(255),
  start_date_position_1 DATE,
  end_date_position_1 DATE,
  job_expereince_2 VARCHAR(255),
  job_experience_type_2 VARCHAR(255),
  year_experience_2 INT,
  company_2 VARCHAR(255),
  start_date_position_2 DATE,
  end_date_position_2 DATE,
  current_salary INT,
  expected_salary INT
)

