document.addEventListener("DOMContentLoaded", function() {
    // Get all the "certification" section headers
    const headers = document.querySelectorAll('.certification h2');

    // Add a click event listener to each header
    headers.forEach(header => {
        header.addEventListener('click', function() {
            // This finds the next sibling element (which should be the <ul> list) and toggles its display
            const list = this.nextElementSibling;

            if (list.style.display === 'block') {
                list.style.display = 'none';
            } else {
                list.style.display = 'block';
            }
        });
    });
});
