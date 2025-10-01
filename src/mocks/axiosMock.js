// src/mocks/axiosMock.js
const axiosMock = {
  get: (url) => {
    console.log(`[MOCK GET] ${url}`);
    if (url === "/api/billingCycles/summary") {
      return Promise.resolve({ data: { credit: 1000, debt: 400 } });
    }
    return Promise.resolve({ data: [] });
  },
  post: (url, body) => {
    console.log(`[MOCK POST] ${url}`, body);
    return Promise.resolve({ data: body });
  },
  put: (url, body) => {
    console.log(`[MOCK PUT] ${url}`, body);
    return Promise.resolve({ data: body });
  },
  delete: (url) => {
    console.log(`[MOCK DELETE] ${url}`);
    return Promise.resolve({ data: {} });
  },
};

export default axiosMock;
