import axios from "axios";
// TODO: Refactor to use OAuth2

// Action to get user when the token is saved in local storage

// export const getUser = () => (dispatch, getState) => {
//   dispatch({ type: "FETCHING_USER" });

//   const token = getState().user.token;

//   const headers = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     headers["Authorization"] = `Token ${token}`;
//   }

//   axios
//     // Dummy URL
//     .get("http://djangodashboard.herokuapp.com//rest-auth/login/", { headers })
//     .then(res => {
//       if (res.status < 500) {
//         return res.json().then(data => {
//           return { status: res.status, data };
//         });
//       } else {
//         console.log("Server Error!");
//         throw res;
//       }
//     })
//     .then(res => {
//       if (res.status === 200) {
//         dispatch({ type: "FETCHED_USER", user: res.data });
//         return res.data;
//       } else if (res.status >= 400 && res.status < 500) {
//         dispatch({ type: "ERROR", data: res.data });
//         throw res.data;
//       }
//     });
// };

export const signin = (username, password) => dispatch => {
  const body = JSON.stringify({
    grant_type: "password",
    username: `${username}`,
    password: `${password}`,
    client_id: `XDWUFfI6tuAInCoXn7UPv1eZccrDJ8JWLgaJCwxg`,
    client_secret: `2KuJRNA4Gi24LgtzHydE9yT5ffu6dKIzusOkLtvzMMQjyXhDFeAeNZuRY4pnpu6IbLL4eIfnr0BUsrxbtiHMvV0noDXgR09mpWHJS8bEKjPpC4rz79V7xfIjj7Qt0NrG`,
  });
  const hostUrl = 'https://employeeshift.herokuapp.com/o/token/';

  axios({
    method: "post",
    url: hostUrl,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
    },
    data: body,
  })
    .then(res => {
      if (res.status < 500) {
        return { status: res.status, data: res.data };
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: "SIGNIN_SUCCESSFUL", data: res.data });
        return res.data;
      } else if (res.status === 403 || res.status === 401) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      } else {
        dispatch({ type: "SIGNIN_FAILED", data: res.data });
        throw res.data;
      }
    });
};
