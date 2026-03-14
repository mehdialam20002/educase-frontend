import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {

    const navigate = useNavigate();

    const handleCreateAccountClick = () => {
        navigate('/create-account');
    };
    const handleSignInClick = () => {
        navigate('/sign-in');
    };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.phoneFrame}>
        <div style={styles.content}>
          <h2 style={styles.title}>Welcome to PopX</h2>
          <p style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button style={styles.primaryButton} onClick={handleCreateAccountClick}>Create Account</button>
          <button style={styles.secondaryButton} onClick={handleSignInClick}>Already Registered? Login</button>
        </div>
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
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: '#f2f1eb',
  },
  content: {
    textAlign: 'left',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '8px',
    color: '#111827',
  },
  subtitle: {
    color: '#6B7280',
    marginBottom: '24px',
    fontSize: '16px',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#7B2FF7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#E0D4FF',
    color: '#7B2FF7',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default WelcomeScreen
