import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../features/auth/authApi";

function useAuthCheck() {
   const [authCheck, setAuthCheck] = useState(false)
   const [skipFetch, setSkipFetch] = useState(false)
   const { data } = useGetLoggedInUserQuery(undefined, { skip: skipFetch });

   const cookieToken = (document.cookie.replace(/(?:(?:^|.*;\s*)sessionToken\s*\s*([^;]*).*$)|^.*$/, "$1"));
   useEffect(() => {
      if (cookieToken && data?.user) {
         setSkipFetch(true);

      }
      setAuthCheck(true);
   }, [cookieToken, data,]);
   return authCheck
}

export default useAuthCheck