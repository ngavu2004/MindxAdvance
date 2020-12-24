url = "https://api.unsplash.com/search/photos?page=3&query=office>; rel='last' "

async function getAPI(url){
    let response = await fetch(url);
    var data = await response.text();
    console.log(data);
}




