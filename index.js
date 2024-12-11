// Website Content Variables
const websiteContent = {
    title: 'Ficus HVAC Services',
    navbar: {
        brand: {
            icon: 'bi-snow2',
            title: 'Ficus HVAC Services'
        },
        links: [
            { text: 'Home', href: '#home' },
            { text: 'About', href: '#about' },
            { text: 'Services', href: '#services' },
            { text: 'Gallery', href: '#gallery' },
            { text: 'Contact', href: '#contact' }
        ]
    },
    heroBanner: {
        slides: [
            { src: 'https://placehold.co/1200x600', alt: 'HVAC Installation' },
            { src: 'https://placehold.co/1200x600', alt: 'AC Maintenance' },
            { src: 'https://placehold.co/1200x600', alt: 'Commercial HVAC' },
            { src: 'https://placehold.co/1200x600', alt: 'Testing HVAC' }
        ]
    },
    about: {
        title: 'About Ficus HVAC',
        description: 'We provide top-quality heating, ventilation, and air conditioning solutions for residential and commercial clients. With years of experience and cutting-edge technology, we ensure your comfort all year round.',
        image: 'https://placehold.co/600x400'
    },
    services: {
        title: 'Our Services',
        items: [
            {
                icon: 'bi-snow2',
                title: 'AC Installation',
                description: 'Professional air conditioning system installation and setup.'
            },
            {
                icon: 'bi-thermometer-half',
                title: 'Heating Services',
                description: 'Comprehensive heating system repair and maintenance.'
            },
            {
                icon: 'bi-recycle',
                title: 'Maintenance',
                description: 'Regular HVAC system inspections and preventive maintenance.'
            },
        ]
    },
    gallery: {
        title: 'Our Projects',
        images: [
            { src: 'https://placehold.co/400x300', alt: 'Project 1' },
            { src: 'https://placehold.co/400x300', alt: 'Project 2' },
            { src: 'https://placehold.co/400x300', alt: 'Project 3' }
        ]
    },
    contact: {
        companyName: 'Ficus',
        address: {
            street: '123 Abdul Razak Street, Pallavaram',
            phone: '+91 9150 234 326',
            email: 'service@Ficus.com'
        },
        businessHours: {
            weekdays: 'Mon-Fri: 8:00 AM - 6:00 PM',
            saturday: 'Saturday: 9:00 AM - 2:00 PM',
            sunday: 'Sunday: Closed'
        }
    }
};

// Function to dynamically populate navigation
function populateNavbar() {
    const navbarBrand = document.querySelector('.navbar-brand');
    const navbarLinks = document.querySelector('.navbar-nav');

    navbarBrand.innerHTML = `<i class="bi ${websiteContent.navbar.brand.icon}"></i> ${websiteContent.navbar.brand.title}`;
    
    navbarLinks.innerHTML = websiteContent.navbar.links.map(link => 
        `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`
    ).join('');
}

// Function to populate hero banner
function populateHeroBanner() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = websiteContent.heroBanner.slides.map((slide, index) => 
        `<div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${slide.src}" class="d-block w-100" alt="${slide.alt}">
         </div>`
    ).join('');
}

// Function to populate about section
function populateAboutSection() {
    const aboutSection = document.querySelector('#about .row');
    aboutSection.innerHTML = `
        <div class="col-md-6">
            <h2 class="mb-4">${websiteContent.about.title}</h2>
            <p>${websiteContent.about.description}</p>
        </div>
        <div class="col-md-6">
            <img src="${websiteContent.about.image}" class="img-fluid rounded" alt="Our Team">
        </div>
    `;
}

// Function to populate services section
function populateServicesSection() {
    const servicesContainer = document.querySelector('#services .row');
    const servicesTitle = document.querySelector('#services h2');
    
    servicesTitle.textContent = websiteContent.services.title;
    servicesContainer.innerHTML = websiteContent.services.items.map(service => 
        `<div class="col-md-4 mb-4">
            <div class="card card-hover text-center p-3">
                <i class="bi ${service.icon} fs-1 text-primary mb-3"></i>
                <h4>${service.title}</h4>
                <p>${service.description}</p>
            </div>
        </div>`
    ).join('');
}

// Function to populate gallery section
function populateGallerySection() {
    const galleryContainer = document.querySelector('#gallery .row');
    const galleryTitle = document.querySelector('#gallery h2');
    
    galleryTitle.textContent = websiteContent.gallery.title;
    galleryContainer.innerHTML = websiteContent.gallery.images.map(image => 
        `<div class="col-md-4 mb-4">
            <img src="${image.src}" class="img-fluid rounded" alt="${image.alt}">
         </div>`
    ).join('');
}

// Function to populate footer/contact section
function populateContactSection() {
    const contactSection = document.querySelector('footer .container .row');
    contactSection.innerHTML = `
        <div class="col-md-6">
            <h3>Contact ${websiteContent.contact.companyName}</h3>
            <p>
                <i class="bi bi-geo-alt"></i> ${websiteContent.contact.address.street}<br>
                <i class="bi bi-telephone"></i> ${websiteContent.contact.address.phone}<br>
                <i class="bi bi-envelope"></i> ${websiteContent.contact.address.email}
            </p>
        </div>
        <div class="col-md-6">
            <h4>Business Hours</h4>
            <p>
                ${websiteContent.contact.businessHours.weekdays}<br>
                ${websiteContent.contact.businessHours.saturday}<br>
                ${websiteContent.contact.businessHours.sunday}
            </p>
        </div>
    `;
}

// Initialize page content
function initializePage() {
    populateNavbar();
    populateHeroBanner();
    populateAboutSection();
    populateServicesSection();
    populateGallerySection();
    populateContactSection();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);
