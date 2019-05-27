import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './home/Header.js'
import Deng from './home/Deng.js'
import Data from './data'
import Conent from './Conent'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import './mock.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pc: {},
            p: {},
            msg: {},
            det: {},
            xs: false,
            zt: true
        }
    }

    sondata(e) {
        console.log(e);
        this.setState({xs: e})
    }

    gbzt(e) {
        // console.log(e);
        this.setState({
            zt: e
        })
    }

    chexiao(e) {
        this.setState({
            zt: e
        })
    }

    render() {

        // console.log(this);
        return (
            <div className="App">
                <HashRouter>
                    <Header sonData={(e) => {
                        this.sondata(e)
                    }} chex={(e) => {
                        this.chexiao(e)
                    }} zt={this.state.zt}/>

                    <Switch>
                        <Route path='/index' component={Conent}></Route>
                        <Route path='/data' component={Data}></Route>
                        <Redirect to={'/index'}/>

                    </Switch>
                    <Deng kongzhi={this.state.xs} gaibzt={(e) => {
                        this.gbzt(e)
                    }} sonData={(e) => {
                        this.sondata(e)
                    }}></Deng>
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
