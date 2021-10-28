import {JoystickSmartController} from "smartcontroller"

    var canvas = document.getElementById("coordinateCanvas")
    var ctx = canvas.getContext("2d");
    
    var colours = ["red", "yellow", "green", "blue", "orange"]
    var peers = {};
    var i = 0;
    var startx = 250;
    var starty = 250;

    const simplePeer = new JoystickSmartController('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'qrcode', 150, 150, '1');


    simplePeer.on("connection", function(data){
        data.send('hello')

        peers[data] = i;
        i += 1;
        processData();
    })


    function processData(){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
   
        for (var key in simplePeer.joystickList){
            
            var joystick = simplePeer.joystickList[key]


            if (joystick.isActive){
                startx += joystick.lastPosition.x
                starty += joystick.lastPosition.y

                ctx.beginPath();
                ctx.fillStyle = colours[peers[joystick.peer.peer]];
                ctx.arc(startx, -starty, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill(); 
            }

        }
        requestAnimationFrame(processData);
    }