const fs = require('fs');

const log = (req, res, next) => {
    let data = new Date();
    let dataFormatada = `
    Acessou no dia, mês e ano: ${data.toLocaleDateString()}
    E na hora: ${data.toLocaleTimeString()}
    `
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let newLog = `
    ${dataFormatada} 
    Utilizando o método: ${method}  
    A url acessada foi: ${url} 
    Status: ${status} \n
    -----------------------------------`;

    
    fs.appendFile("./logs/userLogs.txt", newLog + "\n", err => {
        if (err) {
          console.log(err);
        }
      });
    next()
}


module.exports = log;