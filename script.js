document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    if (textToCopy) {
        copyTextToClipboard2(textToCopy);
    }

    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        document.body.appendChild(textArea);
        textArea.select();
        setTimeout(() => {
            document.execCommand('copy');
            console.log(1+ text);
        }, 500);
        console.log(2+ text);
        //document.body.removeChild(textArea);

        //displayCopyMessage();
    }

    function copyTextToClipboard2(text) {
        navigator.clipboard.writeText(text)
        .then(() => {
            displayCopyMessage('Text copied to clipboard: ');
            console.log('Text copied to clipboard: ' + text);
        })
        .catch((err) => {
            console.error('Unable to copy text: ', err);
            displayCopyMessage('Unable to copy text: ');
        });
    }

    function displayCopyMessage(text) {
        const messageElement = document.getElementById("message");
        messageElement.style.display = "block";
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 2000); // Display the message for 2 seconds
    }

});
