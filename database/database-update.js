const mariadb= require('mariadb');
// import { createPool } from 'mariadb';
// const router = require('../routes/blog');
const express=require('express');
const router=express.Router();

const pool =mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database:'portfolio'
});



async function main(){
    try {
        let conn=await pool.getConnection();
        let rows=await conn.query("select * from user_contact_message")
        console.log(rows);
        // console.log(mailTake,messageTake);
        // show=await localStorage.getItem('contact');
        // console.log(show);
    } catch (error) {
        
    }
}
main();

module.exports=router;