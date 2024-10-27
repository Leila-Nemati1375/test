const btn_negative = document.querySelector('.negative');
const btn_reset = document.querySelector('.reset');
const btn_plus = document.querySelector('.plus');
const display = document.querySelector('.content');
const con = document.querySelector('.container');

let new_num;

btn_plus.addEventListener('click',function () {
  new_num=Number(display.innerHTML) +1;
    display.innerHTML=new_num;
});

btn_reset.addEventListener('click',function () {
    display.innerHTML=0;
});

btn_negative.addEventListener('click',function () {
    new_num=Number(display.innerHTML)-1;
    display.innerHTML=new_num;
});