const memeTitle = document.getElementById('meme-title');
const memeImage = document.getElementById('memeImage');
const button = document.getElementById('btn');

const updateDetails = (title, url) => {
    memeImage.setAttribute('src', url);
    memeTitle.innerText = title;
};

const memes = [];

const generateMeme = () => {

    const apiUrl = 'https://meme-api.com/gimme';
    const uniqueUrl = `${apiUrl}?${new Date().getTime()}`;
    
    fetch(uniqueUrl)
    .then(res=>res.json())
    .then((data)=>{
        memes.push(data.url);
        updateDetails(data.title, data.url)
    })
    .catch(function(err){
        memeImage.innerHTML = `${err}`
    })
};

button.addEventListener("click", function(){
    generateMeme();
})

generateMeme();

