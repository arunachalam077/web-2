const { log } = require('console')
const fs = require('fs')

fs.writeFileSync("./a.txt","hey mama",(err)=>{
if(err){
    log("worng",err)
}
else{
    log("file goed")
}

})
const expensiveOperation = () => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) { 
      sum += i;
    }
    console.log('Expensive operation done');
  };
  
  
  expensiveOperation();