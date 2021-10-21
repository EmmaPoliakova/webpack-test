
import nipplejs from 'nipplejs';
import {SmartPhoneController} from 'smartcontroller';
 
var phone = new SmartPhoneController();
 
 var manager = nipplejs.create({
    zone: document.getElementById('zone_joystick'),
    mode: 'static',
    position: {left: '50%', top: '50%'},
    color: 'red'
});

var joystick = manager.get(manager.id);

joystick.on("start", function (evt, data) {
    var message = {"position": data.position, "direction": data.direction, "angle": data.angle, "force": data.force, "distance" : data.distance};
    phone.connection.send({'state':'start', 'joystick':message});
})

joystick.on("move", function (evt, data) {
    
        var message = {"position": data.position, "direction": data.direction, "angle": data.angle, "force": data.force, "distance" : data.distance};
        phone.connection.send({'state':'move', 'joystick':message});
  
})

joystick.on("end", function (evt, data) {
    var message = {"position": data.position, "direction": data.direction, "angle": data.angle, "force": data.force, "distance" : data.distance};
    phone.connection.send({'state':'end', 'joystick':message});
})