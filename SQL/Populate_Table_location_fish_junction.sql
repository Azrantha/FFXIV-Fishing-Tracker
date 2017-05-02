
INSERT INTO Location_fish_junction (fishId, locationId)
SELECT fish.fishId, location.locationId from fish, location where fishName = 'Shadowhisker' and locationName = 'The Hundred Throes'
UNION ALL 
SELECT fish.fishId, location.locationId from fish, location where fishName = 'Whilom Catfish' and locationName = 'The Hundred Throes'
UNION ALL
SELECT fish.fishId, location.locationId from fish, location where fishName = 'Scaleripper' and locationName = 'The Hundred Throes'
UNION ALL
SELECT fish.fishId, location.locationId from fish, location where fishName = 'Whilom Catfish' and locationName = 'Whilom River'
UNION ALL
SELECT fish.fishId, location.locationId from fish, location where fishName = 'Whilom Catfish' and locationName = 'The Smoldering Wastes'