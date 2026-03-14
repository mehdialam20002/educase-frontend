import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInForm() {

    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/account-settings');
    };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simple validation: check if email contains '@' and '.'
  const isEmailValid = email.includes('@') && email.includes('.');
  const isFormValid = isEmailValid && password.trim() !== '';

  return (
    <div style={styles.outerContainer}>
      <div style={styles.phoneFrame}>
        <div style={styles.title}>
          <h2 style={{ margin: 0 }}>Signin to your</h2>
          <h2 style={{ margin: 0 }}>PopX Account</h2>
        </div>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Email address</legend>
          <input
            style={{
              ...styles.input,
              borderColor: isEmailValid || email === '' ? 'transparent' : 'red',
            }}
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && email !== '' && (
            <p style={styles.errorText}>Please enter a valid email address.</p>
          )}
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Password</legend>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button
          style={{
            ...styles.primaryButton,
            backgroundColor: isFormValid ? '#7B2FF7' : '#ccc',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
          disabled={!isFormValid}
          handleLoginButtonClick
          onClick={handleLoginButtonClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}

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
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: '#f2f1eb',
  },
  title: {
    marginTop: '16px',
    color: '#111827',
  },
  paragraph: {
    color: '#6B7280',
    marginBottom: '24px',
    fontSize: '16px',
  },
  fieldset: {
    border: '1.5px solid #7B2FF7',
    borderRadius: '8px',
    marginBottom: '16px',
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
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    marginTop: '24px',
  },
};

export default SignInForm;
