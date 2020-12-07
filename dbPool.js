const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wt2y6bbr08rlf70t",
    password: "vbs4rprpn8qahmho",
    database: "vw8iksypyddsihxq"
});

module.exports = pool;