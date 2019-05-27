import React from 'react';
import '../css/Prodoct.css'

class Prodoct extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let Pc=Object.values(this.props.pc);
        let P=Object.values(this.props.p);
        let Msg=Object.values(this.props.msg);
        console.log(Pc);
        return (
            <div>
                <div className="prod">
                    <div>全部产品</div>
                    <div>
                        <h4>PC产品</h4>
                        <ul className="produl">
                            {
                                Pc.map(
                                    (item,index)=>{
                                        return(<li key={index}>{item}</li>)
                                    }
                                )
                            }

                        </ul>
                    </div>
                    <div>
                        <h4>手机应用类</h4>
                        <ul>
                            {
                                P.map(
                                    (item,index)=>{
                                        return(<li key={index}>{item}</li>)
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="prod prod1">
                    <div>最新消息</div>
                    <div>
                        {
                            Msg.map(
                                (item,index)=>{
                                    return(<li key={index}>{item}</li>)
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Prodoct;
