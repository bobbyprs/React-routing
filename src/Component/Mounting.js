import React from 'react'
export default class Mounting extends React.Component{
  constructor(props){
    super(props)
   
  } 
  render(){
    return(
      <div className='container'>
        <div><h4>Mounting</h4></div>
        <div><p>These methods are called in the following order when an instance of a component is being created and inserted into the DOM:</p></div>
        <div><li>constructor()</li></div>
        <div><li>staticgetDerivedStateFromProps()</li></div>
        <div><li>render()</li></div>
        <div><li>componentDidMount()</li></div>
        <div>Note:These methods are considered legacy and you should avoid them in new code:</div>
        <div><li>UNSAFE_componentWillMount()</li></div>
        <div><h4>componentDidMount</h4>
            <p>
        componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

        This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

        You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
            </p></div>
      </div>
    )
  }
}



