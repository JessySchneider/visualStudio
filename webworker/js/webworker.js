
onmessage = function(e) {
 
    var workerResult = 'Result: ' + (e.data[0]);
    postMessage(workerResult);
  }