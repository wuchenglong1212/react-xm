import React from 'react';
import logo from '../logo.svg';

class Header extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            dengLu:true,
            che:true
        }
    }
    deng(){
        if(this.props.zt){
            console.log(1);
            this.props.sonData(this.state.dengLu)
        }else {
            this.props.chex(this.state.che)
        }
    }
    render() {
        let de=this.props.zt?"登录":"注销";
        let xs = this.props.zt?"inline-block":"none";
        let style={display:xs}
        return(
            <header className="App-header">
                <ul>
                    <li><a href="/index"><img src={logo}alt="logo" /> </a></li>
                    <li>
                        <span onClick={()=>{this.deng()}}>{de}</span>
                        <span style={style}>注册</span>
                        <span>关于</span>
                    </li>
                </ul>

            </header>
        )
    }
}
export default Header;
