import AuthHelper from "utils/helpers/authHelper";

const server = process.env.REACT_APP_BASE_URL;
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';

class Http {
  static async get(url, params, headers) {
    return await Http.fetchWrapper(url, params, null, headers, METHOD_GET);
  }

  static async post(url, data, params, headers) {
    return await Http.fetchWrapper(url, params, data, headers, METHOD_POST);
  }

  static async fetchWrapper(url, params, data, headers, method) {
    const token = AuthHelper.getAccessToken();

    const options = {
      method,
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token || '',
        ...headers,
      },
    };

    if (method === METHOD_POST && data) {
      options.body = JSON.stringify(data);
    }

    return fetch(server + url, options)
      .then(response => {
        if (response.status !== 200) {
          return response.json().then(res => {
            return {
              error: {
                ...res,
                status: response.status
              }
            };
          });
        }
        return response.json();
      })
      .catch((error) => {
        return new Promise(resolve => resolve({error}));
      });

  }
}

export default Http;
