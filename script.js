// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple typing effect
const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = '';
let i = 0;
function type() {
    if(i < text.length){
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();
