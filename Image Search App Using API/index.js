const apikey="ksOdpho40tp3D67MwvOcSy1oXYkpsZ2SvzvT6W7U9tWE7WSpkHLwvunV";
const input=document.querySelector("input");
const search_btn=document.querySelector(".search_btn");


let page_num=2;
let search_text="";
let search=false;

input.addEventListener("input",(event)=>{
    event.preventDefault();
    search_text=event.target.value;
})

search_btn.addEventListener("click",()=>{
    if(input.value==="")
    {
        alert("Please enter a value to search for!")
        return;
    }
    cleargallery();
    search=true;
    SearchPhotos(search_text,page_num);
})

function cleargallery(){
    document.querySelector(".display_images").innerHTML="";
    page_num=2;
}

async function CuratedPhotos(page_num){
    
    const data=await fetch(`https://api.pexels.com/v1/curated?page=${page_num}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,         
        },
    });
    const response=await data.json();     
    console.log(response);

    display_images(response);  
}

function display_images(response){
    
    response.photos.forEach((image) => {
        const photo=document.createElement("div");
        photo.innerHTML=`<img src=${image.src.large}>
        <figcaption> 📷 By : ${image.photographer} 💜</figcaption>`;
        document.querySelector(".display_images").appendChild(photo);
    });
}

async function SearchPhotos(query, page_num){
    const data=await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,
        },
    });
    const response=await data.json();
    console.log(response);

    display_images(response);
}

// CuratedPhotos(page_num);