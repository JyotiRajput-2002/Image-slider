const image = document.querySelectorAll(".image");
image.forEach((image) => {
  image.addEventListener("click" , () =>{
    removeactiveclasses();
    image.classList.add("active");
  })
})
function removeactiveclasses(){
    image.forEach((image) => {
        image.classList.remove("active");
    })
}