export default {
  mounted(el: any, binding: any) {
    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    let callback = (entries: any) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'intersection'
}