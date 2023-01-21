// IIFE -- Immediatley Invoiding Function Expression
// AKA -- Anonymous Self-Executing Function
(function ()
{
    function DisplayHomePage()
    {   
        console.log("DisplayHomePage");
        let AboutUsButton = document.getElementById("AboutUsButton")
        AboutUsButton.addEventListener("click", function ()
        {
            location.href = "about.html"
        });
    }

    function DisplayProductsPage()
    {
        console.log("DisplayProductsPage");
    }

    function DisplayServicesPage()
    {
        console.log("DisplayServicesPage");
    }

    function DisplayAboutPage()
    {
        console.log("DisplayAboutPage");
    }

    function DisplayContactPage()
    {
        console.log("DisplayContactPage");
    }

    // namesd  function option
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
        }
    }

    window.addEventListener("load", Start);


})();