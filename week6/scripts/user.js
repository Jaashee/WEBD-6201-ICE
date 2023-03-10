"user strict";

"use strict";

(function (core) {

    class User {

        constructor(displayName = "", emailAddress = "", username = "", password = "") {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // Getters and Setters
        get DisplayName() {
            return this.m_displayName;
        }

        set DisplayName(displayName) {
            this.m_displayName = displayName;
        }

        get EmailAddress() {
            return this.m_emailAddress;
        }

        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }

        get Username() {
            return this.m_username;
        }

        set Username(username) {
            this.m_username = username;
        }

        get Password() {
            return this.m_password;
        }

        set Password(password) {
            this.m_password = password;
        }

        //overridden methods
        toString() {
            return `Display Name: ${this.DisplayName}\nEmail Address: ${this.EmailAddress}\nUsername: ${this.Username}`;
        }

        toJSON() {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username,
                "Password": this.Password,
            }
        }

        fromJSON() {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize() {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "" && this.Password !== "") {
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.Username}, ${this.Password} `;
            }
            console.error("One or more the properties of the Contact object are missing or invalid");
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
            this.Password = propertyArray[3];
        }

    }

    core.User = User;

})(core || (core = {}));