// script.js
// document.getElementById('summarizeBtn').addEventListener('click', async () => {
//     const inputText = document.getElementById('inputText').value;
//     const apiKey = 'none'; 

//     if (inputText.trim() === '') {
//         document.getElementById('outputText').textContent = 'Пожалуйста, введите текст для саммаризации.';
//         return;
//     }

//     const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${apiKey}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ inputs: inputText }),
//     });

//     const result = await response.json();

//     if (result.error) {
//         document.getElementById('outputText').textContent = 'Ошибка при запросе к API.';
//     } else {
//         document.getElementById('outputText').textContent = result[0].summary_text;
//     }
// });

import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.HUGGING_FACE_API_KEY;  // Загружаем API-ключ

async function summarizeText(text) {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`, // Безопасная вставка ключа
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
    });

    const data = await response.json();
    return data[0]?.summary_text || "Ошибка саммаризации";
}

// Пример использования
summarizeText("Твой текст для саммаризации").then(console.log);


