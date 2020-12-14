url = "https://api.unsplash.com/"
let response = fetch(url)

async function getAPI(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}




