document.addEventListener("DOMContentLoaded", function() {
    const deptCards = document.querySelectorAll('#dept-card'); // Changed getElementById to querySelectorAll
    deptCards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href ='events.html';
        });
    });
});