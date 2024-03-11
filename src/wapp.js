
  ]

let shoppingCart = [];

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("productJSON")) || [];

let generateShop = () => {
  return (shop.innerHTML = productJSON
    .map((x) => {
      let { id, name, price, description, image } = x;
      let search = basket.find((x) => x.name === name) || [];
      
      return `
    <div id=product-id-${name} class="item">
        <img width="220" src=${image} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>${price}/- </h2>
            <div class="buttons">
              <button class="moreInfo onclick="moreInfo()"><a href="https://sreenidhi.edu.in/about-snist/">More Info</a></button>
              <button class="quantity" onclick = "addedCart(${id})">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();





//------------------Slide Show-------------------//

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

   slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 4500); // Change image every 2 seconds

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//-----------Cart Modal Box--------------//


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  showCart();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// -----------------------POP UP BOX-------------------------//
function addedCart(num) {
  alert(productJSON[num].name+" Registration form will be sent to your mail");
  addItem(num);
}
function addItem(a)
{
    shoppingCart.push(productJSON[a]);
    console.log(shoppingCart);
}



function showCart()
{
    modal.style.display = "block";
    console.log(shoppingCart.length);
    //document.getElementById("itemCount").innerHTML = shoppingCart.length;
    document.getElementById("shopping-cart").innerHTML = "";
    if (shoppingCart.length > 0)
    {
        for (let i = 0; i < shoppingCart.length; i++)
        {
            document.getElementById("shopping-cart").innerHTML +=
            
            
            "<div class='itemCart'> <img width='200px' class='imgsize-cart' src=" + shoppingCart[i].image + "></img>" +
            "    <p class='cartName'><b>" + shoppingCart[i].name + "</b></p>" +
            "    <p class='cartPrice'> $" + shoppingCart[i].price + "</p>" +
            "</div>";
        }
    }
    else{
      document.getElementById("shopping-cart").innerHTML +="<p>There is no registrations</p>";
    }
     
}





