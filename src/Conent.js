import Prodoct from "./home/Prodoct";
import Lunbo from "./home/Lunbo";
import {NavLink,Route} from "react-router-dom";
import List from "./home/List";
import Data from "./data";
import React from "react";
import axios from "axios";
import "./css/List.css"
import "./css/Prodoct.css"

class Conent extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            pc:{},
            p:{},
            msg:{},
            det:{},
            xs:false
        }
    }
    componentWillMount() {
        axios.get('/data')
            .then(
                (data)=>{
                    console.log(data.data);
                    this.setState({
                        pc:data.data[0],
                        p:data.data[1],
                        msg:data.data[2],
                        det:data.data[3],
                    })
                    // console.log(this);
                }
            )
    }

    render() {
        let Det=Object.values(this.state.det)
        // console.log(Det);
        return (
            <div className="content">
                <Prodoct pc={this.state.pc} p={this.state.p} msg={this.state.msg} />
                <div>
                    <Lunbo/>
                    <div className="list-b">
                        {
                            Det.map(
                                (item,index)=>{
                                    return(
                                        <div key={index}>
                                            {/*<div className="sect-left">*/}
                                                <NavLink className="p" to="/data/list/a">
                                                    <List  ite={Det[index].head}></List>
                                                </NavLink>
                                            {/*</div>*/}
                                            <div  key={index} className="sect-right">
                                                <Route path="/data/list/a" component={Data}></Route>
                                            </div>
                                        </div>

                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>

        )
    }
}
export default Conent;
