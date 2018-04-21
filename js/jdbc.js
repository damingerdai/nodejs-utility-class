var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '267552',
    port: 3306,
    database: 'test'
});

var jdbcTemplate = module.exports;

jdbcTemplate.query =  (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                if(connection) {
                    connection.release();
                }
                reject(error);
            } else {
                connection.query(sql, params, (err, result, fields) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
}