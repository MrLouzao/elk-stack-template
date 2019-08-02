const fs = require('fs');



function getRandomLogLevel() {
    //Define log levels
    const logLevels = ['TRACE', 'DEBUG', 'INFO', 'ERROR', 'FATAL'];
    const randomIndex = Math.ceil(Math.random()*100) % 5;
    return logLevels[randomIndex];
}


// Generate a timestamp message
function getTimestamp(){
    const currentTime = new Date();
    const date = currentTime.getDate();
    const month = currentTime.getMonth(); //Be careful! January is 0 not 1
    const year = currentTime.getFullYear();
    const hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    const dateString = `${year}/${month+1}/${date} - ${hour}:${min}:${sec}`;
    return dateString;
}

//* Generates a message in JSON format
function getMessage(){
    const myTimestamp = getTimestamp();
    const msg = {};
    msg['level'] = getRandomLogLevel();
    msg['time'] = new Date().getMilliseconds();
    msg['content'] = `Now is ${myTimestamp}`;
    return JSON.stringify(msg);
}

// Sleep function to wait
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Eternal loop
async function run(){
    // Create folder logs and file log
    /*fs.mkdir('./logs', { recursive: true }, (err) => {
        if (err) throw err;
    });*/
    //* Write message to file every second
    while(true){
        let msg = getMessage();
        fs.appendFile("./logs/out.log", msg+'\n', function(err) {
            if(err) {
                throw err;
            }
            console.log(msg);
        }); 
        await sleep(1000);
    }
}

run();
