// function myFunc(index,item){
//     console.log(index,item,arr);
//     ;
// }
// let arr=["apple","mango","banana"]
// arr.forEach(myFunc)
// let arr=[1,2,3,4,5,6]
function first() {
    console.log("i am first function");
}
function second() {
    console.log("i am callback function");
    first();
}
second();
