import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

function useAuthCheck() {
   const dispatch = useDispatch();

   const cookieToken = (document.cookie.replace(/(?:(?:^|.*;\s*)sessionToken\s*\s*([^;]*).*$)|^.*$/, "$1"));
   if (cookieToken) {
      dispatch(userLoggedIn())
   }
}

export default useAuthCheck