// Frontend JavaScript API Client

const API_BASE_URL = 'http://localhost:8080/api/policies';

document.addEventListener('DOMContentLoaded', () => {
    fetchPolicies();
});

async function fetchPolicies() {
    try {
        const response = await fetch(API_BASE_URL);
        if (response.ok) {
            const policies = await response.json();
            if (policies && policies.length > 0) {
                renderPolicies(policies);
            }
        }
    } catch (error) {
        console.log('Backend not connected yet. Displaying default static sample policies.');
    }
}

function renderPolicies(policies) {
    const grid = document.getElementById('policyGrid');
    if (!grid) return;

    grid.innerHTML = policies.map(policy => `
        <div class="card">
            <span class="card-badge">${policy.policyType || 'Standard'}</span>
            <h3>${policy.policyName}</h3>
            <p class="card-type">Category: ${policy.policyType}</p>
            <div class="card-details">
                <div>
                    <span class="detail-label">Coverage</span>
                    <span class="detail-value">$${policy.coverageAmount ? policy.coverageAmount.toLocaleString() : 'N/A'}</span>
                </div>
                <div>
                    <span class="detail-label">Monthly Premium</span>
                    <span class="detail-value">$${policy.premiumAmount ? policy.premiumAmount.toLocaleString() : 'N/A'}/mo</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openPolicyModal() {
    alert('Feature: Modal to add new insurance policy.');
}
