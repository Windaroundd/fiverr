
import { https } from './configUrl';
export const jobSevice = {
    getJobCategory : () =>{
    return https.get('api/cong-viec/lay-menu-loai-cong-viec')
    },
    getJobList : (id) => { 
        return https.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
     }
}