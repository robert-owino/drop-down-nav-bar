const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  // if(links.classList.contains('show-links')){
  //     links.classList.remove('show-links')
  // }else{
  //     links.classList.add('show-links')
  // }
//   links.classList.toggle('show-links')
// toggleClass()
const toggle = links.classList
if(toggle.contains('show-links')){
    toggle.remove('show-links')
}else{
    toggle.add('show-links')
}
});


// function toggleClass(){
//   // links.classList.toggle('show-links')
//   if(links.classList.contains('show-links')){
//       links.classList.remove('show-links')
//   }else{
//       links.classList.add('show-links')
//   }
// }