import React from 'react'
import { Link } from 'react-router-dom'
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div  style={{backgroundColor:'aqua',textAlign:'center',}}>
            <h1>Component Life Cycle</h1>
        <div style={{display:'inline-block',padding:'8px'}}><Link to="/Mounting">Mounting</Link></div>
        <div style={{display:'inline-block',padding:'8px'}}><Link to='/Updating'>Updating</Link></div>
        <div style={{display:'inline-block',padding:'8px'}}><Link to="/Unmounting">UnMounting</Link></div>
        </div>
    )
}
}