const BASE_URL_API = 'https://serene-beach-31118.herokuapp.com/api/'

const request = async (url, method = "GET", payload) => {
  const BASE_URL = BASE_URL_API;
  const urlAPI = BASE_URL + url;
  const body = payload ? JSON.stringify({ ...payload }) : undefined;
  let headers = { "Content-Type": "application/json;charset=UTF-8" };
  const requestOptions = {
    method,
    headers,
    body,
  };

  const response = await callAPI(
    urlAPI,
    requestOptions,
  );
  return response;
};

const callAPI = async (urlAPI, requestOptions) => {
  const response = await fetch(urlAPI, requestOptions);
  let data = await response.json();
  return data;
};

export default request;