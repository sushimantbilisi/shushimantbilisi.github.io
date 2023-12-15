document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    const messageElement = document.getElementById("copyMessage");
    const ALERT_INNER_TEXT = document.getElementById("allert-inner-text");
    
    const TBC_BUTTON = document.getElementById("tbc-btn");
    const BOG_BUTTON = document.getElementById("bog-btn");
    const SERVICE_FEE = document.getElementById("service-fee");
    const RECEIVER = document.getElementById("boombuli-receiver");

    
    const tbc_account = "GE27TB7924345064400003";
    const bog_account = "GE68BG0000000533443714";
    const service_fee = "Service Fee";
    const receiver = "Tsypysheva Aleksandra";
    
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
        ALERT_INNER_TEXT.innerText = "Счет скопирован!";
        copyTextToClipboard(tbc_account);
    });

    BOG_BUTTON.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "Счет скопирован!";
        copyTextToClipboard(bog_account);
    });

    SERVICE_FEE.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "Текст скопирован!";
        copyTextToClipboard(service_fee);
    });

    RECEIVER.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "Получатель скопирован!";
        copyTextToClipboard(receiver);
    });

});
