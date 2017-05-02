
CREATE TABLE location_fish_junction (
  locationFishJunctionId INT IDENTITY NOT NULL PRIMARY KEY,
  fishId INT REFERENCES fish(fishId),
  locationId INT REFERENCES location(locationId)
)