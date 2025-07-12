
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    const key = localStorage.getItem("apiKey");

    if (!key) {
        window.open("enter-api-key.html", "_self");
        return null; // Prevent usage of undefined apiKey
    }

    return key;
}
