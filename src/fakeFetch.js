const fakeFetch = (() => {
  return {
    get: async (count = 100, delay = 0) => {
      const response = new Array(count).fill(0);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response);
        }, delay);
      });
    },
  };
})();

export default fakeFetch;
