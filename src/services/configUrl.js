import axios from "axios";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNSIsIkhldEhhblN0cmluZyI6IjEwLzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NjM1NTIwMDAwMCIsIm5iZiI6MTY1NzczMTYwMCwiZXhwIjoxNjg2NTAyODAwfQ.RfqXFAkX0NK9-sSoSak2_Ys49ENugB0G2-zkJO_cEjQ";

export const https = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn",
  headers: {
    tokenCybersoft: TOKEN_CYBERSOFT,
  },
});
// de chi hoi lai, no phai refreshtoken cho chi5 thi moi dung, e tat di co j chi hoi lai
