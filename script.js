document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    slides[currentSlide].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const fullSizeImg = document.createElement('img');
            fullSizeImg.src = slide.src;
            fullSizeImg.classList.add('full-size');
            document.body.appendChild(fullSizeImg);
            fullSizeImg.style.display = 'block';

            fullSizeImg.addEventListener('click', () => {
                fullSizeImg.remove();
            });
        });
    });
});

$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: true // Menampilkan tombol navigasi
    });

    // Event handler untuk mengubah gambar besar saat gambar kecil diklik
    $('.slider img').click(function() {
        var imgSrc = $(this).attr('src'); // Mendapatkan src gambar yang diklik
        $('#largeImage').attr('src', imgSrc); // Mengatur src gambar besar
        $('#largeImageContainer').fadeIn(); // Menampilkan gambar besar
    });

    // Menyembunyikan gambar besar saat diklik
    $('#largeImageContainer').click(function() {
        $(this).fadeOut(); // Menyembunyikan gambar besar
    });
});