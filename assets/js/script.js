const BASE_URL = 'https://api.pexels.com/v1/photos/'; // API PEXELS

const getPic = async () => {
    const data = await fetch(BASE_URL)
    .then( response => {
        return response.json();
    } )
    .then( data => {
        console.log(data);
    })
    .catch( (err) => console.log(err.message));

    return data.id;
};

const loadImg = async () => {
    const imgs = document.getElementsByClassName("img-api");
    // for(let i=0; i<imgs.length; i++) {
    //     imgs[i].src = await getPic();
    //     // console.log(imgs[i].src);
    // }
    imgs[0].src = "https://api.pexels.com/v1/photos/" + getPic();
    console.log(imgs[0].src);
}

loadImg();