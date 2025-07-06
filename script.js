// Custom JavaScript for Simple Blog

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Simple search functionality
    const searchButton = document.querySelector('.btn-success');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert('Searching for: ' + searchTerm);
                // Here you would normally implement actual search functionality
            } else {
                alert('Please enter a search term');
            }
        });
        
        // Allow search on Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Simple click tracking for Read More buttons
    const readMoreButtons = document.querySelectorAll('.btn-read-more');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const blogPost = this.closest('.blog-post');
            const title = blogPost.querySelector('h3').textContent;
            console.log('Read More clicked for: ' + title);
            // Here you would normally navigate to the full post
            alert('Opening full post: ' + title);
        });
    });
    
    // Simple navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(function(l) {
                l.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Navigation clicked: ' + this.textContent);
        });
    });
    
    // Simple sidebar link interactions
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Sidebar link clicked: ' + this.textContent);
            // Here you would normally filter content or navigate
        });
    });
    
    // Console log to confirm script is loaded
    console.log('Simple Blog JavaScript loaded successfully!');
    
});