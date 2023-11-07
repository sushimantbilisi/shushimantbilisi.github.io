document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("message");
    const copyButton = document.getElementById("copyButton");
    const textToCopy = "Text to copy"; // Replace with the text you want to copy

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

    // Programmatically trigger a click event on the button
    copyButton.click();
});
