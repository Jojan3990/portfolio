const mariadb= require('mariadb');
// import { createPool } from 'mariadb';
const router = require('./routes/blog');
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
    } catch (error) {
        
    }
}
main();

