import { https } from "./configUrl";
export const jobSevice = {
  getJobCategory: () => {
    return https.get("api/cong-viec/lay-menu-loai-cong-viec");
  },
  getJobList: (id) => {
    return https.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },
  getJobDetail: (id) => {
    return https.get(`api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },
  getDetailGig: (id) => {
    return https.get(`/api/congviec/lay-cong-viec-chi-tiet/${id}`);
  },
  getGigBySellerId: (id) => {
    return https.get(`/api/thue-cong-viec/lay-danh-sach-da-thue/${id}`);
  },
  getDetailSeller: (id) => {
    return https.get(`/api/users/${id}`);
  },
};
