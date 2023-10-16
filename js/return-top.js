
// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function () {
const backToTopButton = document.getElementById('back-to-top');

// Kiểm tra vị trí cuộn
if (window.pageYOffset > 75) { // Thay đổi 200 thành mức độ cuộn bạn muốn
backToTopButton.style.display = 'block'; // Hiển thị nút khi cuộn đủ xa
} else {
backToTopButton.style.display = 'none'; // Ẩn nút khi cuộn không đủ xa
}
});

// Lắng nghe sự kiện khi người dùng nhấp vào nút "Quay về đầu trang"
document.getElementById('back-to-top').addEventListener('click', function (event) {
event.preventDefault();
scrollToTop(100);
});

function scrollToTop(duration) {
const start = window.pageYOffset;
const startTime = performance.now();

function scrollStep(timestamp) {
const currentTime = timestamp - startTime;
const progress = Math.min(currentTime / duration, 1);

window.scrollTo(0, start - start * progress);

if (currentTime < duration) {
requestAnimationFrame(scrollStep);
}
}

requestAnimationFrame(scrollStep);
}