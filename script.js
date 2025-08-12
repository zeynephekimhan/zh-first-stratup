document.addEventListener('DOMContentLoaded', function() {
    
    // Mobil Menü İşlevselliği
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    // FAQ item toggle fonksiyonu
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});
    
    // Yumuşak Kaydırma ve Menü Kapatma
    // Not: html { scroll-behavior: smooth; } CSS'te ayarlandığı için
    // JavaScript ile ek bir kaydırma fonksiyonuna gerek yoktur.
    // Bu bölüm sadece mobilde menüyü kapatmak için kullanılır.
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Mobilde bir linke tıklandığında menüyü kapat
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});