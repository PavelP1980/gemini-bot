// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const textInput = document.getElementById('text-input');
    const fileInput = document.getElementById('file-input');
    const chatOutput = document.getElementById('chat-output');
    const voiceInputBtn = document.getElementById('voice-input-btn');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('text_input', textInput.value);
        if (fileInput.files.length > 0) {
            formData.append('file', fileInput.files[0]);
        }

        const response = await fetch('/ask_gemini', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        chatOutput.innerHTML += `<p>Вы: ${textInput.value}</p>`;
        chatOutput.innerHTML += `<p>Gemini: ${data.response}</p>`;
        textInput.value = '';
        fileInput.value = '';
    });

    // Логика для голосового ввода будет добавлена здесь
    /*
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ru-RU'; // Устанавливаем русский язык

        voiceInputBtn.addEventListener('click', () => {
            recognition.start();
            voiceInputBtn.textContent = 'Слушаю...';
            voiceInputBtn.disabled = true;
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            textInput.value = transcript;
            voiceInputBtn.textContent = 'Голосовой ввод';
            voiceInputBtn.disabled = false;
        };

        recognition.onerror = (event) => {
            console.error('Ошибка распознавания голоса:', event.error);
            voiceInputBtn.textContent = 'Голосовой ввод';
            voiceInputBtn.disabled = false;
            alert('Ошибка голосового ввода. Попробуйте еще раз.');
        };

        recognition.onend = () => {
            voiceInputBtn.textContent = 'Голосовой ввод';
            voiceInputBtn.disabled = false;
        };
    } else {
        voiceInputBtn.style.display = 'none'; // Скрываем кнопку, если API не поддерживается
        console.warn('Web Speech API не поддерживается в этом браузере.');
    }
    */
});
