document.getElementById('ai-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('user-query').value;
    
    const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    
    const data = await response.json();
    document.getElementById('ai-response').innerText = data.answer;
});