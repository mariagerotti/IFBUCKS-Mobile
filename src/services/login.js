import api from '../plugins/api';

class LoginApi {
 async login(username, password) {
   try {
     const { data } = await api.post('/token/', {
       username,
       password,
     });
     return Promise.resolve(data);
   } catch (error) {
     return Promise.error(error);
   }
 }
}

export default new LoginApi();

// import axios from "axios";

// export async function login(email, password) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log("Login was called with", email, password);
//       let request = await axios.post(
//         "https://ifbucks.1.ie-1.fl0.io/api/token/",
//         {
//           email: email,
//           password: password,
//         }
//       );
//       resolve(request.data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
