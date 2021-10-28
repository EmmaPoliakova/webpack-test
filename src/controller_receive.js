import {NesSmartController} from "smartcontroller"

    const simplePeer = new NesSmartController('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'qrcode', 150, 150, '1');


    simplePeer.on("connection", function(data){
        processData();
    })


    function processData(){
           
        for (var key in simplePeer.controllerList){
            
            var controller = simplePeer.controllerList[key]
            if (controller.isActive){
                console.log(controller.button)
            }

        }
        requestAnimationFrame(processData);
    }