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
        if (!userInput.trim()) {
            document.getElementById('ai-response').innerText = "Please enter a question!";
            return;
        }
        
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
