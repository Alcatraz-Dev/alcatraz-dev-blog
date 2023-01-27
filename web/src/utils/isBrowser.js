
export const isAuthenticated=()=>{
    if(!isBrowser){
        return;
    }
    return window.localStorage.getItem("isLoggedIn")=== true;
}
export const isBrowser=()=>typeof window!="undefined"