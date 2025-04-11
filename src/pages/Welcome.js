import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet,</p>
        <p className={styles.subtitle}>consectetur adipiscing elit.</p>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.primaryButton}
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          
          <button 
            className={styles.secondaryButton}
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;