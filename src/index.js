import _ from 'lodash';
import {output, helloWorld, Person} from "learningnpm-hello-world"
import Peer from 'peerjs'

output();

helloWorld();

var person = new Person("Emma", "Pol");
person.whoAmI();

function component() {
    const element = document.createElement('div');
  
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  class ConnectionManager{

    /*fields:
    peerCoonection = peerjs object
    remotePeers = list of connected peers
    callbackFunction = function to call when data from a peer arrives
    */
    constructor(peerConnection) {
        this.peerConnection = new Peer('123456789'); 
        self = this;
  
        this.peerConnection.on('open', function(id) {  //logs the browser peer id
            console.log('My peer ID is: ' + id);
        });
  
        this.peerConnection.on("connection", this.peerOnConnection);  //opens the data connection between 2 peers once a connection is established
        this.remotePeers = [];
        this.callbackFunction = {};
      }
  
      registerCallback = (callbackFunction) => {
        console.log("registering callback")
        this.callbackFunction = callbackFunction
      }
      
      peerOnReceiveCallback = (data) => {
        this.callbackFunction(data)
      }
  
      peerOnConnection = (conn) => {
        this.remotePeers.push(conn);  //add to current connected peers
        conn.on("data", function(data){
            var message = [self.remotePeers.indexOf(conn), data]  //send data received from phone/remote peer + the player number/ index from the peer list
            self.peerOnReceiveCallback(message);
        });
  
        conn.on('close',function(){
            console.log(self.remotePeers.indexOf(conn));
            self.remotePeers.splice(self.remotePeers.indexOf(conn), 1);
        });
      }
    }

    var cm = new ConnectionManager();
    console.log(cm.peerConnection.id);