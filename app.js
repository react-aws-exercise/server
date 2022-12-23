var express = require('express');
var app = express();

//----------------------------------
// 편집영역
//----------------------------------

app.get('/select', function (req, res, next) {
    console.log('select');
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: '54.199.43.5',
        port: '13306',
        user: 'tiger',
        password: '1234',
        database: 'db01'
    };
    let connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    console.log('db connect');
    let sql = "select * from test;";

    connection.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send(results)
    });
});

app.post('/insert', function (req, res, next) {
    console.log('insert');
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: '54.199.43.5',
        port: '13306',
        user: 'tiger',
        password: '1234',
        database: 'db01'
    };
    let connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    console.log('db connect');
    console.log(req.query);
    let sql = "insert into test value (" + req.query.id + ")";

    connection.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send(results)
    });
});

app.post('/update', function (req, res, next) {
    console.log('update');
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: '54.199.43.5',
        port: '13306',
        user: 'tiger',
        password: '1234',
        database: 'db01'
    };
    let connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    console.log('db connect');
    console.log(req.query);
    let sql = "UPDATE test SET id = " + req.query.id2 + " WHERE id = " + req.query.id1;

    connection.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send(results)
    });
});

app.post('/delete', function (req, res, next) {
    console.log('delete');
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: '54.199.43.5',
        port: '13306',
        user: 'tiger',
        password: '1234',
        database: 'db01'
    };
    let connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    console.log('db connect');
    console.log(req.query.id3);
    let sql = "delete from test where id = " + req.query.id3;

    connection.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send(results)
    });
});
// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));

var port = process.env.PORT || '5000';
app.listen(port, () => { console.log('nodemon restart') });

module.exports = app;
