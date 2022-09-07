window.onload = function(){
     setInterval(function(){
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

        if(hours < 10){
            document.getElementById("clock").innerHTML = "0" + hours + " : " + minutes + " : " + seconds;
        }else if(minutes < 10){
            document.getElementById("clock").innerHTML = hours + " : 0" + minutes + " : " + seconds;
        }else if (seconds < 10){
            document.getElementById("clock").innerHTML = hours + " : " + minutes + " : 0" + seconds;
        }else document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;
        
    }, 1000);
}

let toggle = document.querySelector('#toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
}

   