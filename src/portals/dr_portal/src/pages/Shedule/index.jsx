


import React, { useState } from 'react';

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
        <section className="prescription-section">
            <form className="prescription-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Prescription & Management</h2>
                <div className="input-wrapper">
                    <label>Patient ho bahi  ID</label>
                    <input type="text" name="patientId" className="input-field" value={formData.patientId} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <div className="input-wrapper">
                        <label>Patient Name</label>
                        <input type="text" name="patientName" className="input-field" value={formData.patientName} onChange={handleChange} required />
                    </div>
                    <div className="input-wrapper">
                        <label>Doctor Name</label>
                        <input type="text" name="doctorName" className="input-field" value={formData.doctorName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="input-wrapper">
                    <label>Diagnosis</label>
                    <input type="text" name="diagnosis" className="input-field" value={formData.diagnosis} onChange={handleChange} required />
                </div>
                <div className="input-wrapper">
                    <label>Prescription</label>
                    <textarea name="prescription" className="review-box" value={formData.prescription} onChange={handleChange} required></textarea>
                </div>
                <div className="input-wrapper">
                    <label>Additional Notes</label>
                    <textarea name="additionalNotes" className="review-box" value={formData.additionalNotes} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </section>
    );
};

export default PrescriptionForm;
