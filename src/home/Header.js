import React from 'react';
import logo from '../logo.svg';

class Header extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            dengLu:true
        }
    }
    deng(){

    }
    render() {
        return(
            <header className="App-header">
                <ul>
                    <li><img src={logo}alt="logo" /> </li>
                    <li>
                        <span onClick={()=>{this.props.sonData(this.state.dengLu)}}>登入</span>
                        <span>注册</span>
                        <span>关于</span>
                    </li>
                </ul>

            </header>
        )
    }
}
export default Header;