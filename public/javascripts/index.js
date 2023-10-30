const gallery = document.querySelector(".container");
const url = "/api/data";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
    data.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.name;
      const description = document.createElement("p");
      description.textContent = item.description;

      const galleryItem = document.createElement("div");
      galleryItem.className = "innerdata";
      galleryItem.appendChild(img);
      galleryItem.appendChild(description);

      gallery.appendChild(galleryItem);
    });
  })
  .catch(error=>console.error("error", error));

const searchFun = () => {
    let filter = document.getElementById('input').value.toUpperCase();

    let visuals = document.getElementById('visuals');

    let dec = visuals.getElementsByClassName('innerdata');

    for(var i =0;i<dec.length;i++){
        let a = dec[i].getElementsByTagName('p')[0];

        if(a){
            let avalue = a.textContent ;

            if(avalue.toUpperCase().indexOf(filter) > -1){
                    dec[i].style.display = "";
        }
        else{
            dec[i].style.display = "none";
        }
    }




}
};