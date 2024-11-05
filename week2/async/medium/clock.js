function timenow(){
    const now = new Date()
    return now.toLocaleTimeString()
}

setInterval(() => {
    console.log(timenow());
    
}, 1000);