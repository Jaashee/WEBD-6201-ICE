"use strict";

namespace core {


    export class Contact {

        // Private instances
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;

        //Constroctor
        constructor(fullName : string = "", contactNumber: string = "", emailAddress : string = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;

        }

        //getters and setters
        public get FullName()  : string{
            return this.m_fullName;
        }

        public get ContactNumber() : string{
            return this.m_contactNumber;
        }

        public get EmailAddress() : string{
            return this.m_emailAddress;
        }

        public set FullName(fullName : string) {
            this.m_fullName = fullName;
        }

        public set ContactNumber(contactNumber : string) {
            this.m_contactNumber = contactNumber;
        }

        public set EmailAddress(emailAddress : string) {
            this.m_emailAddress = emailAddress
        }

        /**
         * Override method
         *
         * @override
         * @returns {string}
         */
        public toString() :string {
            return `Full Name: ${this.FullName}\n 
            Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }

        /**
         * this method takes the object properties and changes them into a comma (,) seperates string
         *
         * @return {(string | null)}
         */
        public serialize() : string | null {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more the properties of the Contact object are missing or invalid");
            return null;
        }

        /**
         * this method separates the data string into properties
         *
         * @param {string} data
         * @return {void}
         */
        public deserialize(data : string) : void{
            let propertyArray = data.split(",");
            this.m_fullName = propertyArray[0];
            this.m_contactNumber = propertyArray[1];
            this.m_emailAddress = propertyArray[2];
        }

    }

}