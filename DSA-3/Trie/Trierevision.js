class Trie{
    constructor(){
        this.children={}
        this.reachword=false
    }

}

class TrieString{
    constructor(){
        this.root=new Trie()
    }

 insertword(word){
    let node=this.root
    for (const element of word) {
          if(!node.children[element]){
            node.children[element]=new Trie()
          }

          node=node.children[element]
    }
    node.reachword=true
 }
  searchword(word){
    let node=this.root
    for(const str of word){
        if(!node.children[str]){
            return false
        }
        node=node.children[str]
    }
   return  node.reachword
  }

  prefix(pref){
    let node=this.root
    for(const pre of pref){
        if(!node.children[pre]){
            return false
        }
        node=node.children[pre]
    }
    return true
  }

  collectword(root=this.root,current='',result=[]){
   if(root.reachword){
    result.push(current)
   }
   for (const key in root.children) {
        
    this.collectword(root.children[key],current+key,result)
   }
 return result

  }

  autocomplete(word){
let node=this.root
 for(const letter of word){
    if(!node.children[letter]){
      return false
    }
    node=node.children[letter]
 }
 let lists=[]
 this.helpercollect(node,word,lists)
 return lists
  }

helpercollect(node,word,arr){
     if(node.reachword){
        arr.push(word)
     }
     for (const  key in node.children) {
        this.helpercollect(node.children[key],word+key,arr)
     }
}

deleteword(word){
    this.delete(this.root,word,0)
}
delete(node,word,index){
    if(index===word.length){
    if(!node.reachword){
        return false
    }
    node.reachword=true
    return Object.keys(node.children).length===0

    }
  let char=word[index]
  let childnode=node.children[char]
  if(!childnode){
    return false
  }
 let shouldDeleteChild=this.delete(childnode,word,index+1)
 if(shouldDeleteChild){
    delete node.children[char]
    return Object.keys(node.children).length==0&&!node.reachword
 }
return false

}

}

const tr=new TrieString()
tr.insertword('january')
tr.insertword('apple')
tr.insertword('application')
tr.insertword('appreciate')

console.log(tr.collectword());

