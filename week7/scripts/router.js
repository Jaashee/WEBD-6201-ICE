"use strict";

(function (core) {

    class Router {

        //public properties
        /**
         * @returns {string}
         */
        get AvtiveLink(){
            return this.m_activeLink;
        }

        /**
         * @param string
         */
        set ActiveLink(link){
            this.m_activeLink = link;
        }

        //Constructor
        constructor() {
            this.ActiveLink = "";
        }

        //Public methods
        Add(route){

        }

        AddTable(routeTable){
            this.m_routingTable = routeTable;
        }

        Find(route){

        }

        Remove(route){

        }


        //Public override methods
        toString(){

        }

    }

})(core || (core = {}));

let router = new core.Router();

router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit",
]);