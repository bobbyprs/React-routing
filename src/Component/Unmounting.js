import React from 'react'
export default class UnMounting extends React.Component{
  constructor(props){
    super(props)
  } 
  render(){
    return(
      <div className='container'>
        <div><h3><u>UnMounting</u></h3></div>
        <div><p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
            React has only one built-in method that gets called when a component is unmounted:</p></div>
            <li>componentWillUnmount()</li>
            <div><h4>Updating</h4><p>
            In the unmounting (or deletion, or "cleanup") phase, we have just one lifecycle method to help us out: componentWillUnmount. componentWillUnmount is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements or timers created in componentWillMount.
            At a picnic, componentWillUnmount corresponds to just before you pick up your picnic blanket. You would need to clean up all the food and drinks you've set on the blanket first or they'd spill everywhere! You'd also have to shut down your radio. After that's all done you would be free to pick up your picnic blanket and put it back in the bag safely.
            For a React component, this is where you would clean up any of those long running processes that you set up in componentDidMount. In the above data fetching example, all we would have to do is clear the interval so that the weather API would no longer get called every 15 seconds:
                </p></div>
      </div>
    )
  }
}