const websiteContent = {
    title: 'Ficus HVAC Services',
    navbar: {
        brand: {
            src: 'Images/logo.png',
            alt: 'Logo',
            title: 'Ficus HVAC Engg Pvt Ltd'
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
            { src: 'Images/c1.jpg', alt: 'HVAC Installation' },
            { src: 'Images/c2.jpg', alt: 'AC Maintenance' },
            { src: 'Images/c3.jpg', alt: 'Commercial HVAC' },
        ]
    },
    whySection: {
        title: 'Why Choose Ficus HVAC?',
        items: [
            {
                cls: 'row align-items-center mb-4',
                src: 'Images/w1.jpg',
                alt: 'Expert Technicians',
                heading: 'HVAC Solution Providers',
                description: 'Our professional engineers bring years of knowledge and experience to every project, ensuring installation as per engineering standards to avoid major service failures for your HVAC systems.'
            },
            {
                cls: 'row align-items-center mb-4 flex-md-row-reverse',
                src: 'Images/w2.jpg',
                alt: 'Energy Efficiency',
                heading: 'Energy Efficiency',
                description: 'We focus on cutting-edge, energy-efficient, value engineering HVAC solutions that help you save on energy costs while reducing your carbon footprint.'
            },
            {
                cls: 'row align-items-center',
                src: 'Images/w3.jpg',
                alt: 'Customer Satisfaction',
                heading: 'Customer Satisfaction',
                description: 'Your comfort is our priority. We provide customized solutions, prompt support, and reliable service to ensure your complete satisfaction.'
            }
        ]
    },
    visionAndMission: [
        {
            title: 'Vision',
            content: 'To be a trusted leader in the HVAC industry, setting benchmarks for innovation, energy efficiency, and customer satisfaction, while fostering sustainable and comfortable living and working environments worldwide.',
            src: 'Images/v1.jpg', 
            alt: 'Placeholder Image'
        },
        {
            title: 'Mission',
            content: 'Our mission is to deliver exceptional HVAC solutions that enhance comfort, health, and energy efficiency for residential and commercial spaces. We are committed to using cutting-edge technology, providing unparalleled customer service, and promoting eco-friendly practices to meet the evolving needs of our clients.',
            src: 'Images/m1.jpg', 
            alt: 'Placeholder Image'     
        },
    ],
    about: {
        title: 'About Ficus HVAC',
        description1: 'Ficus HVAC specializes in delivering premium heating, ventilation, and air conditioning (HVAC) solutions tailored to meet the unique needs of both residential and commercial clients. Backed by years of industry experience and powered by advanced technology, we pride ourselves on providing efficient, reliable, and eco-friendly systems. From installation and maintenance to repair services, we ensure seamless performance and maximum comfort throughout the year.',
        description2: 'Our commitment to excellence extends to personalized solutions, energy efficiency, and superior customer service, making us a trusted partner for creating comfortable and healthy indoor environments. With Ficus HVAC, you can count on expertise that keeps you comfortable in every season.',
        src: 'Images/Abt.avif',
        alt: 'Our Team'
    },
    services: {
        title: 'Our Services',
        items: [
            {
                icon: 'bi bi-snow2 fs-1 text-primary mb-3',
                title: 'AC Installation',
                description: 'Professional air conditioning system installation and setup.'
            },
            {
                icon: 'bi bi-thermometer-half fs-1 text-primary mb-3',
                title: 'Heating Services',
                description: 'Comprehensive heating system repair and maintenance.'
            },
            {
                icon: 'bi bi-recycle fs-1 text-primary mb-3',
                title: 'Maintenance',
                description: 'Regular HVAC system inspections and preventive maintenance.'
            },
        ]
    },
    gallery: {
        title: 'Gallery',
        rows: [
            {
                row: [
                    { src: 'Images/g1.avif', alt: 'Project 1' },
                    { src: 'Images/g2.avif', alt: 'Project 2' },
                    { src: 'Images/g3.jpg', alt: 'Project 3' }
                ]
            },
            {
                row: [
                    { src: 'Images/w1.jpg', alt: 'Project 4' },
                    { src: 'Images/w2.jpg', alt: 'Project 5' },
                    { src: 'Images/w3.jpg', alt: 'Project 6' }
                ]
            }
        ]
    },
    contact: {
        title: 'Contact Us',
        address: {
            street: '#4/81a, 1st Street, Balaji Nagar, Pozhichalur, Chennai - 600 074',
            phone: '+91 97899 00325',
            enquiryEmail: 'sales@ficushvac.com',
            communicationEmail: 'info@ficushvac.com'
        },
        bH: {
            title: 'Bussiness Hours',
            weekdays: 'Mon-Fri: 8:00 AM - 6:00 PM',
            saturday: 'Saturday: 9:00 AM - 2:00 PM',
            sunday: 'Sunday: Closed'
        }
    }
};

