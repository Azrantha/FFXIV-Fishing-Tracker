CREATE TABLE user_fish_junction (
  userFishJunctionId INT IDENTITY NOT NULL PRIMARY KEY,
  fishId INT REFERENCES fish(fishId),
  userId INT REFERENCES UserProfile(UserId),
  caught bit DEFAULT 0
)