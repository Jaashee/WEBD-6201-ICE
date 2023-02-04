// IIFE -- Immediatley Invoiding Function Expression
// AKA -- Anonymous Self-Executing Function
(function ()
{
    function DisplayHomePage() {
        console.log("DisplayHomePage");
        let AboutUsButton = document.getElementById("AboutUsButton")
        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html"
        });

        //step 3
        let MainContent = document.getElementsByTagName("main")[0];

        //step 4
        let MainParagraph = document.createElement("p");

        //step 5
        MainParagraph.setAttribute("id", "MainParagraph")
        MainParagraph.setAttribute("class", "mt-3")
        MainParagraph.textContent = "This is the main paragraph!"

        //step 6
        MainContent.appendChild(MainParagraph);


        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph.`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);
        let DocumentBody = document.body;

        let Article = document.createElement("article")
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
        Article.setAttribute("class", "container")
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

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

        sendButton.addEventListener("click", function (event )
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
                         <td></td>
                         <td></td>
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