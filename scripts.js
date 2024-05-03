document.addEventListener("DOMContentLoaded", function() {
    // Get all the "certification" section headers
    const headers = document.querySelectorAll('.certification h2');

    // Add a click event listener to each header
    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the 'active' class on the section
            const section = header.parentElement;
            section.classList.toggle('active');

            // Toggle display of the list under the header
            const list = section.querySelector('ul');
            if (list.style.display === 'block') {
                list.style.display = 'none';
            } else {
                list.style.display = 'block';
            }
        });
    });
});
