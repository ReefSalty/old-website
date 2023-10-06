// Simulated Blog System with Image Support
const blogPosts = [
    {
        title: "My First Blog Post",
        content: "This is the content of my first blog post. Stay tuned for more updates!",
        date: "October 7, 2023",
        image: "path_to_blog_image1.jpg" // Replace with your image path
    },
    {
        title: "Another Update from ReefSalty",
        content: "Here's another update from my end. I've been working on some exciting projects lately!",
        date: "October 10, 2023",
        image: "path_to_blog_image2.jpg" // Replace with your image path
    }
];

// Simulated Portfolio System with Image and GitHub links
const portfolioItems = [
    {
        title: "Suvat Solver",
        content: "Suvat solver made with HTML, CSS and JS: results can even be exported to an img.",
        date: "October 2023",
        link: "https://github.com/reefsalty/suvat-solver",
        image: "img/suvat-solver.png" // Replace with your image path
    },
    {
        title: "Project B",
        content: "Description of Project B. This project was focused on ABC aspects and was completed in collaboration with Team D.",
        date: "October 2023",
        link: "https://github.com/reefsalty/projectB-repo",
        image: "path_to_portfolio_image2.jpg" // Replace with your image path
    }
];

// Rest of the script remains the same...


document.addEventListener('DOMContentLoaded', function() {
    // Blog System
    const blogContainer = document.getElementById('blogPosts');
    if (blogContainer) {
        blogPosts.forEach((post, index) => {
            const shortContent = post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content;
            const postElement = `
                <div class="card mb-4 clickable-post" data-post-index="${index}">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${shortContent}</p>
                        <button class="btn btn-info read-more">Read More</button>
                    </div>
                </div>
            `;
            blogContainer.innerHTML += postElement;
        });

        // Add click event to each post
        document.querySelectorAll('.clickable-post').forEach(postElement => {
            postElement.addEventListener('click', function() {
                const postIndex = this.getAttribute('data-post-index');
                const post = blogPosts[postIndex];
                document.getElementById('blogPostTitle').innerText = post.title;
                document.getElementById('blogPostContent').innerText = post.content;
                $('#blogPostModal').modal('show');
            });
        });
    }

    // Portfolio System with links
    const portfolioContainer = document.getElementById('portfolioItems');
    if (portfolioContainer) {
        portfolioItems.forEach((item, index) => {
            const shortContent = item.content.length > 100 ? item.content.substring(0, 100) + '...' : item.content;
            const itemElement = `
                <div class="card mb-4 clickable-item" data-item-index="${index}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${shortContent}</p>
                        <button class="btn btn-info read-more">Read More</button>
                    </div>
                </div>
            `;
            portfolioContainer.innerHTML += itemElement;
        });

        // Add click event to each portfolio item
        document.querySelectorAll('.clickable-item').forEach(itemElement => {
            itemElement.addEventListener('click', function() {
                const itemIndex = this.getAttribute('data-item-index');
                const item = portfolioItems[itemIndex];
                document.getElementById('portfolioItemTitle').innerText = item.title;
                document.getElementById('portfolioItemContent').innerHTML = `${item.content} <br><br> <a href="${item.link}" target="_blank" class="btn btn-primary">Visit on GitHub</a>`;
                $('#portfolioItemModal').modal('show');
            });
        });
    }

    // Contact Form (Placeholder functionality)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// ... Rest of the script ...

// Add click event to each post
document.querySelectorAll('.clickable-post').forEach(postElement => {
    postElement.addEventListener('click', function() {
        const postIndex = this.getAttribute('data-post-index');
        const post = blogPosts[postIndex];
        document.getElementById('blogPostTitle').innerText = post.title;
        document.getElementById('blogPostContent').innerText = post.content;
        
        const blogImageElement = document.getElementById('blogPostImage');
        if (post.image) {
            blogImageElement.src = post.image;
            blogImageElement.style.display = 'block';
        } else {
            blogImageElement.style.display = 'none';
        }

        $('#blogPostModal').modal('show');
    });
});

// Add click event to each portfolio item
document.querySelectorAll('.clickable-item').forEach(itemElement => {
    itemElement.addEventListener('click', function() {
        const itemIndex = this.getAttribute('data-item-index');
        const item = portfolioItems[itemIndex];
        document.getElementById('portfolioItemTitle').innerText = item.title;
        document.getElementById('portfolioItemContent').innerHTML = `${item.content} <br><br> <a href="${item.link}" target="_blank" class="btn btn-primary">Visit on GitHub</a>`;
        
        const portfolioImageElement = document.getElementById('portfolioItemImage');
        if (item.image) {
            portfolioImageElement.src = item.image;
            portfolioImageElement.style.display = 'block';
        } else {
            portfolioImageElement.style.display = 'none';
        }

        $('#portfolioItemModal').modal('show');
    });
});

// ... Rest of the script ...

// ... Rest of the script ...

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// ... Rest of the script ...

