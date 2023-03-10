"use strict";

(function (core) {

    class Router {

        //public properties
        /**
         * @returns {string}
         */
        get ActiveLink() {
            return this.m_activeLink;
        }

        /**
         * @param string
         */
        set ActiveLink(link) {
            this.m_activeLink = link;
        }

        //Constructor
        constructor() {
            this.ActiveLink = "";
        }

        //Public methods
        Add(route) {
            this.m_routingTable.push(route);
        }

        AddTable(routeTable) {
            this.m_routingTable = routeTable;
        }

        Find(route) {
           return this.m_routingTable.indexOf(route);
        }

        Remove(route) {
            if(this.Find(route) > -1){
                this.m_routingTable.splice(this.Find(route), 1)
                return true;
            }
            return false;
        }


        //Public override methods
        toString() {
            return this.m_routingTable.toString();
        }

    }

    core.Router = Router;

})(core || (core = {}));

let router = new core.Router();

router.AddTable(
    [
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
    ]
);

let route = location.pathname;

router.ActiveLink = (router.Find(route) > -1) // IF true(?) do what's next
                    ? (route == "/") ? "home" : route.substring(1) // if false do what's next
                    : "404";