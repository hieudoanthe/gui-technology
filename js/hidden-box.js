window.addEventListener('scroll', () => {
    const popularFlex = document.querySelector('.popular--flex');
    const popularFlexPosition = popularFlex.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.07;

    if (popularFlexPosition < screenPosition) {
        popularFlex.style.opacity = '1';
        popularFlex.style.transform = 'translateY(0)';
    } else {
        popularFlex.style.opacity = '0';
        popularFlex.style.transform = 'translateY(0)';
    }
});

 window.addEventListener('scroll', function () {
    const recentPosts = document.querySelector('.recent_posts');
    const recntPostPosition = recentPosts.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight/1.07;
        if (recntPostPosition < scrollPosition) {
        recentPosts.style.opacity = '1';
        recentPosts.style.transform = 'translateY(0)';
    } else {
        recentPosts.style.opacity = '0';
        recentPosts.style.transform = 'translateY(0)';
    }
 });


function handleScroll(className) {
    var elements = document.querySelectorAll(className);
    
    elements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var rollPosition = window.innerHeight;
        element.style.opacity = elementPosition < rollPosition ? '1' : '0';
        element.style.transform = elementPosition < rollPosition ? 'translateY(0)' : 'translateY(0)';
    });
}

window.addEventListener('scroll', function () {
    handleScroll('.range-1');
    handleScroll('.range-3');
    handleScroll('.range-5');
    handleScroll('.entity_wrapper');
});
