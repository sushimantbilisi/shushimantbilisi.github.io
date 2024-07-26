document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const textToCopy = urlParams.get("text");

    const messageElement = document.getElementById("copyMessage");
    const ALERT_INNER_TEXT = document.getElementById("allert-inner-text");
    
    const TBC_BUTTON = document.getElementById("tbc-btn");
    const BOG_BUTTON = document.getElementById("bog-btn");
    const MONOBANK_BUTTON = document.getElementById("mono-btn");
    const USDT_BUTTON = document.getElementById("usdt-btn");
    //const SERVICE_FEE = document.getElementById("service-fee");
    const RECEIVER = document.getElementById("boombuli-receiver");

    const tbc_scheme_url = "tbc://";
    const bog_scheme_url = "bogmBank://";

    const tbc_account = "GE10TB7161436010100039";
    const bog_account = "GE03BG0000000538080611";
    const monobank_account = "5375411506909212";
    const usdt_account = "TBkBrw6DvrY3rNLP7RMBexr2puyjYFh6qm";
    //const service_fee = "Service Fee";
    const receiver = "Nikolaiev Dmytro";
    
    const monobank_url = "https://send.monobank.ua/5qf1cqTUnn";

    const openApp = (scheme_url) => {
        if(scheme_url){
            setTimeout(() => {
                if(monobank_account === "5375411506909212"){
                    window.open(scheme_url, '_blank');
                } else {
                    window.location.href = scheme_url;
                }
            }, 500);
        }
    }

    const copyTextToClipboard = (text, scheme_url) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            messageElement.style.display = "block";
            openApp(scheme_url);
            setTimeout(() => {
                messageElement.style.display = "none";
            }, 3000);
        })
        .catch((err) => {
            console.error('Unable to copy text: ', err);
        });
    }

    TBC_BUTTON.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "iBan Copied!";
        copyTextToClipboard(tbc_account, tbc_scheme_url);
    });

    BOG_BUTTON.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "iBan Copied!";
        copyTextToClipboard(bog_account, bog_scheme_url);
    });

    MONOBANK_BUTTON.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "iBan Copied!";
        copyTextToClipboard(monobank_account, monobank_url);
    });

    USDT_BUTTON.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "USDT Address Copied!";
        copyTextToClipboard(usdt_account);
    });

    // SERVICE_FEE.addEventListener("click", () => {
    //     ALERT_INNER_TEXT.innerText = "Text Copied!";
    //     copyTextToClipboard(service_fee);
    // });

    RECEIVER.addEventListener("click", () => {
        ALERT_INNER_TEXT.innerText = "Receiver Copied!";
        copyTextToClipboard(receiver);
    });

});
