import React, {Component} from 'react'
import Auxil from "../../hoc/Auxil"
import classes from "./Layout.module.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () =>{
     this.setState({showSideDrawer: false})
  }

  render(){
    return(
      <Auxil>
      <Toolbar/>
    <SideDrawer closed={this.sideDrawerClosedHandler}
    open={this.state.showSideDrawer}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Auxil>
    )
  }
}

export default Layout;