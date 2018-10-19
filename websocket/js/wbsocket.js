var ws = new WebSocket("ws://192.168.110.38:1337");

ws.onopen = function(evt) { 
    ws.send("Jessy");
};

ws.onmessage = function(evt) { 
    document.getElementById("message").append(evt.data);
    var messages = JSON.parse(evt.data);
    console.log(messages);

    for(var prop in messages){
        if(messages.type == "message"){
            document.getElementById("message").append(messages[text]);
            console.log(`${messages[prop]}`);  
        }
              
    }   
    
};


var sendMessage = document.getElementById("myform");

sendMessage.addEventListener("submit",function(){
    var message = document.getElementById("myM").value;
    console.log(message);
    ws.send(message);

});
