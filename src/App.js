import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './home/Header.js'
import Deng from './home/Deng.js'
import Data from './data'
import Conent from './Conent'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'

import './mock.js'

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

    render() {

        console.log(this);
        return (
            <div className="App">
                <HashRouter>
                    <Header sonData={(e)=>{this.sondata(e)}}/>

                    <Switch>
                        <Route path='/index' component={Conent}></Route>
                        <Route path='/data' component={Data}></Route>
                        <Redirect to={'/index'}/>
                        <Deng kongzhi={this.state.xs} sonData={(e) => {
                            this.sondata(e)
                        }}></Deng>
                    </Switch>
                    <footer><span>@2016 fishenal MIT</span></footer>

                </HashRouter>
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
