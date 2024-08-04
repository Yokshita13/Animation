onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };



  document.addEventListener('DOMContentLoaded', function () {
    // Assuming you're using the same JavaScript file, otherwise integrate the following:
    const message = document.querySelector('.happy-birthday');
    const body = document.querySelector('body');

    // Add any additional animations or effects here if needed

    // Ensure that the main content shows up after the animation
    setTimeout(() => {
        body.classList.remove('not-loaded');
        // You might want to add other functionality to handle the end of animation
    }, 5000); // Adjust this duration to match your animation timing
});
