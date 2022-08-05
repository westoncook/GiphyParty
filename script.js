const submitBtn = document.querySelector('#submit');
const inpt = document.querySelector('#search');
const clearBtn = document.querySelector('#clear');
submitBtn.addEventListener('click', getGif);
clearBtn.addEventListener('click', clearGifs);


async function getGif(e) {
    e.preventDefault();
    const searchTerm = inpt.value;
    inpt.value = '';
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: searchTerm}});
    console.log(res);
    const resNum = res.data.data.length;
    if (resNum){
        const idx = randomIndex(resNum);
        const gifURL = res.data.data[idx].images.original.url;
        let img = document.createElement('img');
        img.src = gifURL;
        img.style.class = 'gif col-4'; 
        document.querySelector('.container').prepend(img);
    }
}


function randomIndex(max){
    return Math.floor(Math.random() * max);
}



function clearGifs(){
    const div = document.querySelector('.container');
    div.innerHTML = '';
}

