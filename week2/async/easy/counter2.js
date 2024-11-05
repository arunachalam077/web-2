let timeout = 0;

function time(){
    timeout++
    console.log(timeout);
    setTimeout(time,1000)
}
time()