function populateNavbar() {
    const brand = document.querySelector('.navbar-brand');
    const navLinks = document.querySelector('.navbar-nav');

    brand.innerHTML = `
    <img src="${websiteContent.navbar.brand.src}" alt="${websiteContent.navbar.brand.alt}" width="50">
    <span style="color: var(--primary-color);">${websiteContent.navbar.brand.title}</span>`

    navLinks.innerHTML = websiteContent.navbar.links.map(link => 
        `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`
    ).join('');
}

function populateHeroBanner() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = websiteContent.heroBanner.slides.map((slide, index) => 
        `<div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${slide.src}" class="d-block w-100" alt="${slide.alt}">
         </div>`
    ).join('');
}

function populateWhySection() {
    const head = document.getElementById('whyTitle');
    const contents = document.querySelector('.contents');

    head.innerHTML = websiteContent.whySection.title;
    contents.innerHTML = websiteContent.whySection.items.map(item => 
        `<div class="${item.cls}">
        <div class="col-md-6">
          <img src="${item.src}" alt="${item.alt}" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
          <h4 class="mb-3">${item.heading}</h4>
          <p style="color: whitesmoke;">${item.description}</div>
        </div>`
    ).join('');
}

function populateVM() {
    const visionMission = document.getElementById('visionMission');
    visionMission.innerHTML = websiteContent.visionAndMission.map(x => 
        `<div class="col-md-6 text-center">
            <h2>${x.title}</h3>
            <img src="${x.src}" alt="${x.alt}" class="img-fluid mb-3">
            <p>${x.content}</p>
        </div>`
    ).join('');
}

function populateAbout() {
    const about = document.querySelector('#about .row');
    about.innerHTML = `
        <div class="col-md-6">
            <h2 class="mb-4">${websiteContent.about.title}</h2>
            <p>${websiteContent.about.description1}</p>
            <p>${websiteContent.about.description2}</p>
        </div>
        <div class="col-md-6">
            <img src="${websiteContent.about.src}" class="img-fluid rounded" alt="${websiteContent.about.alt}">
        </div>`;
}

function populateServices() {
    const title = document.querySelector('#services .text-center');
    const contents = document.querySelector('#services .container .row');

    title.innerHTML = websiteContent.services.title;
    contents.innerHTML = websiteContent.services.items.map(item => 
        `<div class="col-md-4 mb-4">
            <div class="card card-hover text-center p-3">
                <i class="${item.icon}"></i>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>`
    ).join('');
}

function populateGallery() {
    const title = document.querySelector('#gallery .text-center');
    const rows = document.querySelector('#gallery .rows');
    
    title.innerHTML = websiteContent.gallery.title;
    rows.innerHTML = websiteContent.gallery.rows.map(row => 
        `<div class="row">` + row.row.map(img => 
            `<div class="col-md-4 mb-4">
                <img src="${img.src}" class="img-fluid rounded" alt="${img.alt}">
            </div>`
        ).join('') + `</div>`
    ).join('');
}

function populateFooter() {
    const cols = document.querySelectorAll('#contact .container .row .col-md-6');

    cols[0].innerHTML = `
        <h3>${websiteContent.contact.title}</h3>
        <p>
            <i class="bi bi-geo-alt"></i> ${websiteContent.contact.address.street}<br>
            <i class="bi bi-telephone"></i> ${websiteContent.contact.address.phone}<br>
            <i class="bi bi-envelope"></i> For Enquiries : ${websiteContent.contact.address.enquiryEmail}<br>
            <i class="bi bi-envelope-fill"></i> For Communication : ${websiteContent.contact.address.communicationEmail}<br>
        </p>
    `;

    cols[1].innerHTML = `
    <h3>${websiteContent.contact.bH.title}</h3>
    <p>
        ${websiteContent.contact.bH.weekdays}<br>
        ${websiteContent.contact.bH.saturday}<br>
        ${websiteContent.contact.bH.sunday}
    </p>`;
}

function initializePage() {
    populateNavbar();
    populateHeroBanner();
    populateWhySection();
    populateVM();
    populateAbout();
    populateServices();
    populateGallery();
    populateFooter();
}

document.addEventListener('DOMContentLoaded', initializePage);

let backToTopBtn = () => {
    const backToTop = document.getElementById('backToTop');
    let pos = document.documentElement.scrollTop;
    
    if (pos > 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

window.onscroll = backToTopBtn;
window.onload = backToTopBtn;