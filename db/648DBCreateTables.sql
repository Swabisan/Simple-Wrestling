CREATE TABLE "wrestlers"
(
  "id" SERIAL UNIQUE,
  "user_name" varchar UNIQUE NOT NULL,
  "dob" varchar,
  "weight" int,
  "email" varchar UNIQUE,
  "password" varchar
);

CREATE TABLE "teams"
(
  "id" SERIAL UNIQUE,
  "team_name" varchar,
  "team_location" varchar
);

CREATE TABLE "belongs"
(
  "id" SERIAL UNIQUE,
  "team_id" int,
  "wrestler_id" int
);

CREATE TABLE "management"
(
  "id" SERIAL UNIQUE,
  "team_id" int,
  "coach_id" int
);

CREATE TABLE "signup"
(
  "id" SERIAL UNIQUE,
  "team_id" int,
  "tournament_id" int
);

CREATE TABLE "coaches"
(
  "id" SERIAL UNIQUE,
  "coach_name" varchar,
  "email" varchar UNIQUE,
  "password" varchar
);

CREATE TABLE "admin"
(
  "id" SERIAL UNIQUE,
  "admin_name" varchar,
  "email" varchar UNIQUE,
  "password" varchar
);

CREATE TABLE "tournaments"
(
  "id" SERIAL UNIQUE,
  "tournament_name" varchar,
  "location" varchar,
  "admin_id" int
);

CREATE TABLE "brackets"
(
  "code" SERIAL UNIQUE,
  "name" varchar,
  "weight_class" varchar,
  "tournament_id" int
);

ALTER TABLE "belongs" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "belongs" ADD FOREIGN KEY ("wrestler_id") REFERENCES "wrestlers" ("id");

ALTER TABLE "management" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "management" ADD FOREIGN KEY ("coach_id") REFERENCES "coaches" ("id");

ALTER TABLE "signup" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "signup" ADD FOREIGN KEY ("tournament_id") REFERENCES "tournaments" ("id");

ALTER TABLE "tournaments" ADD FOREIGN KEY ("admin_id") REFERENCES "admin" ("id");

ALTER TABLE "brackets" ADD FOREIGN KEY ("tournament_id") REFERENCES "tournaments" ("id");
