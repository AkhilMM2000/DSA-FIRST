//sort it if same score coming just sort alphabatic order

const students = [
    {name: "malice", score: 85},
    {name: "bob", score: 85},
    {name: "Charlie", score: 90},
    {name: "David", score: 80}
  ];
  
  function selection(arr) {
  if(arr.length<2){
    return arr
  }
  let pivot=arr[0]
  let left=[]
  let right=[]
  for(let i=1;i<arr.length;i++){
      if(arr[i].score<pivot.score){
       
     left.push(arr[i])
      }else if(arr[i].score>pivot.score){
        right.push(arr[i])
      }else{
        if(arr[i].name<pivot.name){
          left.push(arr[i])
        }else{
          right.push(arr[i])
        }
      }
  
  
  }
    
  return [...selection(left),pivot,...selection(right)]
  
  }
  
  console.log(selection(students));
  