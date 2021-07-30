import {SmartPeer} from "smartpeer"


    
    const simplePeer = new SmartPeer('123456');
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'canvas');
    
    var printData = (data) => {
        console.log(data);
    }

    simplePeer.registerCallback("data",printData);

    simplePeer.registerCallback("close",printData);

    console.log(simplePeer.callbackFunctions);