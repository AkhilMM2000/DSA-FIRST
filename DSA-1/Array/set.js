const sets=new Set([12,3,12,4,3,2,32,3])
const arr=Array.from(sets)
sets.add(73)
console.log(sets,arr);
let obj={}
obj.name='akhil'
obj.name='lala'
console.log(obj);
const map=new Map()
map.set(12,'akhil')
let person={
name:'akhil',
age:23,
location:'kerala'
}
console.log(map.keys());

console.log(Object.entries(person));

