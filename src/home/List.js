import React from 'react';
import '../css/List.css'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            iet:props,
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
        console.log(nextContext);
        this.setState({
            iet:nextProps
        })
    }
    render() {
        let itm=this.props
        console.log(itm)
        return (
            <div className="List-box">
                <div></div>
                <ul>
                    <li><h4>主题测试1</h4></li>
                    <li>胡汉三又回来了</li>
                    <li><button>立即购买</button></li>
                </ul>
            </div>
        )
    }
}

export default List;
