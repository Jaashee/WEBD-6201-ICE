// IIFE -- Immediately Invoking Function Expression
// AKA -- Anonymous Self-Executing Function
(function ()
{
    function DisplayHomePage() {

        console.log("DisplayHomePage");

        $("#AboutUsButton").on("click", () => {
            location.href = "about.html"
        });

        $("main").append(`<p id="MainParagraph" class="mt-3" >This is the main paragraph<p/>`);
        $("body").append(`<article class="container">
                                <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>\`<article/>`);

    }
    function DisplayProductsPage()
    {
        console.log("Products Page Called!");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page Called!");
    }

    function DisplayAboutPage()
    {
        console.log("About Page Called!");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page Called!");

        let sendButton = document.getElementById("sendButton");
        let subscribedCheckbox = document.getElementById("subscribeCheckBox")

        sendButton.addEventListener("click", function(event)
        {
            if (subscribedCheckbox.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if (contact.serialize()){
                    let key = contact.FullName.substring(0,1) + Date.now();
                    localStorage.setItem(key, contact.serialize())
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact List Page Called!");

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";      // add deserialized data from local storage

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         <td class="text-center">
                            <button value="" class="btn btn-primary btn-sm edit">
                            <i class="fas fas-edit fa-sm"></i></button>
                         </td>
                         <td class="text-center">
                            <button value="" class="btn btn-danger btn-sm delete">
                            <i class="fas fas-trash-alt  fa-sm"></i></button>
                         </td>
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }
    }

    // named  function option
    function Start()
    {
        console.log("App Started!!");

        
        switch (document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;

            case "Contact List":
                DisplayContactListPage();
                break;
        }
    }

    window.addEventListener("load", Start);


})();