function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "/public/images/pic_bulboff.gif";
    } else {
      image.src = "/public/images/pic_bulbon.gif";
    }
  }