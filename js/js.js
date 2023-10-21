// js main
var main_img=[
    "./img/anh1.png",
    "./img/anh2.png",
    "./img/anh3.png"
];
var index=0;
function prev(){
    index --;
    if(index <-0) index=main_img.length-1;
    document.getElementById("main__img").src=main_img[index];
}
function next(){
    index ++;
    if( index==main_img.length) index=0;
    document.getElementById("main__img").src=main_img[index];
}
setInterval("next()",7000);

// news
var currentPair = 'pair1'; // Biến theo dõi phần tử hiển thị màu nền

function showImages(pair, bgColor) {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');
    var image5 = document.getElementById('image5');
    var image6 = document.getElementById('image6');

    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var text4 = document.getElementById('text4');
    var text5 = document.getElementById('text5');
    var text6 = document.getElementById('text6');

    var pair1 = document.getElementById('pair1');
    var pair2 = document.getElementById('pair2');
    var pair3 = document.getElementById('pair3');

    // Ẩn phần tử hiện tại và thay đổi màu nền của phần tử mới
    if (pair === 'pair1') {
        image1.style.display = 'block';
        image2.style.display = 'block';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';
        image6.style.display = 'none';
        text1.style.display = 'block';
        text2.style.display = 'block';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        pair1.style.backgroundColor = bgColor;
        pair2.style.backgroundColor = '';
        pair3.style.backgroundColor = '';
        currentPair = 'pair1';
    } else if (pair === 'pair2') {
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'block';
        image4.style.display = 'block';
        image5.style.display = 'none';
        image6.style.display = 'none';
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'block';
        text4.style.display = 'block';
        text5.style.display = 'none';
        text6.style.display = 'none';
        pair1.style.backgroundColor = '';
        pair2.style.backgroundColor = bgColor;
        pair3.style.backgroundColor = '';
        currentPair = 'pair2';
    } else if (pair === 'pair3') {
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'block';
        image6.style.display = 'block';
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'block';
        text6.style.display = 'block';
        pair1.style.backgroundColor = '';
        pair2.style.backgroundColor = '';
        pair3.style.backgroundColor = bgColor;
        currentPair = 'pair3';
    }
}

