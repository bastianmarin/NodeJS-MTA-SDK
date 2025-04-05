/*  
    Name: MTA.js
    Author: iroaK
    Description: MTASDK from Node.JS
*/

// Librarias del Script
const axios = require('axios').default;

// Clase Principal
class MTA {

    /**
    *   Configure HTTPs POST (Host, Port, Username, Password)
    *   @param {string} host - Host of Server MTA
    *   @param {number} port - Port of Server MTA
    *   @param {string} username - User MTA
    *   @param {string} password - Password User MTA
    */
    constructor(host, port, username, password){
        this.host = host || 'localhost';
        this.port = port || 22005;
        this.username = username || '';
        this.password = password || '';
    }

    /**
    *   Send Request HTTP to MTA:SA with Axios POST 
    *   @param {string} resourceName - Name of Script
    *   @param {string} functionName - Function to Trigger 
    *   @param {string} argsFunction - Object in JSON send to Function 
    */
    async call(resourceName, functionName, argsFunction){
        try{
            return {
                status: true,
                data: await axios({
                    method: 'POST',
                    url: `http://${this.host}:${this.port}/${resourceName}/call/${functionName}`,
                    data: argsFunction,
                    auth: {
                        username: this.username,
                        password: this.password 
                    }
                })
            }
        } catch(e) {
            return { status: false, data: e }
        }
    }

}

// Exportacion de la Clase
exports.MTA = MTA;