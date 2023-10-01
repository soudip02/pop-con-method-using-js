var rect = document.querySelector(".rect");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};


rect.addEventListener(
  "mousemove",
  throttleFunction((evt) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    document.body.appendChild(div);

    div.style.left = evt.clientX + 'px';
    div.style.top = evt. clientY + 'px';

    var image = document.createElement("img");
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9C6V381k-QgR0uiekiRkvpNCo6Z59plF6fpg4-eO5-1SjL9Ejf6VKw4xTbPcslB0yPko&usqp=CAU");
    div.appendChild(image);

    gsap.to(image,{
        y: "0",
        ease: Power4,
        duration: 1,
    });

    gsap.to(image,{
        y: "100%",
        ease: Power4,
        delay: .6 ,
    });


    setTimeout(function(){
        div.remove();
        }, 1500);

  }, 400)
);
