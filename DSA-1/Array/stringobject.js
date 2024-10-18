let place='calicut'
let obj={}
for(const val of place){
if(obj[val]){
    obj[val]++
}else{
    obj[val]=1
}

}

function gdc(a,b){
    if(b==0){
        
        return a
    }
    return gdc(b,a%b)
}
console.log(gdc(10,30));


