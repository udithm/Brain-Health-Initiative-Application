# Health
node version === v16.13.2
npm version === 8.1.2

To run the web app cd client and do npm install 

setup our code:

1. We have 2 folders inside the codebase folder
	2.1 client is the frontend code.
	2.2 server is the backend code.
2. Build the Frontend and Backend folder separately in your preferred IDE. 
	3.1 npm install for installing node module sin frontend folder
	3.2 mvn clean install for installing maven dependencies in backend folder.
3. We also need to setup "HADdb" in mysql by inserting the required initial data (roles and questionnaires) into it using the "dataSource.sql" file provided.
4. Run the frontend and backend separately from your terminal.
	4.1 npm start inside the client folder.
	4.2 mvn spring-boot:run inside server folder.
5. You should now be able to access the website at http://localhost:3000/login.
