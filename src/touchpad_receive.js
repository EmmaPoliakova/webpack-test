import {TouchPadSmartPeer} from "smartpeer"

    var canvas = document.getElementById("coordinateCanvas")
    var ctx = canvas.getContext("2d");
    
    var colours = ["red", "yellow", "green", "blue", "orange"]

    const simplePeer = new TouchPadSmartPeer('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/touchpad.html', 'canvas');
    
    simplePeer.on("connection", function(data){
        processData();
    })

    function processData(){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var key in simplePeer.touchpadList){
            var touchpad = simplePeer.touchpadList[key]
            ctx.fillStyle = colours[touchpad.playerNum];

            if (touchpad.isActive){  
                for (var key in touchpad.state){
                    var finger = touchpad.state[key];       
                    ctx.beginPath();
                    ctx.arc(finger[0]*1000, finger[1]*700, 10, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fill(); 
                }
            }
        }
        requestAnimationFrame(processData);
    }