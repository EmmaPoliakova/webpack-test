import {JoystickSmartPeer} from "smartpeer"

    var canvas = document.getElementById("coordinateCanvas")
    var ctx = canvas.getContext("2d");
    
    var colours = ["red", "yellow", "green", "blue", "orange"]

    const simplePeer = new JoystickSmartPeer('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'canvas');
    
   
    simplePeer.on("connection", function(data){
        processData();
    })

    function processData(){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var key in simplePeer.joystickList){
            
            var joystick = simplePeer.joystickList[key]

            if (joystick.isActive){
                ctx.beginPath();
                ctx.fillStyle = colours[joystick.playerNum];
                ctx.arc(joystick.lastPosition.x, -joystick.lastPosition.y, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill(); 
            }

        }
        requestAnimationFrame(processData);
    }