document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    const messageElement = document.getElementById("copyMessage");
    
    const TBC_BUTTON = document.getElementById("tbc-btn");
    const BOG_BUTTON = document.getElementById("bog-btn");
    
    const tbc_account = "GE27TB7924345064400003";
    const bog_account = "GE68BG0000000533443714";




    const copyTextToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            messageElement.style.display = "block";
            setTimeout(() => {
                messageElement.style.display = "none";
            }, 3000);
        })
        .catch((err) => {
            console.error('Unable to copy text: ', err);
        });
    }

    TBC_BUTTON.addEventListener("click", () => {
        copyTextToClipboard(tbc_account);
    });

    BOG_BUTTON.addEventListener("click", () => {
        copyTextToClipboard(bog_account);
    });

});
