# NodeJS-MTA-SDK

A Node.js SDK for interacting with MTA:SA servers via HTTP POST requests. This library simplifies communication with MTA:SA server resources and functions.

## Features

- Configure HTTP POST requests to MTA:SA servers.
- Trigger server-side functions with ease.
- Built-in error handling for HTTP requests.

## Installation

Install the package using npm:

```bash
npm install nodejs-mta-sdk
```

## Usage

### Import the SDK

```javascript
const MTA = require('nodejs-mta-sdk');
```

### Create an Instance

```javascript
const mta = new MTA('your-server-host', 22005, 'username', 'password');
```

### Call a Server Function

```javascript
(async () => {
    const response = await mta.call('resourceName', 'functionName', { key: 'value' });
    if (response.status) {
        console.log('Success:', response.data);
    } else {
        console.error('Error:', response.data);
    }
})();
```

## Example

```javascript
const MTA = require('nodejs-mta-sdk');

const mta = new MTA('127.0.0.1', 22005, 'admin', 'password123');

(async () => {
    const result = await mta.call('myResource', 'myFunction', { param1: 'value1' });
    if (result.status) {
        console.log('Server Response:', result.data);
    } else {
        console.error('Request Failed:', result.data);
    }
})();
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
