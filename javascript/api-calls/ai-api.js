<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const aiForm = document.getElementById('ai-form');
    
    aiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const userInput = document.getElementById('user-query').value;
        
=======
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const aiForm = document.getElementById('ai-form');
    
    // Add event listener for form submission
    aiForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which refreshes the page)
        event.preventDefault();
        
        // Get the user's query
        const userInput = document.getElementById('user-query').value;
        
        // Make sure we have some input
>>>>>>> c3d398338a99818d6a862a0b07a27acfe848283a
        if (!userInput.trim()) {
            document.getElementById('ai-response').innerText = "Please enter a question!";
            return;
        }
        
<<<<<<< HEAD
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
=======
        // Show a loading message
        document.getElementById('ai-response').innerText = "Thinking...";
        
        // Simulate API call (replace with actual API call later)
        setTimeout(function() {
            document.getElementById('ai-response').innerText = "You asked: " + userInput + ". This is a simulated response.";
        }, 1000);
        
        /* This is the actual API call code you'll use later:
        fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: userInput })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('ai-response').innerText = data.answer;
        })
        .catch(error => {
            document.getElementById('ai-response').innerText = "Error: " + error.message;
        });
        */
    });
});
>>>>>>> c3d398338a99818d6a862a0b07a27acfe848283a
