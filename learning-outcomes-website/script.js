function redirectTo(page) {
    window.location.href = page;
}

// Popups
// LO1
document.addEventListener('DOMContentLoaded', function () {
    // Get the explanation link
    var explanationLink = document.getElementById('explanation-link');

    // Add click event listener to the explanation link
    explanationLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Create and style the popup
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = '<p>You create engaging concepts and translate them into interactive validated media products by applying user-centered design principles, visual design techniques and by exploring emerging technologies.</p>';

        // Add close button to the popup
        var closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(popup);
        });
        popup.appendChild(closeButton);

        // Append the popup to the body
        document.body.appendChild(popup);
    });
});

// LO2
document.addEventListener('DOMContentLoaded', function () {
    // Get the explanation link
    var explanationLink = document.getElementById('explanation-link2');

    // Add click event listener to the explanation link
    explanationLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Create and style the popup
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = '<p>You explain and document your process, comment your code using version control in a personal and team context and communicate recommendations.</p>';

        // Add close button to the popup
        var closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(popup);
        });
        popup.appendChild(closeButton);

        // Append the popup to the body
        document.body.appendChild(popup);
    });
});

// LO2
document.addEventListener('DOMContentLoaded', function () {
    // Get the explanation link
    var explanationLink = document.getElementById('explanation-link3');

    // Add click event listener to the explanation link
    explanationLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Create and style the popup
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = '<p>You present the successive iterations of your creative process, and the connections between them.</p>';

        // Add close button to the popup
        var closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(popup);
        });
        popup.appendChild(closeButton);

        // Append the popup to the body
        document.body.appendChild(popup);
    });
});


