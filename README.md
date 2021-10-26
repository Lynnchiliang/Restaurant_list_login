# Restaurant_list_login

A website that you can make your own favorite restaurant list. You can see detail, delete and also can edit it!
Please remember sign in with email first. This website also provide login from Facebook!


## Prerequisites
*  Visual Studio Code
*  Node.js
*  Express.js
*  Express-Handlebars
*  MongoDB
*  Mongoose
*  body-parser
*  method-override
*  express-session
*  bcrypt.js
*  Facebook for Developer


## Installation and Execution
1.  Clone the files to your computer
```
git clone https://github.com/Lynnchiliang/Restaurant_list_login.git
```
2. Init: install the npm packages
```
cd restaurant-list-login
```
```
npm install
```
3. Create .env file and store API Key in the file
```
touch .env
```
- Please see [.env.example](https://github.com/wentingliuu/restaurant-list-login/blob/main/.env.example) for reference.
- Please get your own Facebook API key from [Facebook](https://developers.facebook.com/)
4. Run MongoDB Server
```
cd ~/mongodb/bin/
```
```
./mongod --dbpath <path to mongodb-data directory>
```
- While the terminal shows `waiting for connections on port 27017`, MongoDB has started successfully.
5. Insert seeder
```
npm run seed
```
6. Run the project
```
npm run dev
```
- While the terminal returns `Express is listening on localhost:3000`, please visit http://localhost:3000 on your browser.
