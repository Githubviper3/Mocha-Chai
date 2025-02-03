export default class myclass{
    constructor(){
        console.log("initialised")
    }

    add(arg1,arg2){
        return arg1+ arg2
    }

    checkIfPrerequisite(numCourses, prerequisites, queries) {
        let hashmap = {}
        let skipflag =false;
        let free= []
        for (let i =0;i<numCourses;i++){
            free.push(i)
        }
   
        const numPreq = prerequisites.length
        for (let i =0;i<numPreq;i++){
            const [key, value] = prerequisites[i];
            if (free.includes(key)){
                free.splice(free.indexOf(key),1)
            }
            hashmap[key] = hashmap[key] ?? [];
            hashmap[key].push(value);
        }
        free.forEach(node => {
            hashmap[node] = []
        });
        const length = queries.length
        let output = []
        for (let i=0;i<length;i++){
            const [key,value] = queries[i]
            let check_values = hashmap[key]
         
                if (check_values.includes(value)){
                    output.push(true)
                } else{
                    let queue = [key];
                    let visited = new Set();
                    let result = [];
                    skipflag = false
                    while (queue.length) {
                      let vertex = queue.shift();
                 
                      if (!visited.has(vertex)) {
                        visited.add(vertex);
                        result.push(vertex);
                       
                        for (const neighbor of hashmap[vertex]) {
                            if (neighbor == value){
                                skipflag =true
                                break
                               
                            }
                          queue.push(neighbor);
                        }
                      }
                    }
                    output.push(skipflag)
                   
   
                }
   
           
        }
        return output
    }


}

