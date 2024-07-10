
// change tahun sekarang

const year = new Date().getFullYear();
const footerCopy = document.querySelector('.footer__copy');
footerCopy.innerHTML = `&#169; ${year} Eko Budi. All rights reserved.`;

// optimasi image

window.addEventListener('load', function() {
  var lazyImages = [].slice.call(document.querySelectorAll('.lazy'));

  if ('IntersectionObserver' in window) {
    var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          var imageUrl = lazyImage.dataset.src + '?v=' + Date.now(); // Tambahkan timestamp unik
          lazyImage.src = imageUrl;
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
    });
  }
});






//mode dark

 var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })


//contac form mengalihkan sukses dan loader

const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      loader.style.display = "none";
      window.location.href = "https://ekobudi.my.id/thankyou.html";
    })
    .catch((e) => alert("Error occured"));
});

 // Mendapatkan alamat IP pengguna