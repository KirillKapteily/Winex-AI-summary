// script.js
document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'none'; 

    if (inputText.trim() === '') {
        document.getElementById('outputText').textContent = 'Пожалуйста, введите текст для саммаризации.';
        return;
    }

    const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputText }),
    });

    const result = await response.json();

    if (result.error) {
        document.getElementById('outputText').textContent = 'Ошибка при запросе к API.';
    } else {
        document.getElementById('outputText').textContent = result[0].summary_text;
    }
});
