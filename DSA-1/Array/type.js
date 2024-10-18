// Create an ArrayBuffer of 16 bytes (128 bits)
let buffer = new ArrayBuffer(16);

// Create a view to interpret the buffer as a 32-bit integer array
let int32View = new Int32Array(buffer);


let k = [[12, 13, 3], [ 2, 1], [12, 55, 4]];
let m=[]
for(let i=0;i<k.length;i++){
    for(let j=0;j<k[i].length;j++){
        if(k[i][j]%2!==0){
            k[i][j]=0
        }
        
    }
}
console.log('odd array',k);
