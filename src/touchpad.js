// peer variables
var lastPeerId = null;
var peer = null; // own peer object
var conn = null;
var recvIdInput = document.getElementById("receiver-id");
var status = document.getElementById("status");
var message = document.getElementById("message");


// peer id from url variables
const queryString = window.location.search;             
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


var prevPing;

// touch input canvas varaibles
var canvasElement = document.getElementsByClassName('input_canvas')[0];
canvasElement.setAttribute('width', window.innerWidth);
canvasElement.setAttribute('height', window.innerHeight);
var canvasCtx = canvasElement.getContext('2d');
    

function start_handler(ev) {
    
    ev.preventDefault();                                   
    passCoordinates("start", ev.targetTouches);
    
}

function move_handler(ev) {

    ev.preventDefault();
    passCoordinates("move", ev.targetTouches);

}

function end_handler(ev) {
    ev.preventDefault();    
    if (ev.targetTouches.length == 0) {
        // Restore background and outline to original values
        
    }
    conn.send(["end",0,0])
}

function set_handlers(e) {
    // Install event handlers for the given element
    var el = canvasElement;
    el.ontouchstart = start_handler;
    el.ontouchmove = move_handler;
    // Use same handler for touchcancel and touchend
    el.ontouchcancel = end_handler;
    el.ontouchend = end_handler;
}

document.addEventListener("DOMContentLoaded", set_handlers);


function passCoordinates(type, coords){
    if (conn && conn.open) {
        coordinates = {}; 
        for (var i=0; i < coords.length; i++) {
            coordinates[i] = [coords[i].clientX/canvasElement.width, coords[i].clientY/canvasElement.height];
            }
            var msg = coordinates; 
            conn.send([type, coords.length,msg]);
        } else {
            console.log('Connection is closed');
        }
}


/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * peer object.
 */
function initialize() {
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(null, {
        debug: 2
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        console.log('ID: ' + peer.id);
        join();
    });

    peer.on('connection', function (c) {
        // Disallow incoming connections
        c.on('open', function() {
            c.send("Sender does not accept incoming connections");
            setTimeout(function() { c.close(); }, 500);
        });
    });
    peer.on('disconnected', function () {
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function() {
        conn = null;
        console.log('Connection destroyed');
    });
    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
};

/**
 * Create the connection between the two Peers.
 *
 * Sets up callbacks that handle any events related to the
 * connection and data received on it.
 */
function join() {
    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    conn = peer.connect(id, {
        reliable: true
    });

    conn.on('open', function () {
        
        console.log("Connected to: " + conn.peer);

        // Check URL params for comamnds that should be sent immediately
        
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {

    });
    conn.on('close', function () {
      
    });
};

// Since all our callbacks are setup, start the process of obtaining an ID
initialize();