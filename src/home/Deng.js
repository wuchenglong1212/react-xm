import React from 'react';
import '../css/Deng.css'
class Deng extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            kongzhi:false
        }
    }
    render() {
        var xs = this.props.kongzhi?"block":"none";
        console.log(this.props.kongzhi);
        let style={display:xs}
        return(
            <div className="Deng-box" style={style} >
                <div>
                    <span onClick={()=>{this.props.sonData(this.state.kongzhi)}}>x</span>
                    <ul>
                        <li>
                            <b>用户名 ：</b>
                            <input placeholder="请输入用户名" type="text"/>
                        </li>
                        <li>
                            <b>密码 ：</b>
                            <input placeholder="请输入密码" type="text"/>
                        </li>
                    </ul>
                    <button>登录</button>
                </div>
            </div>
        )
    }
}
export default Deng