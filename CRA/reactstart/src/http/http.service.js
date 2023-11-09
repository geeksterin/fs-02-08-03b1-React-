import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 *
 * https://api.github.com/users
 *
 */
export async function getAllUsers() {
  return await api.get("/users");
}

export async function getUser(userId) {
  return await api.get(`/users/${userId}`);
}

// export async function postUser(data)
// {
//     return await api.post("/users",data)
// }
