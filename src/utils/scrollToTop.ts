export const scrollToTop = () => {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollInterval);
    }
  };

  requestAnimationFrame(scrollInterval);
};
