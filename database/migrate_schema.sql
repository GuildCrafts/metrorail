CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  current_riders INTEGER,
  current_station VARCHAR(25)
);

CREATE TABLE stations(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  passengers_waiting INTEGER,
  previous_station VARCHAR(25),
  next_station VARCHAR(25)
);
