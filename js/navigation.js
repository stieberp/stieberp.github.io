document.addEventListener('DOMContentLoaded', function () {
        // Load the navigation.html file
        fetch('navigation.html')
            .then(response => response.text())
            .then(data => {
                // Insert the content into the element with the id "navigation"
                document.getElementById('navigation').innerHTML = data;
            });
    });