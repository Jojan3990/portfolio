const express=require('express');
const path=require('path');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('profileHome');
    // res.send("bahahah");
})
router.get('/database',(req,res)=>{
    res.render('profileHome');
})

module.exports=router;