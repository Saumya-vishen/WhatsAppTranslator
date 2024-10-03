/*document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const languageSelect = document.getElementById('languageSelect');

    if (translateButton && languageSelect) {
        translateButton.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            console.log(`Translate button clicked. Selected language: ${selectedLanguage}`);

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: translateMessages,
                    args: [selectedLanguage]
                }, () => {
                    console.log('Translation script injected.');
                });
            });
        });
    } else {
        console.error('Button or select element not found.');
    }
});

function translateMessages(selectedLanguage) {
    const chatMessages = document.querySelectorAll('div._akbu');

    chatMessages.forEach(msg => {
        const messageTextSpan = msg.querySelector('span.selectable-text.copyable-text');
        if (messageTextSpan) {
            let translatedText;
            switch (selectedLanguage) {
                case 'es':
                    translatedText = "Mensaje traducido en español";
                    break;
                case 'fr':
                    translatedText = "Message traduit en français";
                    break;
                case 'de':
                    translatedText = "Übersetzte Nachricht auf Deutsch";
                    break;
                default:
                    translatedText = messageTextSpan.innerText;
            }
            messageTextSpan.innerText = translatedText;
        }
    });
}*/
document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const languageSelect = document.getElementById('languageSelect');

    if (translateButton && languageSelect) {
        translateButton.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            console.log(`Translate button clicked. Selected language: ${selectedLanguage}`);

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: translateMessages,
                    args: [selectedLanguage]
                }, () => {
                    console.log('Translation script injected.');
                });
            });
        });
    } else {
        console.error('Button or select element not found.');
    }
});

function translateMessages(selectedLanguage) {
    const chatMessages = document.querySelectorAll('div._akbu');

    chatMessages.forEach(msg => {
        const messageTextSpan = msg.querySelector('span.selectable-text.copyable-text');
        if (messageTextSpan) {
            let translatedText;
            switch (selectedLanguage) {
                case 'es':
                    translatedText = "Mensaje traducido en español"; // Spanish
                    break;
                case 'fr':
                    translatedText = "Message traduit en français"; // French
                    break;
                case 'de':
                    translatedText = "Übersetzte Nachricht auf Deutsch"; // German
                    break;
                case 'zh':
                    translatedText = "翻译成中文的消息"; // Chinese
                    break;
                case 'ja':
                    translatedText = "日本語に翻訳されたメッセージ"; // Japanese
                    break;
                case 'en':
                default:
                    translatedText = messageTextSpan.innerText; // Original for English or default
            }
            messageTextSpan.innerText = translatedText; // Replace text with translated text
        }
    });
}
