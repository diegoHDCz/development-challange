link to use free-tier back-end with dynamoDB:
https://laizi30a07.execute-api.us-east-1.amazonaws.com/dev/registerPatients

in case using locally execute script:
## using yarn
yarn
yarn dynamodb:install
yarn dynamodb:start
yarn dev
## using npm
npm install
npm dynamodb:install
npm dynamodb:start
npm dev

Necessary body request to use request from aws:
  id
  Name
  Birthday
  E-mail
  Address
