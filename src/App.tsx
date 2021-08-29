import React,{useState, useEffect} from 'react';
import '../src/styles/main.css'
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import PostPage from "./pages/PostsPage";
import PostIdPage from "./pages/PostIdPage";
import Navbar from "../src/components/Navbar";
import {PostContext} from "./context";

function App() {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const provideTitle = (title: string) => {
    setTitle(title)
  }
  return (
    <PostContext.Provider value={{title, show, setShow}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/posts'>
            <PostPage />
          </Route>
          <Route exact path='/posts/:id'>
            <PostIdPage provideTitle={provideTitle} />
          </Route>
          <Redirect to={'/posts'}/>
        </Switch>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
