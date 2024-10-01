console.log("Here i'm");
const url = "https://fakestoreapiserver.reactbd.com/amazonproducts";
function card() {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => album(data));
}
function album(data) {
  console.log(data);
  for (const value of data) {
    const album = value;
    //     console.log(album);
    const contatiner = document.getElementById("contatiner");
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div class ="flex flex-col justify-between gap-3 rounded-xl border-2 p-5  w-full h-full  bg-white text-black">
    <img src ="${album.image}" class ="w-56 h-56 mx-auto"></img>
    <hr>
    <h3 class="text-xl">${album.title}</h3>
      <div class = "flex justify-between items-center">
      <p class ="">$${album.price}</p>
     
      <p>${album.rating.rate} <i class="fa-solid fa-star fa-2xs" style="color: #f4d952;"></i>(${album.rating.count})</p>
</div>
<button class="btn btn-primary">Buy now</button>   
    </div>`;
    contatiner.appendChild(div);
  }
  document.getElementById("loading").classList.add("hidden");
}

card();
