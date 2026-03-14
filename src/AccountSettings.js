

function AccountSettings() {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.phoneFrame}>
        <h1 style={styles.header}>Account Settings</h1>
        <hr style={styles.solidDivider} />
        <div style={styles.profileContainer}>
          <div style={styles.avatar}>
            <img
              src="/pic.jpeg" 
              alt="Profile"
              style={styles.avatarImage}
            />
            <div style={styles.cameraIcon}>📸</div>
          </div>
          
          <div style={styles.profileInfo}>
            <h2 style={styles.name}>Marry Doe</h2>
            <p style={styles.email}>Marry@Gmail.Com</p>
          </div>
        </div>
        <p style={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
        <hr style={styles.dottedDivider1}/>
        <hr style={styles.dottedDivider2} />
        
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
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    padding: '24px',
    boxSizing: 'border-box',
    backgroundColor: '#f2f1eb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
  },
  header: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#111827',
    marginBottom: '20px',
    textAlign: 'left', 
    width: '100%',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  avatar: {
  position: 'relative',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  marginRight: '16px',
},

avatarImage: {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius:'50%'
},

cameraIcon: {
  position: 'absolute',
  bottom: '0',
  right: '0',
  backgroundColor: '#7B2FF7',
  color: '#fff',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
  boxShadow: '0 0 4px rgba(0,0,0,0.2)',
  cursor: 'pointer',
},
  profileInfo: {
    flexGrow: 1,
  },
  name: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827',
    margin: 0,
  },
  email: {
    color: '#6B7280',
    fontSize: '14px',
    marginTop: '4px', 
    marginBottom: 0,
  },
  description: {
    color: 'black',
    fontSize: '13px',
    lineHeight: '1.5',
    marginBottom: '24px',
    textAlign: 'left',
    width: '100%',
    fontWeight:'500'
  },
   solidDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'black',
    border: 'none',
    marginBottom: '16px',
  },
  dottedDivider1:{
    width: '100%',
    borderTop: '1px dotted #999',
  },
  dottedDivider2: {
    width: '100%',
    borderTop: '1px dotted #999',
    marginTop: '370px',
  },
};

export default AccountSettings;