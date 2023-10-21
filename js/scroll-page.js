   // Độ cao bạn muốn cuộn đến (pixels)
    var scrollToHeight = 180;

    // Thời gian cuộn (milliseconds)
    var scrollDuration = 1000;

    function scrollToTop() {
  var currentScroll = window.scrollY || document.documentElement.scrollTop;
  var scrollStep = currentScroll < scrollToHeight ? 10 : -10;

  function step() {
    if ((scrollStep > 0 && currentScroll < scrollToHeight) || (scrollStep < 0 && currentScroll > scrollToHeight)) {
      currentScroll += scrollStep;
      window.scrollTo(0, currentScroll);
      requestAnimationFrame(step);
    }
  }

  step();
}

    // Tự động cuộn khi trang web được tải
    window.onload = scrollToTop;