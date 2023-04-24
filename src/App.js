import './App.css';
import UserHome from './components/UserHome';
import UserProfile from './components/UserProfile';
import UserJobs from './components/UserJobs';
import UserMeetings from './components/UserMeetings';
import UserCompanies from './components/UserCompanies';
import UserSettings from './components/UserSettings';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={UserHome}/>
        <Route exact path='/profile' Component={UserProfile}/>
        <Route exact path='/jobs' Component={UserJobs}/>
        <Route exact path='/meetings' Component={UserMeetings}/>
        <Route exact path='/companies' Component={UserCompanies}/>
        <Route exact path='/settings' Component={UserSettings}/>
  
      </Routes>
    </>
  );
}

export default App;
