const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch('https://formspree.io/f/mdkdlzkd', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Show popup
      document.getElementById('popup').classList.remove('hidden');

      // Redirect after 2.5 seconds
      setTimeout(() => {
        window.location.href = 'portfolio.html'; // Change if your filename is different
      }, 2500);
    } else {
      alert('Something went wrong. Please try again.');
    }
  }).catch(error => {
    alert('Error sending message. Check your connection.');
  });
});

