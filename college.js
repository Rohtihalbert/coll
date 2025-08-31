// Course Details Data
const courseDetails = {
  "B.A. Criminology & Police Admin": {
    importance: "Prepares students for law enforcement and crime analysis with focus on justice.",
    advantages: [
      "Direct job opportunities in police, law, and justice",
      "Builds analytical and investigative skills",
      "Public service impact"
    ],
    disadvantages: [
      "High pressure careers",
      "May require government exams",
      "Limited private sector roles"
    ]
  },
  "B.Com. Banking & Insurance": {
    importance: "Equips students with specialized finance knowledge suited for modern banking/insurance sectors.",
    advantages: [
      "High demand in finance industries",
      "Broad career options (banks, insurance companies)",
      "Professional certifications easy to pursue"
    ],
    disadvantages: [
      "Jobs can be repetitive",
      "Industry exposed to economic fluctuations",
      "Requires strong math/accounting skills"
    ]
  },
  "B.Com. Computer Application": {
    importance: "Blends business expertise with practical IT skills for commerce and tech careers.",
    advantages: [
      "Versatile in both IT and commerce fields",
      "Growth in business technology roles",
      "Opens pathway to software/application jobs"
    ],
    disadvantages: [
      "May need further specializations for advanced roles",
      "Fast-changing technology trends",
      "Competition is high"
    ]
  },
  "B.Sc. Home Science & Nutrition": {
    importance: "Promotes health, nutrition, and wellness through science and practical knowledge.",
    advantages: [
      "Opens options in hospitals, wellness centers, education",
      "Supports personal and community well-being",
      "Environment-friendly and social impact careers"
    ],
    disadvantages: [
      "Salaries can be moderate",
      "Niche jobs may require M.Sc. or certifications",
      "Limited mainstream recognition"
    ]
  },
  "B.Sc. Computer Science": {
    importance: "Foundation for IT, coding, AI, and future technology careers.",
    advantages: [
      "Huge job market—IT companies, startups, research",
      "Good salary prospects",
      "Enables advanced studies (M.Sc., MCA, PhD)"
    ],
    disadvantages: [
      "Intense competition",
      "Needs continuous learning",
      "Screen-time and sedentary habits"
    ]
  }
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const coursesSlider = document.querySelector('.courses-slider');
const prevCourse = document.querySelector('.prev-btn');
const nextCourse = document.querySelector('.next-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Mobile Navigation
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.innerHTML = navLinks.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile nav when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Back to Top Button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
  // Parallax effect for header
  const scrollPosition = window.pageYOffset;
  const header = document.querySelector('header');
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Course Slider
prevCourse.addEventListener('click', () => {
  coursesSlider.scrollBy({ left: -320, behavior: 'smooth' });
});
nextCourse.addEventListener('click', () => {
  coursesSlider.scrollBy({ left: 320, behavior: 'smooth' });
});

// Add subjects for each course
const courseSubjects = {
  "B.A. Criminology & Police Admin": [
    "Principles of Criminology",
    "Police Administration",
    "Indian Penal Code",
    "Forensic Science",
    "Human Rights",
    "Victimology"
  ],
  "B.Com. Banking & Insurance": [
    "Principles of Banking",
    "Insurance Law & Practice",
    "Financial Accounting",
    "Business Economics",
    "Risk Management",
    "Banking Technology"
  ],
  "B.Com. Computer Application": [
    "Business Accounting",
    "Programming in C",
    "Database Management",
    "E-Commerce",
    "Web Technology",
    "Software Project Management"
  ],
  "B.Sc. Home Science & Nutrition": [
    "Food Science",
    "Human Nutrition",
    "Textiles & Clothing",
    "Family Resource Management",
    "Child Development",
    "Community Nutrition"
  ],
  "B.Sc. Computer Science": [
    "Programming in Python",
    "Data Structures",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "Software Engineering"
  ]
};

// Update showCourseDetail to include subjects
function showCourseDetail(title) {
  document.getElementById('course-title').textContent = title;
  document.getElementById('course-importance').textContent = courseDetails[title].importance;
  let adv = document.getElementById('course-advantages');
  let disadv = document.getElementById('course-disadvantages');
  let subs = document.getElementById('course-subjects');
  adv.innerHTML = '';
  disadv.innerHTML = '';
  subs.innerHTML = '';
  courseDetails[title].advantages.forEach(a => {
    let li = document.createElement('li'); li.textContent = a; adv.appendChild(li);
  });
  courseDetails[title].disadvantages.forEach(d => {
    let li = document.createElement('li'); li.textContent = d; disadv.appendChild(li);
  });
  if (courseSubjects[title]) {
    courseSubjects[title].forEach(s => {
      let li = document.createElement('li'); li.textContent = s; subs.appendChild(li);
    });
  }
  document.getElementById('course-details-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('course-details-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Gallery Lightbox (if you add a lightbox modal in HTML)
// Uncomment and add the modal structure if you want this feature
/*
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxImg = document.getElementById('lightbox-img');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
*/

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Make course cards clickable
  document.querySelectorAll('.course-card').forEach(function(card) {
    card.style.cursor = "pointer";
    card.addEventListener('click', function() {
      let title = card.querySelector('h3').textContent.trim();
      showCourseDetail(title);
    });
  });

  // Close modal when clicking outside content
  const modal = document.getElementById('course-details-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if(e.target === this) closeModal();
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Learn More button functionality
  document.querySelectorAll('.learn-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent parent card click
      const title = btn.getAttribute('data-title');
      showCourseDetail(title);
    });
  });
})
