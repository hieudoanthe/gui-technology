var x = 0;
function btn1() {
    if (x != (-289 * 8)) {
        x = x - 289 * 4; 
        document.getElementById("btn-ck1").style.display = "block";
    } else {
        document.getElementById("btn-ck2").style.display = "none";
    }
    document.getElementById("next").style.transform = "translateX(" + (x) + "px)";

}
function btn2() {
    if (x != 0) {
        x = x + 289 * 4;  
        document.getElementById("btn-ck2").style.display = "block";
    } else {
        document.getElementById("btn-ck1").style.display = "none";
        document.getElementById("btn-ck2").style.display = "block";
    }
    document.getElementById("next").style.transform = "translateX(" + (x) + "px)";
}



var currentIndex = 0; // Biến để theo dõi vị trí hiện tại của hình ảnh
var imageCount = 6; // Tổng số ảnh
var interval; // Biến để lưu đối tượng interval

function nextImage() {
    // Kiểm tra xem đã ở ảnh cuối cùng chưa
    if (currentIndex < imageCount - 1) {
        currentIndex++; // Tăng vị trí hiện tại lên 1
    } else {
        currentIndex = 0; // Quay lại ảnh đầu tiên nếu đã ở ảnh cuối cùng
    }

    updateImageTransform();
}

function previousImage() {
    // Kiểm tra xem đã ở ảnh đầu tiên chưa
    if (currentIndex > 0) {
        currentIndex--; // Giảm vị trí hiện tại xuống 1
    } else {
        currentIndex = imageCount - 1; // Quay lại ảnh cuối cùng nếu đã ở ảnh đầu tiên
    }

    updateImageTransform();
}

function updateImageTransform() {
    var x = -250 * currentIndex; // Cập nhật x dựa trên currentIndex
    document.getElementById("next-2").style.transform = "translateX(" + x + "px)";
}

// Bắt đầu tự động chuyển ảnh sau một khoảng thời gian
function startAutoSlide() {
    interval = setInterval(nextImage, 7000);
}

// Dừng tự động chuyển ảnh
function stopAutoSlide() {
    clearInterval(interval);
}

// Gọi hàm startAutoSlide để bắt đầu tự động chuyển ảnh
startAutoSlide();
