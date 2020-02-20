// const mysql = require('mysql2'); 

const Pool = require('pg').Pool;
let util = require('util'); 
const pool = new Pool({  
    host: 'ec2-3-234-169-147.compute-1.amazonaws.com',  
    user: 'umegihwphnesqd',  
    database: 'd57hqu7uf802ug',  
    password: 'e20a5659fb0bfc77386359ada400b5a5c0a15f95fd218bb70d19c14c374674ce',
    port: 5432,
    ssl: true
});  

let db = util.promisify(pool.query);
module.exports = pool;