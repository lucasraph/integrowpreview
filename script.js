// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form submission handling
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    console.log("[v0] Form submitted with data:", data)

    // Show success message
    alert("Obrigado pelo seu interesse! Entraremos em contato em breve.")

    // Reset form
    contactForm.reset()
  })
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Navbar scroll effect
let lastScroll = 0
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    nav.style.padding = "0.5rem 0"
  } else {
    nav.style.padding = "1rem 0"
  }

  lastScroll = currentScroll
})
