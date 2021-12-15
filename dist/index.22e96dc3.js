require([
    './smartcontroller.min.js'
], function() {
    const simplePeer = new smart.NesSmartController();
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/nesController.html', 'qrcode', 150, 150, '1');
    simplePeer.on("connection", function(data) {
        processData();
    });
    function processData() {
        for(var key in simplePeer.controllerList){
            var controller = simplePeer.controllerList[key];
            if (controller.buttons.start) console.log(controller.buttons);
        }
        requestAnimationFrame(processData);
    }
});

//# sourceMappingURL=index.22e96dc3.js.map
