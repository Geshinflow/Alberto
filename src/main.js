
// product dropdown code


     // Select all elements with the class 'cart'
     const cartButtons = document.querySelectorAll('.cart');

     // Function to handle click event and update message
     function showMessage(event) {
         // Find the corresponding message element
         const parentDiv = event.target.parentElement;
         const messageElement = parentDiv.querySelector('.message');
         messageElement.textContent = 'Added to cart successfully!';
     }

     // Attach onclick event handler to each cart button
     cartButtons.forEach(button => {
         button.onclick = function(event) {
             showMessage(event);
         };
     });


     function openPopup(title, subtitle, description, image) {
      document.getElementById('popupTitle').innerText = title;
      document.getElementById('popupSubtitle').innerText = subtitle;
      document.getElementById('popupDescription').innerText = description;
      document.getElementById('popupImage').src = image;
      document.getElementById('popup').classList.remove('hidden');
    }
  
    function closePopup() {
      document.getElementById('popup').classList.add('hidden');
    }

    let visitorCount = 0;
  function updateVisitorCount() {
    visitorCount++;
    document.getElementById('visitorCount').innerText = 'Visitors: ' + visitorCount;
  }
  updateVisitorCount();

  let time = document.getElementById("time");
setInterval(()=>{
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
},1000)

// date
let date = document.getElementById("date");
setInterval(()=>{
  let d = new Date();
  date.innerHTML = d.toLocaleDateString();
})

// let navscroll = document.getElementById('nav')
// window.onscroll = function(){
//   if (scrollY = scroll){

//   }

// }

