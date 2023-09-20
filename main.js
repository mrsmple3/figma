(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  };
})();
//Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuClose = document.querySelector(".header_nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav-active");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header_nav-active");
  });
})();

let h1 = document.createElement("h1");
let div = document.createElement("div");
h1.innerHTML = "rabotayette";
div.classList.add("class-grid");
h1.classList.add("class-grid-header");
div.appendChild(h1);
document.body.appendChild(div);

{
  /* <input type="text" id="myinput">
<button class="mybutton" data-paste="1">1</button>
<button class="mybutton" data-paste="2">2</button>
<button class="mybutton" data-paste="3">3</button>
<hr>
<span id="action" style="display:none">Key press</span>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
  $('#myinput').on('keypress', function() {
    $('#action').fadeIn(function() {
      $(this).fadeOut();
    });
  });

  $('.mybutton').on('click', function() {
    var Paste = $(this).data('paste');
    $('#myinput').val($('#myinput').val() + Paste).trigger('keypress');
  });
});
</script> */
}
