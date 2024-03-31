## Step 1
### Intsall all of the necessary packages 

```text 
npm install --save express body-parser mysql2 sequelize nodemon sequelize-typescript
```

## Step 2
### Install their types

```text 
npm install --save express body-parser mysql2 sequelize nodemon sequelize-typescript
```


## Structure

```text
backend  
├── dist                   # All the JavaScript files are here  
├── lib                    # All the TypeScript files are here  
│   ├── config             # App configurations files  
│   │   └── app.ts         # App starting point              
│   ├── controllers        # Request managers  
│   ├── constants          # Schemas, interfaces, common services and enum ...etc  
│   ├── routes             # Define the endpoints  
│   ├── services           # Database Services
│   ├── models             # Define database models here
│   ├── instance           # SQL instance define here  
│   └── environment.ts     # Store all environment variables  
├── server.js              # HTTP server that listens to server port  
├── .gitignore             # Git ignore file  
├── package-lock.json      # Automatically generated document by npm  
├── package.json           # Holds metadata and npm package list  
└── tsconfig.json          # Specify the root level files and the compiler options 
```
