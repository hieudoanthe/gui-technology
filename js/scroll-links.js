   document.querySelectorAll('.scroll-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Lấy id mục tiêu từ href
            const target = document.getElementById(targetId);
            const offset = 100; // Thay 100 bằng chiều cao của nav-bar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Nếu bạn muốn có hiệu ứng cuộn mượt
            });
        });
    });