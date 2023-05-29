const _=require('lodash');

const arr=[1,[2,[3]]];

const newitems =_.flatMapDeep(arr);
console.log(newitems)