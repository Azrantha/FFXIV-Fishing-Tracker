# FFXIV-Fishing-Tracker
FFXIV Fishing Tracker ASP.Net project with C# 

Assignment for CI346

FFXIV Fishing Tracker is a website designed to allow people who play fisher in FFXIV to track the progress of which fish they have caught. Features like filtering the list based on the patch the fish was introduced, and whether the user has caught it already, as well as pages to allow viewing the fish by location.
Combining these will let a user track the remaining fishes they need to cash with an easier interface than the one provided within the game.

# Build Instructions
This project requires msbuild to build and IIS Express to run. 
Build tested on Windows 10, website tested in Firefox and Opera.

- Clone the project to your computer.
- Open command-line, and navigate to *Path To Cloned Project*\VisualStudio
- Type msbuild and press enter. Wait for it to finish.

# Deploying the Server
You must build the server locally first!

- Open command-line, navigate to your iisexpress.exe file(typically found in C:\Program Files\IIS Express)
- Type iisexpress.exe /path:"*\Path To Cloned Project*\VisualStudio\PrecompiledWeb\localhost_64067" /port:5000 *(Or other port if desired)*
- The server will now continue to run on the specified port until you close the command-line interface, or type Q into the console.

# Tests
Tests for the website are available once it has been deployed, to access them, open http://localhost:5000/Tests in a browser of your choice, the tests should execute immediately.
Note, that the tests page is configured to only be accessible from the server that is hosting the web site, accessing it externally will result in forbidden response.

These tests can also be used as an indicator for testing various browsers compatibility.

# Database
The project comes with it's own SQL Server Compact database, StarterSite.sdf, located in the VisualStudio\FFXIVFishingWebSiteRazor\App_Data folder. 
This contains some sample data for fish, and a single user (see below for login details). 

If you wish to create your own database, it will have to be a SQL Server Compact database named StarterSite located in the same folder described above.
If you do this, please first build and deploy the server with your new database, and then execute the SQL found in the \SQL\ directory, to add the relative tables for fish and their sample data.
After doing this, you should be able to create new users and use the website as you wish.

# Using the website
To use the website, open http://localhost:5000/ in a browser of your choice (assuming you are accessing the website from your host machine).

## Default login details
- **Username:** test@example.com
- **password:** password

If you are using the supplied database you will be able to login with the details provided above. 
This will cause the Save Caught Status button to appear on the main/location pages. 
Selecting this button will save which fish you have checked as caught to the database. 
The caught status of each fish will then be updated accordingly throughout the use of the website as long as you are 
logged in as the same user who saved the changes.

To only display the fish that were introduced in a particular set of patches, adjust the selection box to the relevant selection. 
To hide already caught fish, check the Hide caught fish checkbox.
