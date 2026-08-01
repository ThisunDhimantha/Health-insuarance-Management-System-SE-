-- Sample Seed Data for Health Insurance Database

USE health_insurance_db;

-- Insert Initial Insurance Policies
INSERT INTO policies (policy_name, policy_type, coverage_amount, premium_amount) VALUES
('Family Health Shield Gold', 'Family Coverage', 100000.00, 250.00),
('Individual Care Platinum', 'Individual', 50000.00, 120.00),
('Senior Health Protection Plus', 'Senior Citizen', 75000.00, 180.00),
('Corporate Employee Wellness', 'Corporate', 200000.00, 450.00);
