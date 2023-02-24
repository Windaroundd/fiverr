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
  getJobAccordingToName: (name) => {
    return https.get(`api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`);
  },

  getDetailGig: (id) => {
    return https.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  getGigBySellerId: (id) => {
    return https.get(`/api/thue-cong-viec/lay-danh-sach-da-thue/${id}`);
  },
  // getDetailSeller,
  getDetailSeller: (id) => {
    return https.get(`/api/users/${id}`);
  },
  getClientComment: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  createComment: (data) =>
    https.post(`/api/binh-luan`, {
      maCongViec: Number(data.maCongViec),
      maNguoiBinhLuan: data.maNguoiBinhLuan,
      noiDung: data.noiDung,
    }),
  getGigBySeller: () => {
    return https.get(
      "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec/lay-danh-sach-da-thue"
    );
  },
};
