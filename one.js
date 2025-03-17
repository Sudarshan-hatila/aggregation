

var a=10;
// function my(a){
//     return a*2;
// }
 function my(a,cb){
    return cb(a);
 }
module.exports=my;