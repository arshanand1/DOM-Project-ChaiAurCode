const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');
//console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
}, 1000);

