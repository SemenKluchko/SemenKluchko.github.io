let menu = document.getElementsByClassName("nav__links")[0];

document.querySelectorAll('.burger__btn').forEach(item => {
    item.addEventListener('click', event => {
      menu.style.display = "flex";
    })
  })
  
document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', event => {
      menu.style.display = "none";
    })
  })

document.querySelectorAll('.anchor').forEach(item => {
  item.addEventListener('click', event => {
    menu.style.display = "none";
  })
})