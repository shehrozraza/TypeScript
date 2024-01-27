
function first(){
    let num=10
    for(let i=1;i<11;i++){
        let ans=num*i
        console.log(`${num}+${i}=${ans}`);
        second()
    }
}
function second(){
    console.log("i am callback function");
    let num=10
    for(let i=1;i<11;i++){
        let ans=num*i
        console.log(`${num}+${i}=${ans}`);
       
    
}
}
first()