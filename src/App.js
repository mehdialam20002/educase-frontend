import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import CreateAccountForm from './CreateAccountForm';
import SignInForm from './SignInForm';
import AccountSettings from './AccountSettings';


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
