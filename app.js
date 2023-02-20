const http = require("http");
const fs = require("fs");

exports.init = () => {
    http.createServer((request, response) => {
        fs.readFile("./index.html", (err, obj) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(obj)
            }
            response.end();
        });

    }).listen(1111);
};