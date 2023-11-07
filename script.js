document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    const messageElement = document.getElementById("copyMessage");
    const copyButton = document.getElementById("copyButton");


    const copyTextToClipboard = (text) => {
        return navigator.clipboard.writeText(text);
    }

    copyButton.addEventListener("click", () => {
        copyTextToClipboard(textToCopy)
            .then(() => {
                messageElement.style.display = "block";
                setTimeout(() => {
                    messageElement.style.display = "none";
                }, 2000); // Display the message for 2 seconds
            })
            .catch((err) => {
                console.error('Unable to copy text: ', err);
            });
    });
});
