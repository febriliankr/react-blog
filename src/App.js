import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog/Blog'
import Admin from './components/Admin'
import Chat from './components/Chat/Chat'
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from 'firebase/app';
import { auth } from './config/firebaseConfig'
import 'firebase/firestore';


function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        setUser(authUser);
        console.log('auth', authUser.email);
        //alert('user logged in', authUser)
      } else {
        //user has logged out
        setUser(null);
      }
    })

    return () => {
      //perform cleanupactions
      unsubscribe();
    }

  }, [user])

  return (

    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Switch>
          <div className="container mx-auto pl-4 pr-5 flex flex-col w-full lg:w-3/4 xl:w-3/5 lg:items-start overflow-y-hidden">
            <Route exact path="/" component={Hero}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/blog" component={() => <Blog user={user} />}></Route>
            <Route path="/chat" component={Chat}></Route>
            <Route path="/admin" component={() => <Admin user={user} />}></Route>


            <Footer />
            

          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
