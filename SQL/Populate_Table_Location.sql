
INSERT INTO location (locationName, mapId)
SELECT 'The Hundred Throes', mapId from map where mapName = 'The Dravanian Forelands'
UNION ALL 
SELECT 'Whilom River', mapId from map where mapName = 'The Dravanian Forelands'
UNION ALL
SELECT 'The Smoldering Wastes', mapId from map where mapName = 'The Dravanian Forelands'