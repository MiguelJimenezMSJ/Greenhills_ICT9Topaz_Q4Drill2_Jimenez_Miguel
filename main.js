function heat_index() {

    let temp = document.getElementById("temperature").value;
    let humid = document.getElementById("humidity").value;

    let result = temp + (0.33 * humid) - 4;

    let message = "";

    if (result <= 27) {
        message = "Comfortable / Cool";
    } else if (result <= 32) {
        message = "Warm";
    } else if (result <= 37) {
        message = "Hot";
    } else if (result <= 41) {
        message = "Very Hot / Caution";
    } else if (result > 41) {
        message = "Extremely Hot / Danger";
    }

    alert("Notification:\nHeat Index: " + result + "\nStatus: " + message);
}