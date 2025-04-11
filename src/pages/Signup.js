import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({
      ...prev,
      isAgency: e.target.value === 'true'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    navigate('/account');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        {/* Email Address */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        {/* Password */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        {/* Company Name */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        
        {/* Agency Selection */}
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>Are you an Agency? *</label>
          <div className={styles.radioOptions}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="isAgency"
                value="true"
                checked={formData.isAgency === true}
                onChange={handleRadioChange}
                required
              />
              <span className={styles.radioButton}></span>
              Yes
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="isAgency"
                value="false"
                checked={formData.isAgency === false}
                onChange={handleRadioChange}
              />
              <span className={styles.radioButton}></span>
              No
            </label>
          </div>
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;