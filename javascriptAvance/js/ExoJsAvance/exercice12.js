const prom =  function (url) {
  return new Promise((success, error) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) success(xhr.responseText);
          else error(xhr);
        }
      };
      xhr.open('GET', url, true);
      xhr.send();
  })
}

prom('https://flatuicolors.com/palette/cn')
  .then( response => console.log(response) )

