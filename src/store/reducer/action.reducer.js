const initialState = {
  loading: false,
  data: null,
  error: null,
  auth: false,
};
export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, data: null, error: null, auth: false });
    }
    case "error": {
      return (store = {
        loading: false,
        data: null,
        error: action.payload,
        auth: false,
      });
    }
    case "login": {
      return (store = {
        loading: false,
        data: action.payload,
        error: null,
        auth: true,
      });
    }
    case "register": {
      return (store = {
        loading: false,
        data: action.payload,
        error: null,
        auth: true,
      });
    }
    case "logout": {
      return (store = { loading: false, data: null, error: null, auth: false });
    }
    default:
      return store;
  }
};
