import {JoystickSmartController} from "smartcontroller"

    var canvas = document.getElementById("coordinateCanvas")
    var ctx = canvas.getContext("2d");
    
    var colours = ["red", "yellow", "green", "blue", "orange"]
    var coordinates = [];

    const simplePeer = new JoystickSmartController('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'qrcode', 150, 150, '1');


    simplePeer.on("connection", function(data){
        coordinates.push([250,250])
        processData();
    })


    function processData(){
        var i = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
   
        for (var key in simplePeer.joystickList){
            
            var joystick = simplePeer.joystickList[key]


            if (joystick.isActive){
                coordinates[i][0] += joystick.lastPosition.x
                coordinates[i][1] += joystick.lastPosition.y

                ctx.beginPath();
                ctx.fillStyle = colours[i];
                ctx.arc(coordinates[i][0], -coordinates[i][1], 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill(); 
            }
            i += 1
        }
        requestAnimationFrame(processData);
    }