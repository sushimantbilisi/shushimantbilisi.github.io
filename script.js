document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    if (textToCopy) {
        copyTextToClipboard(textToCopy);
    }

    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        displayCopyMessage();
    }

    function displayCopyMessage() {
        const messageElement = document.getElementById("message");
        messageElement.style.display = "block";
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 2000); // Display the message for 2 seconds
    }
});
