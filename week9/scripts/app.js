// IIFE -- Immediately Invoking Function Expression
// AKA -- Anonymous Self-Executing Function
(function () {

    /**
     * Instantiates a contact and stores in localstorage
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     * @constructor
     */
    function AddContact(fullName, contactNumber, emailAddress) {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if (contact.serialize()) {
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize())
        }
    }

    function AjaxRequest(method, url, callback) {

        // Step 1: Instantiate an XHR object
        let xhr = new XMLHttpRequest();

        //Step 2: Add an event listener for readystatechange
        xhr.addEventListener("readystatechange", () => {

            if (xhr.readyState === 4 && xhr.status === 200) {
                if (typeof callback === "function") {
                    callback(xhr.responseText);
                } else {
                    console.error("Error: callback is not a valid function");
                }
            }
        });
        //Steep 3: Open a connection to the server
        xhr.open(method, url);
        //Step 4: Send the request to the server
        xhr.send();
    }

    function DisplayHomePage() {

        console.log("DisplayHomePage");

        $("#AboutUsButton").on("click", () => {
            location.href = "/about"
        });

        $("main").append(`<p id="MainParagraph" class="mt-3" >This is the main paragraph<p/>`);
        $("body").append(`<article class="container">
                                <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>\`<article/>`);

    }

    function DisplayProductsPage() {

    }

    function DisplayServicesPage() {

    }

    function DisplayAboutPage() {

    }

    /**
     * This function will validate a input provided based on given regular expression
     * @param {string}input_field_id
     * @param {RegExp}regular_expression
     * @param {string}error_message
     * @constructor
     */
    function ValidateField(input_field_id, regular_expression, error_message) {

        let messageArea = $("#messageArea").hide();

        $(input_field_id).on("blur", function () {
            let inputFieldText = $(this).val();
            if (!regular_expression.test(inputFieldText)) {
                $(this).trigger("focus").trigger("select")
                messageArea.addClass("alert alert-danger").text(error_message).show();
            } else {
                messageArea.removeAttr("class").hide();
            }

        });
    }

    function ContactFormValidation() {
        ValidateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "please enter a valid first and lastname (ex: Bruce Wayne)");

        ValidateField("#contactNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "please enter a valid phone contact number (ex: 416-123-12345)");

        ValidateField("#emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "please enter a valid Email address (ex:suername@isp.com)");
    }

    function DisplayContactPage() {
        ContactFormValidation();


        let sendButton = document.getElementById("sendButton");
        let subscribedCheckbox = document.getElementById("subscribeCheckBox")

        sendButton.addEventListener("click", function (event) {
            if (subscribedCheckbox.checked) {
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                if (contact.serialize()) {
                    let key = contact.FullName.substring(0, 1) + Date.now();
                    localStorage.setItem(key, contact.serialize())
                }
            }
        });
    }

    function DisplayContactListPage() {
        console.log("Contact List Page Called!");

        if (localStorage.length > 0) {
            let contactList = document.getElementById("contactList");
            let data = "";      // add deserialized data from local storage

            let keys = Object.keys(localStorage);

            let index = 1;
            for (const key of keys) {
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         
                         <td class="text-center">
                            <button value="${key}" class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit fa-sm"></i> Edit</button>
                         </td>
                         
                         <td class="text-center">
                            <button value="${key}" class="btn btn-danger btn-sm delete">
                            <i class="fas fa-trash-alt  fa-sm"></i> Delete</button>
                         </td>
                         
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
                location.href = "/edit#add"
            });

            $("button.delete").on("click", function () {
                // confirm delete
                if (confirm("Delete contact, are you sure?")) {
                    localStorage.removeItem($(this).val())
                }
                location.href = "/contact-list";
            });

            $("button.edit").on("click", function () {
                location.href = "/edit#" + $(this).val();
            });

        }
    }

    function DisplayEditPage() {

        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);
        switch (page) {
            case "add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add `)

                $("editButton").on(("click"), (event) => {
                    event.preventDefault();
                    AddContact(fullName.value, contactNumber.value, emailAddress.value);
                    // refresh contact-List page
                    location.href = "/contact-list"
                });

                $("#cancelButton").on(("click"), () => {
                    location.href = "/contact-list";
                });

                break;
            default: {
                // get contact information from localstorage
                let contact = new core.Contact();
                contact.deserialize(localStorage.getItem(page));

                //display the contact info in the edit form
                $("#fullName").val(contact.FullName);
                $("#contactNumber").val(contact.ContactNumber);
                $("#emailAddress").val(contact.EmailAddress);

                // when editButton is pressed - update the contact
                $("editButton").on("click", (event) => {

                    event.preventDefault();
                    //get any changes from the form
                    contact.FullName = $("fullName").val();
                    contact.ContactNumber = $("contactNumber").val();
                    contact.EmailAddress = $("emailAddress").val();

                    // replace the item in localstorage
                    localStorage.setItem(page, contact.serialize());

                    // return ti the contact-list
                    location.href = "/contact-list"
                });

            }
                break;
        }
    }

    function DisplayLoginPage() {
        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function () {

            let success = false;
            let newUser = new core.User();

            $.get("./data/user.json", function (data) {

                for (const u of data.user) {
                    //check if the username and password
                    if (username.value === u.Username && password.value === u.Password) {

                        success = true;
                        newUser.fromJSON(user);
                        break;
                    }
                }

                if (success) {

                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();

                } else {
                    //Failed authentication
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger")
                        .text("Error: Invalid credentials");
                }
            });

            $("#cancelButton").on("click", function () {
                document.forms[0].reset();
                location.href = "/index";
            });

        });

    }

    function CheckLogin() {
        if (sessionStorage.getItem("user")) {
            $("#login").html(`<a id="logout" class="nav-link" href="#">
                                             <i class="fas fa-sign-out-alt"></i> Logout</a>`)
        }

        $("#logout").on("click", function () {

            sessionStorage.clear();
            location.href = "/login";
        });

    }

    function DisplayRegisterPage() {

    }

    function Display404Page() {

    }

    function ActiveLinkCallback() {
        switch (router.ActiveLink) {
            case "home" :
                return DisplayHomePage;
            case "about" :
                return DisplayAboutPage;
            case "services" :
                return DisplayServicesPage;
            case "contact" :
                return DisplayContactPage;
            case "contact-list" :
                return DisplayContactListPage;
            case "products" :
                return DisplayProductsPage;
            case "register" :
                return DisplayRegisterPage;
            case "login" :
                return DisplayLoginPage;
            case "edit" :
                return DisplayEditPage;
            case "404" :
                return Display404Page;
            default:
                console.error("Error: callBack does not exist" + router.ActiveLink);
                break;
        }
    }

    function LoadHeader() {

        $.get("/views/components/header.html", function (html_data)
        {
            $("header").html(html_data);

            document.title = capitalizeFirstLetter(router.ActiveLink);
            $(`li>a:contains(${document.title})`).addClass("active");

            CheckLogin();
        });
    }

    function capitalizeFirstLetter(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function LoadContent() {
        let page_name = router.ActiveLink;
        let callback = ActiveLinkCallback();

        $.get(`./views/content/${page_name}.html`, function (html_data) {
            $("main").html(html_data);
            callback();
        });
    }

    function LoadFooter() {
        $.get("/views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }

    // named  function option
    function Start() {
        console.log("App Started!!");

        LoadHeader();

        LoadContent();

        LoadFooter();


    }

    window.addEventListener("load", Start);

})();