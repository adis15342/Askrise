    const infoSection = document.getElementById("infoSection");
    const countEl = document.getElementById("count");
    const reveals = document.querySelectorAll(".reveal");
    let animated = false;

    function animateCounter(start, end, duration) {
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        countEl.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          countEl.textContent = end;
        }
      }

      requestAnimationFrame(step);
    }

    function onScroll() {
      const rect = infoSection.getBoundingClientRect();
      const trigger = window.innerHeight * 0.85;

      if (rect.top < trigger) {
        reveals.forEach(el => el.classList.add("show"));

        if (!animated) {
          animated = true;
          animateCounter(1, 6, 1800);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);





    const storySection = document.getElementById("storySection");
    const headings = document.querySelectorAll(".story-heading");
    const captions = document.querySelectorAll(".story-caption");

    function updateStoryOnScroll() {
      const rect = storySection.getBoundingClientRect();
      const sectionHeight = storySection.offsetHeight;
      const viewportHeight = window.innerHeight;

      // how much sticky section has been scrolled
      const scrollProgress = Math.min(
        Math.max((window.scrollY - storySection.offsetTop) / (sectionHeight - viewportHeight), 0),
        1
      );

      const totalSlides = headings.length;
      let activeIndex = Math.floor(scrollProgress * totalSlides);

      if (activeIndex >= totalSlides) activeIndex = totalSlides - 1;

      headings.forEach((heading, index) => {
        heading.classList.toggle("active", index === activeIndex);
      });

      captions.forEach((caption, index) => {
        caption.classList.toggle("active", index === activeIndex);
      });
    }

    window.addEventListener("scroll", updateStoryOnScroll);
    window.addEventListener("load", updateStoryOnScroll);
    window.addEventListener("resize", updateStoryOnScroll);



const threeLineSection = document.getElementById("threeLineScroll");
const lines = threeLineSection.querySelectorAll(".line");

function updateThreeLineScroll() {
  const sectionTop = threeLineSection.offsetTop;
  const sectionHeight = threeLineSection.offsetHeight;
  const viewportHeight = window.innerHeight;

  const progress = Math.min(
    Math.max((window.scrollY - sectionTop) / (sectionHeight - viewportHeight), 0),
    1
  );

  lines.forEach(line => line.classList.remove("active"));

  if (progress >= 0.10) lines[0].classList.add("active");
  if (progress >= 0.38) lines[1].classList.add("active");
  if (progress >= 0.66) lines[2].classList.add("active");
}

window.addEventListener("scroll", updateThreeLineScroll);
window.addEventListener("load", updateThreeLineScroll);
window.addEventListener("resize", updateThreeLineScroll);