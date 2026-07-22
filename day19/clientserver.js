const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/login") {
        res.end("Login Page");
    } else if (req.url === "/product") {
        res.end("Product Page");
    } else if (req.url === "/filter") {
        res.end("Filter Page");
    } else if (req.url === "/details") {
        res.end("Details Page");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(2000, () => {
    console.log("Server is working properly....");
});

