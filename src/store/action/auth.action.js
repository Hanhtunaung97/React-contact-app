import { Login, Register } from "../../service/auth.service";

export const loginAction = async (dispatch, loginData) => {
  try {
    dispatch({ type: "process" });
    const res = await Login(loginData);
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (error) {
    dispatch({ type: "error", payload: res.msg });
  }
};

// export const registerAction = async (dispatch, resData) => {
//   try {
//     dispatch({ type: "process" });
//     const res = await Register(resData);
//     if (res.data) {
//       dispatch({ type: "register", payload: res.data });
//     } else {
//       dispatch({ type: "error", payload: res.msg });
//     }
//   } catch (error) {
//     dispatch({ type: "error", payload: res.msg });
//   }
// };

export const logoutAction = (dispatch) => {
  dispatch({ type: "logout" });
};
