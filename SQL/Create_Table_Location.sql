CREATE TABLE location (
  locationId INT IDENTITY NOT NULL PRIMARY KEY,
  locationName nvarchar(45),
  mapId INT REFERENCES map(mapId)
)