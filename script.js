
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
const navMenu = document.querySelector('.nav-menu');
document.querySelector('#menu-open-button').addEventListener('click', () => {
  navMenu.classList.add('show');
});
document.querySelector('#menu-close-button').addEventListener('click', () => {
  navMenu.classList.remove('show');
});
  
const swiper = new Swiper('.swiper', {
loop: true,  // Loop the slides infinitely
pagination: {
  el: '.swiper-pagination',
  clickable: true  // Make pagination clickable
},
navigation: {
  nextEl: '.swiper-button-next',  // Next button
  prevEl: '.swiper-button-prev'   // Previous button
},
autoplay: {
  delay: 4000,  // Delay between slide transitions (in milliseconds)
  disableOnInteraction: false  // Autoplay won't be disabled on user interaction
},
slidesPerView: 1,  // Show only 1 slide at a time
spaceBetween: 0,  // No space between slides
breakpoints: {
  0: {
    slidesPerView: 1,  // 1 slide for mobile devices
    spaceBetween: 0
  },
  768: {
    slidesPerView: 1,  // 1 slide for tablet devices (or adjust as needed)
    spaceBetween: 0
  },
  1024: {
    slidesPerView: 1,  // 1 slide for larger screens
    spaceBetween: 0
  }
}
});
function updateOptions() {
  const orderType = document.getElementById("orderType").value;
  const milkTeaOptions = document.getElementById("milkTeaOptions");
  const comboOptions = document.getElementById("comboOptions");

  if (orderType === "milktea") {
      milkTeaOptions.style.display = "block";
      comboOptions.style.display = "none";
  } else if (orderType === "combo") {
      milkTeaOptions.style.display = "none";
      comboOptions.style.display = "block";
  } else {
      milkTeaOptions.style.display = "none";
      comboOptions.style.display = "none";
  }
}
function placeOrder() {
  alert("✅ Your order has been placed successfully! Thank you for choosing BOBA & BREW COMPANY 🧋");
  window.open(window.location.origin + "kailangan github ang gamitin url ha", '_blank');
}
