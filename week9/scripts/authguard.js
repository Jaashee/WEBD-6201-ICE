"use strict";

(function () {

    let protected_routes = ["contact-list.html"];

    if(protected_routes.indexOf(router.ActiveLink) > -1){
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }


})();