import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../features/auth/authApi";

function useAuthCheck() {
   const [authCheck, setAuthCheck] = useState(false)
   const [skipFetch, setSkipFetch] = useState(false)
   const { data } = useGetLoggedInUserQuery(undefined, { skip: skipFetch });


   useEffect(() => {
      if (data?.user) {
         setSkipFetch(true);
      }
      setAuthCheck(true);
   }, [data,]);
   return authCheck
}

export default useAuthCheck