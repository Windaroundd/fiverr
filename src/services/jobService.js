
import { https } from './configUrl';
export const jobSevice = {
    getJobCategory : () =>{
    return https.get('api/cong-viec/lay-menu-loai-cong-viec')
    },
    getJobList : (id) => { 
        return https.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
     },
    getJobDetail: (id) =>{
        return https.get(`api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`)
    },
    getJobAccordingToName : (name) =>{
        return https.get(`api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`)
    }

}