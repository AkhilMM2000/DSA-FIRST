const sets=new Set()
sets.add(13)
sets.add('iam')
sets.add('names')

console.log(sets.delete(13));
console.log(sets);
sets.forEach(element => {
    console.log(element);
    
});
