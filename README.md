# books-app-backend-node

Steps To Install and Start Up the Server
1. Download the codebase with branch 'master'
2. Make sure you have latest version of nodeJS install on your system.
3. Go to project folder and type 'npm i', it will download all required dependencies for you
4. Make sure you have mySQL setup. For minimum setup, you need to have a database named Students, tables named Users and Books. Schema is mentioned in schema.txt
5. create a new file '.env' inside the folder and add the followind details for your mySQL database :
  * DB_HOST='localhost'
  * DB_USERNAME='your mysql username'
  * DB_PASSWORD='your mysql user's password'
  * CORE_DB='Students'
6. Once done, type 'npm run start' in the terminal and it should start the server on port 3000, it will also print connection id for mysql. If any errors come, make sure to resolve them
7. Visit the apis at localhost:3000/api/v1/users/*
8. Currently 2 apis are supported localhost:3000/api/v1/users/login and localhost:3000/api/v1/users/register and both take username and password as the body.

Contact me for more details.
