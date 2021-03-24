import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Mounting from './Component/Mounting'
import Updating from './Component/Updating'
import Unmounting from "./Component/Unmounting";
import Header from "./Header/Header";
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  } 
  render(){
    return(
      <BrowserRouter>
      <Header/>
      <switch>
      <Route path ='/Mounting'component={Mounting}/>
      <Route path ='/Updating'component={Updating}/>
      <Route path ='/UnMounting'component={Unmounting}/>
      </switch>
      </BrowserRouter>
    )
  }
}



