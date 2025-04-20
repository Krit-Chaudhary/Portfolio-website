// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.skill, .project-card, .recommendation');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Enhanced recommendation functionality
function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        
        // Create new recommendation element
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
        
        // Add to recommendations container
        document.getElementById("all_recommendations").appendChild(element);
        
        // Animate the new recommendation
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
        
        // Reset the textarea
        recommendation.value = "";
    }
}

// Add scroll to top button visibility
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.iconbutton');
    if (window.scrollY > 300) {
        scrollButton.style.opacity = '0.8';
        scrollButton.style.visibility = 'visible';
    } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.visibility = 'hidden';
    }
});

// Initialize elements with initial styles
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill, .project-card, .recommendation');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
    });
});
  