
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

         

     // Mendapatkan alamat IP pengguna
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {

  
  // Mengambil informasi IP lebih lanjut
  fetch(`https://ipinfo.io/${data.ip}/json?token=82d64b35835cc7`)
    .then(response => response.json())
    .then(ipInfo => {
      let now = new Date();
      // Membuat objek FormData
      const formData = new FormData();
      formData.append('ip', ipInfo.ip);
      formData.append('city', ipInfo.city);
      formData.append('region', ipInfo.region);
      formData.append('country', ipInfo.country);
      formData.append('loc', ipInfo.loc);
      formData.append('org', ipInfo.org);
      formData.append('timezone', ipInfo.timezone);
      formData.append('tipe', 'Porto');
      formData.append('jam', now);

      // Mengirim data ke Google Apps Script
      fetch('https://script.google.com/macros/s/AKfycbyWZsLgVpHrFwYiQWajQhLyA779MOl6yzM1jrKeqmKWuU7kFy4Re_e9CAk4oCBFO1w/exec', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        console.log('Data successfully posted:');
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
    });
})
.catch(error => {
  console.error('Error fetching IP address:', error);
});