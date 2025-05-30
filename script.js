document.addEventListener('DOMContentLoaded', function() {
    // 图片轮播功能
    const images = document.querySelectorAll('.preview-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let intervalId;
    const intervalTime = 5000;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextImage() {
        let newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    }
    
    function prevImage() {
        let newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    }
    
    function startAutoSlide() {
        intervalId = setInterval(nextImage, intervalTime);
    }
    
    function stopAutoSlide() {
        clearInterval(intervalId);
    }
    
    // 按钮事件
    nextBtn.addEventListener('click', function() {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', function() {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    });
    
    // 鼠标悬停暂停自动轮播
    const slider = document.querySelector('.preview-section');
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // 开始自动轮播
    startAutoSlide();

    // 深色/浅色模式检测
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    function updateTheme() {
        document.body.classList.toggle('dark-mode', prefersDark.matches);
    }
    prefersDark.addListener(updateTheme);
    updateTheme();
});