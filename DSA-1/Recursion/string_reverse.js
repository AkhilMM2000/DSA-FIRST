function reverse(str){
    if(str==0){
        return str
    }
    return reverse(str.slice(1))+str[0]
}
console.log(reverse('hellow'));
