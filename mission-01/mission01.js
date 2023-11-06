const item = document.querySelectorAll('.item');
const btnList = document.querySelectorAll('.btn-list');

for(let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener('mouseover', function(){
    item[i].style.border = "1px solid #0074E9";
  });
  btnList[i].addEventListener('mouseleave', function(){
    item[i].style.border = "1px solid #c4c4c4";
  });
};


// const item = document.querySelector('.item');
// const btnList = document.querySelector('.btn-list');

// const item = document.querySelectorAll('.item');
// const btnList = document.querySelectorAll('.btn-list');

// const btnEventHandler = {
//   mouseover: function(){
//     item.style.borderColor = "#0074E9";
//   },
//   mouseleave: function(){
//     item.style.borderColor = "#c4c4c4";
//   }
// };

// btnList.addEventListener('mouseover', btnEventHandler);
// btnList.addEventListener('mouseleave', btnEventHandler);

