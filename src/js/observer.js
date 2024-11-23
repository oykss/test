export const createObserver = renderFunction => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderFunction();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -300px 0px',
      threshold: 0,
    }
  );
};
