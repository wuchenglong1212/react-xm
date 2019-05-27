import React from 'react';
import '../css/Deng.css'
class Deng extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kongzhi:false,
            zhanghao:"admin",
            mima:"admin",
            dzhanhao:"",
            dmima:"",
            ztai:false
        }
    }
    getZh(e){
        this.setState({
            dzhanhao:e.target.value
        })
    }
    getMm(e){
        this.setState({
            dmima:e.target.value
        })
    }
    denglu(){
        if(this.state.dzhanhao==this.state.zhanghao&&this.state.dmima==this.state.mima){
            console.log(1)
            this.props.gaibzt(this.state.ztai)
            this.props.sonData(this.state.kongzhi)
        }
    }
    componentDidMount() {
        this.refs.enter.addEventListener('keydown', (e) => {
            var theEvent = window.event || e;
            var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            if (code === 13) {
                this.denglu()
            }
        })
    }
    render() {
        console.log(this.props.kongzhi);
        var xs = this.props.kongzhi?"block":"none";
        // console.log(this.props.kongzhi);
        let style={display:xs}
        return(
            <div ref="enter" className="Deng-box" style={style} >
                <div>
                    <span onClick={()=>{this.props.sonData(this.state.kongzhi)}}>x</span>
                    <ul>
                        <li>
                            <b>用户名 ：</b>
                            <input placeholder="请输入用户名" value={this.state.dzhanhao} onChange={(e)=>{this.getZh(e)}} type="text"/>
                        </li>
                        <li>
                            <b>密码 ：</b>
                            <input placeholder="请输入密码" value={this.state.dmima} onChange={(e)=>{this.getMm(e)}} type="text"/>
                        </li>
                    </ul>
                    <button onClick={()=>{this.denglu()}}>登录</button>
                </div>
            </div>
        )
    }
}
export default Deng