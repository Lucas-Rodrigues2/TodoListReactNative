import { Component } from "react";

class Header extends Component{
    render() {   
       return <Text>{this.props.nbTachesChecked} / {this.props.nbTaches}</Text>
    }
}

export default Header;