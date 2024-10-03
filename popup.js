document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const sendButton = document.getElementById('sendButton');
    const languageSelect = document.getElementById('languageSelect');
    const messageInput = document.getElementById('messageInput');

    // Translate existing messages
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
        console.error('Translate button or select element not found.');
    }

    // Send user-typed message
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            console.log(`Send button clicked. Selected language: ${selectedLanguage}`);

            // Dummy text based on the selected language
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
                    translatedText = messageInput.value; // Use the original typed message for English or default
            }

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: sendMessage,
                    args: [translatedText]
                }, () => {
                    console.log('Send message script injected.');
                });
            });
        });
    } else {
        console.error('Send button not found.');
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
function sendMessage(translatedText) {
    const inputField = document.querySelector('div._ak1r'); // The input field for message
    if (inputField) {
        // Set the dummy translated text in the input field
        inputField.innerText = translatedText; 

        // Create and dispatch an input event to notify WhatsApp
        const inputEvent = new InputEvent('input', {
            bubbles: true,
            cancelable: true,
        });
        inputField.dispatchEvent(inputEvent); // Dispatch the input event

        // Function to find and click the send button
        function clickSendButton() {
            // Select the send button using its aria-label attribute
            const sendButton = document.querySelector('button[aria-label="Send"]'); 
            if (sendButton) {
                sendButton.click(); // Click to send the message
                console.log('Message sent:', translatedText);
            } else {
                console.error('Send button not found, retrying...');
                setTimeout(clickSendButton, 1000); // Retry after 1 second
            }
        }

        // Add a slight delay before attempting to click the send button
        setTimeout(clickSendButton, 500); // Wait for 0.5 seconds before sending
    } else {
        console.error('Input field not found.');
    }
}

