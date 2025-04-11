import React from 'react';
import styles from './AccountSettings.module.css';
import profileImage from '../assets/images/logo.svg'; // Import the image file

const AccountSettings = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Account Settings</h1>
      
      <div className={styles.profileSection}>
        <div className={styles.avatar}>
          <img 
            src={profileImage} 
            alt="Marry Doe" 
            className={styles.profileImage}
          />
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>Marry Doe</h2>
          <p className={styles.userEmail}>Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <p className={styles.text}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing</p>
        <p className={styles.text}>Elitz, Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
        <p className={styles.text}>Labore Et Dolore Magna Aliquyam Erat.Sed Diam</p>
      </div>
    </div>
  );
};

export default AccountSettings;