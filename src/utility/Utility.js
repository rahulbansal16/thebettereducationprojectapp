// export default isUserLoggedIn = () => {
    // var googleResponse = localStorage.getItem('google_response');
    // return googleResponse !== undefined && googleResponse !== null ;
// }


export const isLoggedIn = ()=>{ 
    var user = localStorage.getItem("user");
    if (user === null){
      return false;
    }
    return true;
 }