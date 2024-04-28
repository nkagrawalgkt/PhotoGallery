

const imageList=Array.from(document.querySelectorAll('.img img'))
// console.log(imageList)

let index=0
let currentIndex=0
function showImage(index) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = imageList[index].getAttribute('src')
  // console.log('mainImage.src')
  
}
showImage(0);

function prevImage() {
  imageList[currentIndex].classList.remove('active')
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  imageList[currentIndex].classList.add('active')
  showImage(currentIndex);
}

function nextImage() {
  imageList[currentIndex].classList.remove('active')
  currentIndex = (currentIndex+ 1) % imageList.length;
  imageList[currentIndex].classList.add('active')
  showImage(currentIndex);
}

imageList.forEach(function(image, index) { 
  image.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior (e.g., navigating to the href)
    // console.log('Clicked link: ' + image.getAttribute('src'));
    showImage(index)
    console.log('Index: ' + index);
    imageList[currentIndex].classList.remove('active')
    currentIndex=index
    image.classList.add('active')
  });
});




