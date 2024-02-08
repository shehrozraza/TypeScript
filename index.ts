function first(){
    let arr=[12,3,43,54,75,85,34,64]
    let num=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
        num=arr[i]  
        } 
    }
    console.log(num);
   
    second()
    
}
function second(){
    console.log("it is the max num");
    let arr=[12,3,43,54,75,85,34,64]
    let num=999999
    for(let i=0;i<arr.length;i++){
        if(arr[i]<num){
        num=arr[i]  
        }
    }
    console.log(num);
    console.log("it is the min num");
}
first()