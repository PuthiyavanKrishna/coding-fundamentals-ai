document.addEventListener('DOMContentLoaded', function() {
    const aiForm = document.getElementById('ai-form');
    
    aiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const userInput = document.getElementById('user-query').value;
        
        if (!userInput.trim()) {
            document.getElementById('ai-response').innerText = "Please enter a question!";
            return;
        }
        
        document.getElementById('ai-response').innerText = "Processing...";
        
        const formData = {
            query: userInput,
            date: new Date().toISOString()
        };
        
        // Use relative URL since we're serving from the same server
        fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('ai-response').innerHTML = `
                    <strong>AI Response:</strong> ${data.response}<br>
                    <small>Submitted at: ${new Date(formData.date).toLocaleString()}</small>
                `;
            } else {
                document.getElementById('ai-response').innerText = "Error: " + data.message;
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('ai-response').innerText = "Error: " + error.message;
        });
    });
});