
import { toast } from 'react-toastify';
import '../../assets/css/toast.css';

export default function Toast(type, msg) {
   if (type === 'success') {
      toast.success(msg, {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      })
   } else {
      toast.error(msg, {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      })
   }

};