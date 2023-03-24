"use strict";
let core;

(function (core){


    // Contact class needs to be place here
    class Contact{

        constructor(fullName = "", contactNumber = "", emailAddress= "") {
            this.FullName = fullName;
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;

        }

        //getters and setters
        get FullName(){
            return this.m_fullName;
        }

        get ContactNumber(){
            return this.m_contactNumber;
        }

        get EmailAddress(){
            return this.m_emailAddress;
        }

        set FullName(fullName){
            this.m_fullName = fullName;
        }

        set ContactNumber(contactNumber){
            this.m_contactNumber = contactNumber;
        }

        set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress
        }

        serialize(){
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more the properties of the Contact object are missing or invalid");
            return null;
        }

        deserialize(data){
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }


        toString(){
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }


    }


    core.Contact = Contact;
})(core || (core = {}));