var imgcount = -1;
var images = ['assests/no0.png','assests/no1.png','assests/no2.png','assests/no4.png','assests/no5.png','assests/no6.png','assests/no3.png','assests/no7.png','assests/no8.gif','assests/no9.gif','assests/no10.gif','assests/no11.gif','assests/no12.gif','assests/no13.gif','assests/no14.gif','assests\no15.gif'];
function yesclick(){
    var image = document.querySelector('.image');
    var text = document.getElementById('text');
    let buttons = document.getElementById('button_section');
    let newcolor = 'white';
    buttons.style.display = 'none';
    console.log(buttons.style.color);
    // document.getElementsByClassName('buttons').style.display = "none";
    // buttons.style.display = "none"   
    console.log(text);
    // text.innerHTML = 'I love you so much';
    // console.log(text.textContent);
    var body = document.body;
    var NewBackgroundImage = "url('assests/firecracker1.gif')";
    body.style.backgroundImage = NewBackgroundImage;
    image.src = 'assests/yes1.gif';
    
}
  
function changePosition() {
    imgcount++;
    if(imgcount == 15){
     imgcount = 0;
    }
    var button = document.querySelector('.no1');
    var image = document.querySelector('.image');

    // Generate random positions for left and top within the window's width and height
    windowHeight = 90;
    windowWidth = 576;
    var newLeft = Math.floor(Math.random() * windowWidth);
    var newTop = Math.floor(Math.random() * windowHeight);
    console.log(newLeft);
    console.log(newTop);
    button.style.transform = `translate(${newLeft}px,${newTop}px)`;
    image.src = images[imgcount];
  }

