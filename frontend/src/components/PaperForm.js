import React, { useState } from 'react';

const PaperForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) return alert("Please upload a PDF.");

    const formData = new FormData();
    formData.append('pdf', file);

    onSubmit(formData); // Send to App.js
  };

  return (
    <div className="form-container">
      <h2>Research Paper Acceptance Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Predict Acceptance</button>
      </form>
    </div>
  );
};

export default PaperForm;
