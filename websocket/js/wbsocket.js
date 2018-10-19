var ws = new WebSocket("ws://192.168.110.38:1337");
var dom =  document.getElementById("message");

ws.onopen = function(evt) { 
    ws.send("Jessy");
};

ws.onerror = function(evt){
    var messages = JSON.parse(localStorage.getItem("historique"));

    for(let i =0; i<messages.data.length;i++){

        if(!messages){
            messages = [];
        }else{
            var texte = `<div style="color:${messages.data[i].color}">${messages.data[i].author} : ${String(messages.data[i].object.content)}</div>`;
            dom.innerHTML +=texte;
        }
        
    }
}

ws.onmessage = function(evt) { 
    var messages = JSON.parse(evt.data);
    if(messages.type === 'history'){
        for(let i =0; i<messages.data.length;i++){

            if(messages.data[i].object.identifier === 'audio'){
                var audio = `<audio  id="audioPlayer"  controls src=" ${String(messages.data[i].object.content)}"></audio>`;
                dom.innerHTML +=audio;
             }

             if(messages.data[i].object.identifier === 'text'){

                if(!messages){
                    messages = [];
                }
        
                localStorage.setItem("historique",JSON.stringify(messages));   
                console.log(localStorage.getItem("historique"));

                var texte = `<div style="color:${messages.data[i].color}">${messages.data[i].author} : ${String(messages.data[i].object.content)}</div>`;
                dom.innerHTML +=texte;
             }
             
             if(messages.data[i].object.identifier === 'video'){
                var video = `<div style="color:${messages.data[i].color}">${messages.data[i].author} : <video width="320" height="240" controls>
                <source src="${String(messages.data[i].object.content)}" type="video/mp4"></video></div>`;
                dom.innerHTML += video;
            }    

            if(messages.data[i].object.identifier === 'image'){
                var img = `<div style="color:${messages.data[i].color}">${messages.data[i].author} : <img src='${String(messages.data[i].object.content)}' width='300px'></div>`;
                dom.innerHTML += img;
            }  
        }

     
    }else{
        if(messages.type === 'message'){
          
            if(messages.data.object.identifier === 'audio'){
                var audio = `<audio  id="audioPlayer"  controls src=" ${messages.data.object.content}"></audio>`;
                dom.innerHTML += audio;
             }
           
             if(messages.data.object.identifier === 'text'){
                var texte = `<div style="color:${messages.data.color}">${messages.data.author} : ${String(messages.data.object.content)}</div>`;
                dom.innerHTML += texte;
            }

            if(messages.data.object.identifier === 'video'){
                var video = `<div style="color:${messages.data.color}">${messages.data.author} : <video width="320" height="240" controls>
                <source src="${String(messages.data.object.content)}" type="video/mp4"></video></div>`;
                dom.innerHTML += video;
            }    

            if(messages.data.object.identifier === 'image'){
                var img = `<div style="color:${messages.data.color}">${messages.data.author} : <img src='${String(messages.data.object.content)}' width='300px'></div>`;
                dom.innerHTML += img;
            }    
        }    
    } 
};

var boutton = document.querySelectorAll("button");
for(let i = 0; i<boutton.length;i++){
    
    boutton[i].addEventListener('click',function(event){
        event.preventDefault();
        var typeMessage = this.previousElementSibling.id;
        var message = this.previousElementSibling.value;  
    
        var jsonMessage = {
            identifier:typeMessage,
            content:message
        }
        ws.send(JSON.stringify(jsonMessage));
    });
}

// const constraints = {
//     video : { width: 300, height: 300 },
//     audio : true
// }

// var imageCapture;
// navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
//     var video = document.getElementById('camera');
//     video.srcObject = mediaStream;
//     video.onloadedmetadata = function(e) {
//         video.play();
//     };
//     const track = mediaStream.getVideoTracks()[0];
//     imageCapture = new ImageCapture(track);
// })

// document.getElementById("prendre-photo").addEventListener("click",photo);

// function photo() {
//     imageCapture.takePhoto()
//     .then(function(blob) {
//       var img = document.getElementById("photo");
//       img.src = URL.createObjectURL(blob);
//     })
//     .catch(function(error) {
//       console.log('takePhoto() error: ', error);
//     });
//   }

    


    


// var sendMessage = document.getElementById("sendM");
// sendMessage.addEventListener("click",function(e){
//     e.preventDefault();
//     var message = document.getElementById("myM").value;
//     var jsonMessage = {
//                 identifier:'text',
//                 content:message
//             }
//     // ws.send(JSON.stringify(jsonMessage));

// });

// var sendAudio = document.getElementById("sendAudio");
// sendAudio.addEventListener("click",function(e){
//     e.preventDefault();
//     var audio = document.getElementById("myAudio").value;
//     var jsonAudio = {
//                 identifier:'audio',
//                 content:audio
//             }
//     ws.send(JSON.stringify(jsonAudio));

// });

// var sendAudio = document.getElementById("sendVideo");
// sendAudio.addEventListener("click",function(e){
//     e.preventDefault();
//     var video = document.getElementById("myVideo").value;
//     var jsonVideo = {
//                 identifier:'video',
//                 content:video
//             }
//     ws.send(JSON.stringify(jsonVideo));

// });



