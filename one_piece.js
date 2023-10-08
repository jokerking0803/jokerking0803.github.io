slideIndex = 0;
    // 初始呼叫一次，開始自動播放
    startAutoPlay();
    function startAutoPlay() {
        showSlides();  // 自動切換到下一張
    }

    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000);  // Change slide every 2 seconds
    }
    function plusSlides(n) {
    //   clearInterval(slideInterval);  // 清除自動播放的 interval
      slideIndex += n;
      showSlides();
    }