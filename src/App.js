import React, {useState,useEffect} from 'react';
import Home from './Home'
import Register from './Register'
import fire from './fire';
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';
import Event from './Event';
import Buidan from './Buidan';
import Login from './Login';
import Hero from './Hero';
import Hana from './Hana';
import Gal from './Gal';
import Shiree from './Shiree';
import Or from './Or';
import Sandal from './Sandal';
import Tuslamj from './Tuslamj';
import Contact from './Contact';
import Sale from './Sale';
import Card from './Card';
import Detail from './Detail';
import Page from './Page';
function App() {
  const [user,setUser] = useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError, setEmailError]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handlelogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong.password":
            setPasswordError(err.message);
            break;
    }
  })
  }
  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/weak.password":
            setPasswordError(err.message);
            break;
    }
  })
  }
  const handleLogout = () => {
    fire.auth().signOut();
  }
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    })
  }
  useEffect(()=>{
    authListener();
  },[])
  return(
    <div className="App">
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/event">
            <Event/>
          </Route>
          <Route path="/page">
            <Page/>
          </Route>
          <Route path="/buidan">
            <Buidan/>
          </Route>
          <Route path="/hana">
            <Hana/>
          </Route>
          <Route path="/gal">
            <Gal/>
          </Route>
          <Route path="/shiree">
            <Shiree/>
          </Route>
          <Route path="/or">
            <Or/>
          </Route>
          <Route path="/sandal">
            <Sandal/>
          </Route>
          <Route path="/tuslamj">
            <Tuslamj/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/sale">
            <Sale/>
          </Route>
          {user ? (
            <Hero handleLogout={handleLogout}></Hero>
          ) : (
                <Login
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handlelogin={handlelogin} 
                handleSignup={handleSignup} 
                hasAccount={hasAccount} 
                setHasAccount={setHasAccount} 
                emailError={emailError} 
                passwordError={passwordError}
              />
          )}
               
            
            
           
        </Switch>
     
    </div>
  );
}
export default App;