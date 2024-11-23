export const createObserver = renderFunction => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderFunction();
          lo;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px 800px 0px',
      threshold: 0,
    }
  );
};
