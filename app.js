var main = document.querySelector('main')
var cursor = document.querySelector('.cursor')
var gift = document.querySelector('.gift')

main.addEventListener('mousemove', function(me){
    // cursor.style.left = me.x + "px"
    // cursor.style.top = me.y + "px"
    gsap.to(cursor,{
        x:me.x,
        y:me.y 
    })
})

// gift.addEventListener('mousemove',function(){
//     gsap.to(gift,{
//         x:me.x,
//         y:me.y 
//     })
//     let size = math.random()*50;
//     body.appendChild(gift);
//      gift.style.width = size +'px';
//      gift.style.height = size +'px';
//     setTimeout(function(){
//         gift.remove();
//     },2000);
// })
document.onmousemove = (e) => {
    let body =document.querySelector('main');
    let snow =document.createElement('span');
    let x =e.pageX;
    let y =e.pageY;
    let size = Math.random() * 50;

    snow.style.left =x+'px';
    snow.style.top = y +'px';
  snow.style.width = size +'px';
  snow.style.height = size +'px';
  body.appendChild(snow);
  setTimeout(() =>{
    snow.remove();
  },2000);

};