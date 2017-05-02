CREATE TABLE fish (
  fishId INT IDENTITY NOT NULL PRIMARY KEY,
  fishName nvarchar(45) NOT NULL UNIQUE,
  fishLevel nvarchar(45) NOT NULL,
  fishDescription ntext,
  fishPatch nvarchar(5) NOT NULL,
  fishEorzeaDBLink NOT NULL DEFAULT 'http://eu.finalfantasyxiv.com/lodestone/playguide/db/'
)
