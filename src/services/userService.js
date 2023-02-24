import { https } from "./configUrl";

export let postLogin = (data) => {
  return https.post("/api/auth/signin", data);
};
export let postRegister = (data) => {
  return https.post("/api/auth/signup", data);
};
export let postHire = (data) => {
  return https.post("/api/thue-cong-viec", data);
};
export let postComment = (data) => {
  return https.post("/api/binh-luan", data);
};
