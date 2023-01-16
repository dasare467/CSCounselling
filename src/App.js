import React from 'react'
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import AnnouncementDetails from './Components/projects(or info from staff)/AnnouncementDetails'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import createAnnouncement from './Components/projects(or info from staff)/createAnnouncement'
import firebase from 'firebase'
import MyPage from './Upload/MyPage'
import Schedule from './Components/Scheduling/Schedule'
import ScheduleView from './Components/Scheduling/ScheduleView'



function App() {
  React.useEffect(() => {
    const msg=firebase.messaging();
    msg.requestPermission().then((token) => {
      return msg.getToken();

    }).then((data)=>{
      console.warn("token : ",data)
    }).catch(() => {
      console.log('error');
    })
  })
  return (
    <BrowserRouter> 
    <div className="App">
     <Navbar />
       <Route exact path='/' component= {Dashboard} />
       <Route path='/project/:id' component={AnnouncementDetails} />
       <Route path='/SignIn' component={SignIn} />
       <Route path='/SignUp' component={SignUp} />
       <Route path='/create' component={createAnnouncement} />   
       <Route path='/upload' component={MyPage} />
       <Route path="/schedule" component={Schedule} />
       <Route path="/viewschedule" component={ScheduleView} />
    </div> 
    </BrowserRouter>
  );
}

export default App
