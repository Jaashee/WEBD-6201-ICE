// IIFE -- Immediatley Invoiding Function Expression
// AKA -- Anonymous Self-Executing Function
(function ()
{
    let MainContent = document.getElementsByTagName("main")[0];

    let MainParagraph = document.createElement("p");

    MainParagraph.setAttribute("id", "MainParagraph")
    MainParagraph.setAttribute("class", "mt-3")
    MainParagraph.textContent = "This is the main paragraph!"

    MainContent.appendChild(MainParagraph);

    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph.`;
    MainParagraph.textContent = SecondString;

    let Article = document.createElement("article")
    let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
    Article.setAttribute("class", "container")
    Article.innerHTML = ArticleParagraph;
    DocumentBody.appendChild(Article);

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