//reverse a string using stack eg:hellow world  output:world hellow

function reverse(str){
    let split=str.split(' ')
    let stack=[]
    for(const i of split){
        stack.push(i)
    }
    let result=''
    while(stack.length){
         let value=stack.pop()
       
         if(value){
            result=result+' '+value
         }
    }
    return result.trim()
}
console.log(reverse('hellow world'));
//time complexity=O(n)&&space also O(n)