function getURL(url) {
    //
  }
  
  getURL("http://google.fr")
    .then(res => {
      console.log(res);
  })
    .catch(err => {console.error(err)})
  console.log("Fin de l'exec");

