"use strict";

(function () {

    let protected_routes: string[] = ["contact-list.html"]

    if (protected_routes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }


})();