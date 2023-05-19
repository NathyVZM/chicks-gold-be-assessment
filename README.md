# chicks-gold-be-assessment - Water Jug Riddle

This project was developed using Node.js (`v^18.16.0`). Install Node.js by downloading the executable through the [official website](https://nodejs.org) or using NVM (*Node Version Manager*) ([Windows](https://github.com/coreybutler/nvm-windows), [macOS/Linux](https://github.com/coreybutler/nvm-windows)), in case another version of Node.js is installed in the computer.

To install the aforementioned version with NVM, run the following commands in the CMD/console of preference:

### Windows/macOs/Linux

```cmd
nvm install 18.16.0
nvm use 18.16.0
```

To check if Node.js was correctly installed, run the following commands. If the installation was completed successfully, then the version of Node.js and NPM should be seen in the console.

```cmd
node -v
npm -v
```

Once the repository is cloned, locate into the root folder of the project and install the dependencies using the next command:
```cmd
npm i
```
Or
```cmd
npm install
```

<br>

## Run the server
The server can be started in Production Mode or Development Mode. To start the server using the former option, use the next commands:

```cmd
npm run build
npm start
```
In case the development server is preferred, run it with this command:
```cmd
npm run dev
```

<br>

> In order to use environment variables, duplicate the file `env.default` and rename it to `.env`. The server will now use the PORT configured in the `.env` file

<br>

Make an HTTP Request using the API Client of preference (e.g.: Postman, Insomnia) to the URL `http://localhost:3000` with the following body structure (`json`) to get the solution to the Water Jug Riddle:

```json
{
    "bucketX": 2,
    "bucketY": 10,
    "amountWantedZ": 4,
    "xName": "Bucket X",
    "yName": "Bucket Y"
}
```
Where:
- `bucketX` is the capacity for X/Bucket 1/Jug 1
- `bucketY` is the capacity for Y/Bucket 2/Jug 2
- `xName` is the given name for Bucket 1 (for explanation purposes)
- `yName` is the given name for Bucket 2 (for explanation purposes)