const form = document.getElementById("orderForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const editing = document.getElementById("editing").value;
    const requirements = document.getElementById("requirementsText").value.trim();

    if (!name || !editing || !requirements) {
        alert("Please fill in all required details.");
        return;
    }

    const message =
        "Hello Nashgrads!\n\n" +
        "Name: " + name + "\n\n" +
        "Service: " + editing + "\n\n" +
        "Requirements:\n" + requirements + "\n\n" +
        "I would like to place an order.";

    navigator.clipboard.writeText(message);

    window.location.href = "https://www.instagram.com/nashgrads14?stkn=bTNxZWwxNW5td3h1";

});