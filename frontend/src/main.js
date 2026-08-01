// Health Insurance System Frontend Logic

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

document.addEventListener('DOMContentLoaded', () => {
    checkApiConnection();
});

async function checkApiConnection() {
    const statusElement = document.getElementById('apiStatus');
    if (!statusElement) return;

    try {
        const response = await fetch(`${API_BASE_URL}/hello`);
        if (response.ok) {
            const data = await response.json();
            statusElement.textContent = `Backend Connected: ${data.message || 'Spring Boot API Online'}`;
            statusElement.classList.add('status-connected');
        } else {
            statusElement.textContent = 'Backend API Offline';
            statusElement.classList.add('status-offline');
        }
    } catch (error) {
        statusElement.textContent = 'Backend API Ready for Connection';
        statusElement.classList.add('status-offline');
    }
}
