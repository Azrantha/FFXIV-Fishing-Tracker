
INSERT INTO user_fish_junction (fishId, userId)
SELECT fish.fishId, UserProfile.userId from fish, UserProfile