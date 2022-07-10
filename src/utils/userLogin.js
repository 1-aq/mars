import http from "@/api/http";

// export const userLogin = () => {
//   return http.post("/users/login");
// };

export const userLogin = (data) => {
  return http({ url: "/users/login", method: "post", data });
};

