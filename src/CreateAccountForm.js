import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
  const navigate = useNavigate();

  // Manage input states
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    agency: 'yes', // default checked radio
  });

  // Handle input changes
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Validate required fields are filled
  const isFormValid = () => {
    const { fullName, phoneNumber, email, password } = formData;
    return fullName.trim() && phoneNumber.trim() && email.trim() && password.trim();
  };

  const handleCreateAccountButtonClick = () => {
    if (isFormValid()) {
      navigate('/account-settings');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.phoneFrame}>
        <div style={styles.title}>
          <h2 style={{ margin: 0 }}>Create your</h2>
          <h2 style={{ margin: 0 }}>PopX account</h2>
        </div>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            Full Name<span style={styles.required}>*</span>
          </legend>
          <input
            style={styles.input}
            type="text"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange('fullName')}
          />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            Phone number<span style={styles.required}>*</span>
          </legend>
          <input
            style={styles.input}
            type="text"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange('phoneNumber')}
          />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            Email address<span style={styles.required}>*</span>
          </legend>
          <input
            style={styles.input}
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange('email')}
          />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            Password<span style={styles.required}>*</span>
          </legend>
          <input
            style={styles.input}
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange('password')}
          />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Company name</legend>
          <input
            style={styles.input}
            type="text"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange('companyName')}
          />
        </fieldset>

        <div style={styles.radioGroup}>
          <label style={styles.label}>
            Are you an Agency?<span style={styles.required}>*</span>
          </label>
          <div style={styles.radioOptions}>
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === 'yes'}
                onChange={handleChange('agency')}
              />
              <span style={styles.radioLabel}>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === 'no'}
                onChange={handleChange('agency')}
              />
              <span style={styles.radioLabel}>No</span>
            </label>
          </div>
        </div>

        <button
          style={{
            ...styles.primaryButton,
            cursor: isFormValid() ? 'pointer' : 'not-allowed',
            backgroundColor: isFormValid() ? '#7B2FF7' : '#ccc',
          }}
          onClick={handleCreateAccountButtonClick}
          disabled={!isFormValid()}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: '375px',
    height: '800px',
    backgroundColor: '#fff',
    border: '1px solid black',
    padding: '24px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    backgroundColor: '#f2f1eb',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '30px',
    marginTop: '16px',
  },
  fieldset: {
    border: '1.5px solid #7B2FF7',
    borderRadius: '8px',
    marginBottom: '24px',
    padding: '12px 12px 0 12px',
    position: 'relative',
  },
  legend: {
    fontWeight: '500',
    color: '#7B2FF7',
    padding: '0 6px',
    fontSize: '14px',
    position: 'absolute',
    top: '-10px',
    left: '12px',
    backgroundColor: '#f2f1eb',
  },
  input: {
    width: '100%',
    padding: '12px 8px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  },
  label: {
    display: 'block',
    fontWeight: '500',
    marginBottom: '4px',
    color: '#7B2FF7',
  },
  required: {
    color: 'red',
    marginLeft: '4px',
  },
  radioGroup: {
    marginBottom: '24px',
  },
  radioOptions: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  radioLabel: {
    marginLeft: '4px',
    fontSize: '14px',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#7B2FF7',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    marginTop: '90px',
  },
};

export default CreateAccountForm;
