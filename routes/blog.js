const express = require('express');
const path = require('path');
const mariadb = require('mariadb');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));




// final_data = require('../databaseUpdate');
// async function dd() {
//     toSendHtml = await final_data();
//     // console.log(toSendHtml);
//     await router.get('/', (req, res) => {
//         res.render('profileHome');
//     })

// }
// dd().then()
router.get('/', (req, res) => {
            res.render('profileHome');
        })
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: 'portfolio_own'
});

//insert in login
router.post('/insert_todo', async function (req, res) {
    // db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.body.id, req.body.name];
    let title = req.body.title_do; //this might be req.query.titl_do also
    let desc = req.body.desc_do;
    let udelete = 0;
    if (!title && !desc) {
        res.redirect('../');
    }
    else {
        // console.log(title, desc, udelete);
        let conn = await pool.getConnection();
        // let check = await conn.query(`insert into todo_insert(title,description,udelete) values('${title}','${desc}','${udelete}')`);
        res.redirect('../')
    }

})
module.exports = router;