import React, { useState } from 'react';
import './Shedule.css';

const PrescriptionForm = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        patientName: '',
        doctorName: '',
        diagnosis: '',
        prescription: '',
        additionalNotes: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/prescriptions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            if (response.ok) {
                alert("Prescription Submitted Successfully!");
                setFormData({ patientId: '', patientName: '', doctorName: '', diagnosis: '', prescription: '', additionalNotes: '' });
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Error submitting prescription:", error);
        }
    };
    
    return (
        <section className="prescription-container">
            <form className="prescription-box" onSubmit={handleSubmit}>
                <h2 className="prescription-heading">Prescription & Management</h2>
                <div className="prescription-field">
                    <label>Patient ID</label>
                    <input type="text" name="patientId" className="prescription-input" value={formData.patientId} onChange={handleChange} required />
                </div>
                <div className="prescription-row">
                    <div className="prescription-field">
                        <label>Patient Name</label>
                        <input type="text" name="patientName" className="prescription-input" value={formData.patientName} onChange={handleChange} required />
                    </div>
                    <div className="prescription-field">
                        <label>Doctor Name</label>
                        <input type="text" name="doctorName" className="prescription-input" value={formData.doctorName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="prescription-field">
                    <label>Diagnosis</label>
                    <input type="text" name="diagnosis" className="prescription-input" value={formData.diagnosis} onChange={handleChange} required />
                </div>
                <div className="prescription-field">
                    <label>Prescription</label>
                    <textarea name="prescription" className="prescription-textarea" value={formData.prescription} onChange={handleChange} required></textarea>
                </div>
                <div className="prescription-field">
                    <label>Additional Notes</label>
                    <textarea name="additionalNotes" className="prescription-textarea" value={formData.additionalNotes} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="prescription-button">Submit</button>
            </form>
        </section>
    );
};

export default PrescriptionForm;
