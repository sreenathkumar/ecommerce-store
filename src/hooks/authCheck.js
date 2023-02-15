
function useAuthCheck() {
   const cookieToken = (document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
   
}

export default useAuthCheck