const mariadb = require('mariadb');
const express = require('express');
const path = require("path")
const router = express.Router();
var session = require('express-session');
var str;
var data_todo_send;

// router.use(session({ resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 } }));
const conPool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: 'portfolio_own'
});
// console.log(con);

async function main(req, res) {
    try {
        let conn =await conPool.getConnection();
        let rows =await conn.query("select * from todo_insert")
        lop = rows.length;
        console.log(lop);
        var i = 0;
        var itemsJsonArray = [];
        while (i < lop) {
            // console.log(rows[i]);
            let title = rows[i].title;
            let desc = rows[i].description;
            itemsJsonArray.push([title, desc]);
            i++;
        }
        itemsJsonArray.forEach((element, index) => {
            str += `
            <tr>
            <th scope="row">${++index}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteList(${--index})">Delete</button></td>
        </tr>
            `;
        });
        data_todo_send = str;
        // return await Promise.resolve(data_todo_send);
        // console.log(data_todo_send);
        console.log('this');
        // sessionData = req.session;
        // console.log(sessionData);
        // return data_todo_send;
        // console.log("third");
        // tablebody.innerHTML=str;
    } catch (error) {
        console.log(error);
    }
}
// main();
module.exports = async function todo() {
    await main();
    var todo_send = await data_todo_send;
    return todo_send;
};


