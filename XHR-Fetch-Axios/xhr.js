// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// function reqListener () {
//     console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

// NOTE: The starship API provides list of starships with 10 results per page
// It has a .next  attribute with the URL of the next page

console.log('--------------USING XHR-----------------')
let starShip = new XMLHttpRequest();
starShip.addEventListener('load', (response) => {
    // The data needs to be converted into a JS object using JSON.parse()
    const data = JSON.parse(response.srcElement.responseText) 
    console.log('FIRST/NEXT 10 RESULTS:::::')
    data.results.forEach((element, i) => {
        console.log(`${i}:: ${element.name}`)
    });

    // Get the next 
    starShip.open('GET', data.next);
    starShip.send();
});
starShip.addEventListener('error', (err) => {
	console.error('ERROR WHILE ACCESSING THE RESOURCE !! ',err);
});
starShip.open('GET', 'https://swapi.dev/api/starships');
starShip.send();
