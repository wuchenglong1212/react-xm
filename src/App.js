import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './home/Header.js'
import Prodoct from './home/Prodoct.js'
import Lunbo from './home/Lunbo.js'
import List from './home/List'
import Deng from './home/Deng.js'
import './mock.js'
import axios from'axios'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pc:{},
            p:{},
            msg:{},
            det:{},
            xs:false
        }
    }
    sondata(e){
        console.log(e);
        this.setState({xs:e})
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
                    console.log(this);
                }
            )
    }

    render() {
        let Det=Object.values(this.state.det)
        console.log(Det);
        return (
            <div className="App">
                <Header sonData={(e)=>{this.sondata(e)}}/>
                <div className="content">
                    <Prodoct pc={this.state.pc} p={this.state.p} msg={this.state.msg} />
                    <div>
                        <Lunbo/>
                        <div className="list-b">
                            {
                                Det.map(
                                    (item,index)=>{
                                        return(<List key={index} ite={Det[index].head}></List>)
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <Deng kongzhi={this.state.xs} sonData={(e)=>{this.sondata(e)}}></Deng>
                <footer><span>@2016 fishenal MIT</span></footer>
            </div>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//             <Header/>
//             <div className="content">
//                 <Prodoct/>
//                 <div>
//                     <Lunbo/>
//                     <div className="list-b">
//                         <List />
//                         <List />
//                         <List />
//                         <List />
//                     </div>
//                 </div>
//             </div>
//             <footer><span>@2016 fishenal MIT</span></footer>
//         </div>
//     );
// }

export default App;
