window.addEventListener('DOMContentLoaded', (event) => {
    fetch_image();
    fetch_breed();
    document.querySelector("#breed-dropdown").addEventListener("change",function (e){
      document.getElementById("dog-breeds").innerHTML= "";
    for (const el of breed_list) {
        if (e.target.value == el[0]) {
            add_items_to_list(el);
        }
    }   
    })
});


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breed_list = [];


function fetch_image() { 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => add_image(json.message));
}

function add_image(data) {
    for (let i= 0; i< data.length; i++){
        let container = document.getElementById("dog-image-container") ;
        let list = document.createElement("ul");
        let li = document.createElement("li");
        li.innerHTML = `<img src= ${data[i]}>`;
        list.appendChild(li);
        container.appendChild(list);
    };
}

function fetch_breed() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => add_breed(Object.keys(json.message)));
}

function add_items_to_list(item){
    let ul = document.getElementById("dog-breeds") ;
            let li = document.createElement("li");
            li.innerHTML = `${item}`;
            li.addEventListener("click",function () {
                return li.style.color = "red";
            } );
        ul.appendChild(li);
}


function add_breed(data) {
    
    for (let i= 0; i< data.length; i++){
        const element = data[i];
        breed_list.push(element);
        add_items_to_list(element);
    };
}





