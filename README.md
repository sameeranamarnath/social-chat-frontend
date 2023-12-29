This application can be used by creators to stream and view live sessions and screenshares while chatting with other creators. It uses React,Nodejs,Sequelize, PostgreSQL( RDS is good via Aurora, ), AWS, Redis,DynamoDB(Optional,not used in the latest version),Socket.io

Improvements:
a)I tried using Amazon IVS which seems more reliable
b) Using a separate media server like amazon ivs would facilitate usage of websockets from a service like api gateway which would enable high scalability and more concurrent connections

Currently hosted on railway with 5 dollars of usage free tier at:
https://creatorhub-amars.up.railway.app/
with the api and socket.io server utilising the same tier hosted at
https://social-chat-api-production.up.railway.app

if u are too lazy to register, u can use these creds:
newuser1@gmail.com or newuser2@gmail.com
password: user123!
