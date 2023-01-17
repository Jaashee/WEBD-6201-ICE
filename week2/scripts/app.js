"use strict";

//IIFE - Immediately Invoked Expression
//AKA - Anonymous Self-Executing Function

(function(){
    function Start ()
    {
        console.log("Application Started!!")
    }
    window.addEventListener("load", Start)
})();
