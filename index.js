'use strict';
let search = require('./search')
search = new search();

try{
    let input = process.argv[2];
    let op;

    if (typeof input === "undefined") {
        throw new Error('Search Input missing')
    } else {
        op = search.searchInteger(process.argv[2]);
    }
    console.log(op);
}catch(e){
    console.log(e);
    process.exit();
}
