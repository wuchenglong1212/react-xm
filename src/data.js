import React from 'react';
import './data.css';
import {HashRouter, NavLink, Route} from 'react-router-dom'
import {Button, ButtonGroup, Col, Container, Dropdown, Row} from 'react-bootstrap';

var Mock = require('mockjs')
var data = []
function Data() {
  return (
    <div className="Data">
        <HashRouter>
            <div className="head">
            </div>
            <div className="sect">
                <div className="sect-left">
                    <img src={require('./img/1.png')} className="left-img" alt=""/>
                    <NavLink className="p" to="/data/list/a">数据类型</NavLink>
                    <NavLink className="p" to="/data/list/b">数据预测</NavLink>
                    <NavLink className="p" to="/data/list/c">流量分析</NavLink>
                    <NavLink className="p" to="/data/list/d">广告发布</NavLink>
                </div>
                <div className="sect-right">
                    <Route path="/data/list/a" component={AA}></Route>
                    <Route path="/data/list/b" component={BB}></Route>
                    <Route path="/data/list/c" component={CC}></Route>
                    <Route path="/data/list/d" component={DD}></Route>
                </div>
            </div>
        </HashRouter>
    </div>
  );
}
class AA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '1',
            typ: '20',
            year: '50',
            years: '半年',
            shop:'50',
            shoping: '红色版',
            msg: '杭州',
            show: 'block',
            top: '-100%',
            opacity: '0',
            zIndex: '-1',
            endShow: 'block'
            // parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        }
    }
    cktyp(e) {
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户
            this.setState({
                typ: 20,
                msg: '杭州'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专业
            this.setState({
                typ: 40,
                msg: '北京'
            })
        } else {
            this.setState({
                typ: 60,
                msg: '上海'
            })
        }
    }
    cktime(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   半年
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 50,
                years: '半年'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   三年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                year: 250,
                years: '三年'
            })
        } else {     //一年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 90,
                years: '一年'
            })
        }
    }
    ckshop(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户版
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 50,
                shoping: '红色版'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专家
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 200,
                shoping: '紫色版'
            })
        } else {
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({//商业版
                shop: 120,
                shoping: '绿色版'
            })
        }
    }

    no(e) {
        this.setState({
            top: '-100%',
            opacity: '0'
        })
        setTimeout(() => {
            this.setState({
                zIndex: '-1'
            })
        },)
    }

    show(e) {
        this.setState({
            show: 'block',
            top: '0',
            opacity: '1',
            zIndex: '20'
        })

    }

    endNo() {
        if (this.state.endShow !== 'block') {
            this.no()
        }
        setTimeout(() => {
            this.setState({
                endShow: this.state.endShow === 'block' ? 'none' : 'block'
            })
        }, 500)

    }
    render() {
        console.log(this.props.location.pathname);
        //总价
        let and = parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        return (
            <div>
                <h1>数据统计</h1>
                <p>历史资料、科学实验、检验、统计等所获得和用于科技研究，技术设计、查证、决策的数值加以统计为解决方案做前期准备</p>
                <div className="sect-sect">
                    <div><span>产品类型：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {this.ckshop(e)}}>
                            <Button variant="secondary" onClick={(e) => {this.ckshop(e)}} className='btn-color btn btn-secondary'>红色版</Button>
                            <Button variant="secondary" onClick={(e) => {this.ckshop(e)}}>绿色版</Button>
                            <Button variant="secondary" onClick={(e) => {this.ckshop(e)}}>紫色版</Button>
                        </ButtonGroup>
                    </div>
                    <div className='cla'>
                        <span>适用地区：</span>
                        <div className='lin'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <span>{this.state.msg}</span><span className='sect-span'>＞</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu onClick={(e)=>{this.cktyp(e)}}>
                                    <Dropdown.Item className='sect-btn' >杭州</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>上海</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>北京</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='time'><span>有效时间：</span>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={(e) => {this.cktime(e)}} className='btn-color btn btn-secondary'>半年</Button>
                            <Button variant="secondary" onClick={(e) => {this.cktime(e)}}>一年</Button>
                            <Button variant="secondary" onClick={(e) => {this.cktime(e)}}>三年</Button>
                        </ButtonGroup>
                    </div>
                    <div><span>总价：</span>{and}<span>{this.state.and}元</span></div>
                    <div><span> </span>
                        <button className="sect-button" onClick={(e) => {
                            this.show(e)
                        }}>立即购买
                        </button>
                        <div className="float"
                             style={{
                                 display: this.state.show,
                                 top: this.state.top,
                                 opacity: this.state.opacity,
                                 zIndex: this.state.zIndex
                             }}>
                            <button className="endX" onClick={(e) => {
                                this.no(e)
                            }}>X
                            </button>
                            <div className="float-sect">
                                <div style={{display: this.state.endShow}}>
                                    <div className="EX">
                                        <Container>
                                            <Row>
                                                <Col>购买数量</Col>
                                                <Col>产品地区</Col>
                                                <Col>有效时间</Col>
                                                <Col>产品类型</Col>
                                                <Col>&nbsp;总&nbsp;&nbsp;价&nbsp;</Col>
                                            </Row>
                                            <Row>
                                                <Col>{this.state.num}</Col>
                                                <Col>{this.state.msg}</Col>
                                                <Col>{this.state.years}</Col>
                                                <Col>{this.state.shoping}</Col>
                                                <Col>{and}元</Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <p>请选择银行</p>
                                    <div className="bank">
                                        <button>
                                            <img src={require("./img/zhaoshang.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jianshe.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/pufa.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jiaotong.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/gongshang.png")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/nongye.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongguo.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongxin.jpg")} alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="end-shop" onClick={() => {
                                            this.endNo()
                                        }}>确认购买
                                        </button>
                                    </div>
                                </div>
                                <div style={{display: this.state.endShow === 'block' ? 'none' : 'block'}}>
                                    <p className='end-p'>购买失败</p>
                                    <button className='end-shop' onClick={() => {
                                        this.endNo()
                                    }}>确认
                                    </button>
                                </div>
                            </div>
                            <div className="float-bg" onClick={(e) => {
                                this.no(e)
                            }}></div>

                        </div>
                    </div>
                </div>
                <div className="no"></div>
                <div className="foot">
                    <h1>产品说明</h1>
                    <p>历史资料、科学实验、检验、检验、统计等所获得的和用于科学研究、技术研究、查证、决策等的数值加以统计为解决方案做前期准备</p>


                    <div className="msg">
                        <Container>
                            <Row>
                                <Col>安全安保</Col>
                                <Col>办公文书</Col>
                                <Col>体育彩票</Col>
                                <Col>车辆物流</Col>
                                <Col>成人用品</Col>
                                <Col>出版传媒</Col>
                                <Col>电脑硬件</Col>
                            </Row>
                            <Row>
                                <Col>电子电工</Col>
                                <Col>房地产建筑</Col>
                                <Col>分类平台</Col>
                                <Col>服装管理</Col>
                                <Col>箱包饰品</Col>
                                <Col>化工原料</Col>
                                <Col>机械设备</Col>
                            </Row>
                            <Row>
                                <Col>安全安保</Col>
                                <Col>办公文书</Col>
                                <Col>体育彩票</Col>
                                <Col>车辆物流</Col>
                                <Col>成人用品</Col>
                                <Col>出版传媒</Col>
                                <Col>电脑硬件</Col>
                            </Row>
                            <Row>
                                <Col>电子电工</Col>
                                <Col>房地产建筑</Col>
                                <Col>分类平台</Col>
                                <Col>服装管理</Col>
                                <Col>箱包饰品</Col>
                                <Col>化工原料</Col>
                                <Col>机械设备</Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
class BB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '1',
            typ: '20',
            year: '50',
            years: '半年',
            shop:'50',
            shoping: '红色版',
            msg: '杭州',
            show: 'block',
            top: '-100%',
            opacity: '0',
            zIndex: '-1',
            endShow: 'block'
            // parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        }
    }
    del() {
        if (this.state.num > 1) {
            this.setState({
                num: parseInt(this.state.num) - 1
            })
        }

    }
    add() {
        this.setState({
            num: parseInt(this.state.num) + 1
        })
    }
    changeNum(e) {
        if (e.target.value > 0) {
            this.setState({
                num: parseInt(e.target.value)
            })
        } else {
            this.setState({
                num: 1
            })
        }
    }
    cktime(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   半年
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 50,
                years: '半年'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   三年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                year: 250,
                years: '三年'
            })
        } else {     //一年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 90,
                years: '一年'
            })
        }
    }
    ckshop(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户版
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 50,
                shoping: '客户版'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专家
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 200,
                shoping: '专家版'
            })
        } else {
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({//商业版
                shop: 120,
                shoping: '商业版'
            })
        }
    }

    no(e) {
        this.setState({
            top: '-100%',
            opacity: '0'
        })
        setTimeout(() => {
            this.setState({
                zIndex: '-1'
            })
        },)
    }

    show(e) {
        this.setState({
            show: 'block',
            top: '0',
            opacity: '1',
            zIndex: '20'
        })

    }

    endNo() {
        if (this.state.endShow !== 'block') {
            this.no()
        }
        setTimeout(() => {
            this.setState({
                endShow: this.state.endShow === 'block' ? 'none' : 'block'
            })
        }, 500)

    }
    render() {
        console.log(this.props.location.pathname);
        //总价
        let and = parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        return (
            <div>
                <h1>数据预测</h1>
                <p>未来，大数据会变得越来越重要，其核心应用技术也会成为互联网行为以及产业变革的重要力量，我们很有必要对数据及其分析方法进行全面且深入
                的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
                <div className="sect-sect">
                    <div className="sect-num"><span>购买数量：</span>
                        <button onClick={() => {
                            this.del()
                        }}>-
                        </button>
                        <input value={this.state.num} onChange={(e) => {
                            this.changeNum(e)
                        }}/>
                        <button onClick={() => {
                            this.add()
                        }}>+
                        </button>
                    </div>
                    <div><span>媒介：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.ckshop(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>纸制报告</Button>
                            <Button variant="secondary">页面报告</Button>
                            <Button variant="secondary">邮件</Button>
                        </ButtonGroup>
                    </div>
                    <div className='time'><span>有效时间：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.cktime(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>半年</Button>
                            <Button variant="secondary">一年</Button>
                            <Button variant="secondary">三年</Button>
                        </ButtonGroup>
                    </div>
                    <div><span>总价：</span>{and}<span>{this.state.and}元</span></div>
                    <div><span> </span>
                        <button className="sect-button" onClick={(e) => {
                            this.show(e)
                        }}>立即购买
                        </button>
                        <div className="float"
                             style={{
                                 display: this.state.show,
                                 top: this.state.top,
                                 opacity: this.state.opacity,
                                 zIndex: this.state.zIndex
                             }}>
                            <button className="endX" onClick={(e) => {
                                this.no(e)
                            }}>X
                            </button>
                            <div className="float-sect">
                                <div style={{display: this.state.endShow}}>
                                    <div className="EX">
                                        <Container>
                                            <Row>
                                                <Col>购买数量</Col>
                                                <Col>产品类型</Col>
                                                <Col>有效时间</Col>
                                                <Col>&nbsp;产&nbsp;&nbsp;品&nbsp;</Col>
                                                <Col>&nbsp;总&nbsp;&nbsp;价&nbsp;</Col>
                                            </Row>
                                            <Row>
                                                <Col>{this.state.num}</Col>
                                                <Col>{this.state.msg}</Col>
                                                <Col>{this.state.years}</Col>
                                                <Col>数据预测</Col>
                                                <Col>{and}元</Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <p>请选择银行</p>
                                    <div className="bank">
                                        <button>
                                            <img src={require("./img/zhaoshang.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jianshe.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/pufa.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jiaotong.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/gongshang.png")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/nongye.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongguo.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongxin.jpg")} alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="end-shop" onClick={() => {
                                            this.endNo()
                                        }}>确认购买
                                        </button>
                                    </div>
                                </div>
                                <div style={{display: this.state.endShow === 'block' ? 'none' : 'block'}}>
                                    <p className='end-p'>购买失败</p>
                                    <button className='end-shop' onClick={() => {
                                        this.endNo()
                                    }}>确认
                                    </button>
                                </div>
                            </div>
                            <div className="float-bg" onClick={(e) => {
                                this.no(e)
                            }}></div>

                        </div>
                    </div>
                </div>
                <div className="no"></div>
                <div className="foot">
                    <h1>产品说明</h1>
                    <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……

                        以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。

                        大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。

                        作为预测分析领域的专家，埃里克•西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用...</p>
                </div>
            </div>
        )
    }
}
class CC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '1',
            typ: '20',
            year: '50',
            years: '半年',
            shop:'50',
            shoping: '客户版',
            msg: '入门版',
            show: 'block',
            top: '-100%',
            opacity: '0',
            zIndex: '-1',
            endShow: 'block'
            // parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        }
    }
    del() {
        if (this.state.num > 1) {
            this.setState({
                num: parseInt(this.state.num) - 1
            })
        }

    }
    add() {
        this.setState({
            num: parseInt(this.state.num) + 1
        })
    }
    changeNum(e) {
        if (e.target.value > 0) {
            this.setState({
                num: parseInt(e.target.value)
            })
        } else {
            this.setState({
                num: 1
            })
        }
    }
    cktyp(e) {
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户
            this.setState({
                typ: 20,
                msg: '入门版'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专业
            this.setState({
                typ: 40,
                msg: '专业版'
            })
        } else {
            this.setState({
                typ: 60,
                msg: '中级版'
            })
        }
    }
    cktime(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   半年
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 50,
                years: '半年'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   三年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                year: 250,
                years: '三年'
            })
        } else {     //一年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 90,
                years: '一年'
            })
        }
    }
    ckshop(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户版
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 50,
                shoping: '客户版'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专家
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 200,
                shoping: '专家版'
            })
        } else {
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({//商业版
                shop: 120,
                shoping: '商业版'
            })
        }
    }

    no(e) {
        this.setState({
            top: '-100%',
            opacity: '0'
        })
        setTimeout(() => {
            this.setState({
                zIndex: '-1'
            })
        },)
    }

    show(e) {
        this.setState({
            show: 'block',
            top: '0',
            opacity: '1',
            zIndex: '20'
        })

    }

    endNo() {
        if (this.state.endShow !== 'block') {
            this.no()
        }
        setTimeout(() => {
            this.setState({
                endShow: this.state.endShow === 'block' ? 'none' : 'block'
            })
        }, 500)

    }
    render() {
        console.log(this.props.location.pathname);
        //总价
        let and = parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        return (
            <div>
                <h1>流量分析</h1>
                <p>是指在获得网站访问量基本数据的情况下对数据进行统计、分析、从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现
                    目前网络营销活动中可能存在的问题</p>
                <div className="sect-sect">
                    <div className="sect-num"><span>购买数量：</span>
                        <button onClick={() => {
                            this.del()
                        }}>-
                        </button>
                        <input value={this.state.num} onChange={(e) => {
                            this.changeNum(e)
                        }}/>
                        <button onClick={() => {
                            this.add()
                        }}>+
                        </button>
                    </div>
                    <div className='cla'>
                        <span>产品类型：</span>
                        <div className='lin'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <span>{this.state.msg}</span><span className='sect-span'>＞</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu onClick={(e)=>{this.cktyp(e)}}>
                                    <Dropdown.Item className='sect-btn' >入门版</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>中级版</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>专业版</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='time'><span>有效时间：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.cktime(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>半年</Button>
                            <Button variant="secondary">一年</Button>
                            <Button variant="secondary">三年</Button>
                        </ButtonGroup>
                    </div>
                    <div><span>产品版本：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.ckshop(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>客户版</Button>
                            <Button variant="secondary">商业版</Button>
                            <Button variant="secondary">专家版</Button>
                        </ButtonGroup>
                    </div>
                    <div><span>总价：</span>{and}<span>{this.state.and}元</span></div>
                    <div><span> </span>
                        <button className="sect-button" onClick={(e) => {
                            this.show(e)
                        }}>立即购买
                        </button>
                        <div className="float"
                             style={{
                                 display: this.state.show,
                                 top: this.state.top,
                                 opacity: this.state.opacity,
                                 zIndex: this.state.zIndex
                             }}>
                            <button className="endX" onClick={(e) => {
                                this.no(e)
                            }}>X
                            </button>
                            <div className="float-sect">
                                <div style={{display: this.state.endShow}}>
                                    <div className="EX">
                                        <Container>
                                            <Row>
                                                <Col>购买数量</Col>
                                                <Col>产品类型</Col>
                                                <Col>有效时间</Col>
                                                <Col>产品版本</Col>
                                                <Col>&nbsp;总&nbsp;&nbsp;价&nbsp;</Col>
                                            </Row>
                                            <Row>
                                                <Col>{this.state.num}</Col>
                                                <Col>{this.state.msg}</Col>
                                                <Col>{this.state.years}</Col>
                                                <Col>{this.state.shoping}</Col>
                                                <Col>{and}元</Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <p>请选择银行</p>
                                    <div className="bank">
                                        <button>
                                            <img src={require("./img/zhaoshang.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jianshe.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/pufa.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jiaotong.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/gongshang.png")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/nongye.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongguo.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongxin.jpg")} alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="end-shop" onClick={() => {
                                            this.endNo()
                                        }}>确认购买
                                        </button>
                                    </div>
                                </div>
                                <div style={{display: this.state.endShow === 'block' ? 'none' : 'block'}}>
                                    <p className='end-p'>购买失败</p>
                                    <button className='end-shop' onClick={() => {
                                        this.endNo()
                                    }}>确认
                                    </button>
                                </div>
                            </div>
                            <div className="float-bg" onClick={(e) => {
                                this.no(e)
                            }}></div>

                        </div>
                    </div>
                </div>
                <div className="no"></div>
                <div className="foot">
                    <h1>产品说明</h1>
                    <p>网站数据统计分析报告的基础数据源于网站流量统计信息，但价值远高于原始资料，专业的网站访问统计分析报告对网络营销的价值，正如专业的
                        财务分析报告对企业经营策略的价值</p>
                    <h2>用户行为指标</h2>
                    <p>用户行为指标主要说明在XXXXXXXX对对对</p>
                    <p>停留时间</p>
                    <p>来源网站</p>
                    <p>关键词</p>
                    <p>访问量</p>
                    <h2>浏览网站方式</h2>
                    <p>上网设备类型</p>
                    <p>浏览器的名称版本</p>
                    <p>电脑分辨率</p>
                    <p>操作系统的版本</p>
                    <p>坐在地的地理位置</p>
                </div>
            </div>
        )
    }
}

class DD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '1',
            typ: '20',
            year: '50',
            years: '半年',
            shop:'50',
            shoping: '红色版',
            msg: '出版业',
            show: 'block',
            top: '-100%',
            opacity: '0',
            zIndex: '-1',
            endShow: 'block'
            // parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        }
    }
    del() {
        if (this.state.num > 1) {
            this.setState({
                num: parseInt(this.state.num) - 1
            })
        }

    }
    add() {
        this.setState({
            num: parseInt(this.state.num) + 1
        })
    }
    changeNum(e) {
        if (e.target.value > 0) {
            this.setState({
                num: parseInt(e.target.value)
            })
        } else {
            this.setState({
                num: 1
            })
        }
    }
    cktyp(e) {
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户
            this.setState({
                typ: 20,
                msg: '出版业'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专业
            this.setState({
                typ: 40,
                msg: '藏起来'
            })
        } else {
            this.setState({
                typ: 60,
                msg: '嘤嘤业'
            })
        }
    }
    cktime(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   半年
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 50,
                years: '半年'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   三年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                year: 250,
                years: '三年'
            })
        } else {     //一年
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({
                year: 90,
                years: '一年'
            })
        }
    }
    ckshop(e) {
        e.target.className = 'btn-color btn btn-secondary'
        if (!e.target.previousSibling) {//找不到上一兄弟节点   客户版
            e.target.nextSibling.className = 'btn btn-secondary'
            e.target.nextSibling.nextSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 50,
                shoping: '初级版'
            })
        } else if (!e.target.nextSibling) {//找不到下一兄弟节点   专家
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.previousSibling.previousSibling.className = 'btn btn-secondary'
            this.setState({
                shop: 200,
                shoping: '专业版'
            })
        } else {
            e.target.previousSibling.className = 'btn btn-secondary'
            e.target.nextSibling.className = 'btn btn-secondary'
            this.setState({//商业版
                shop: 120,
                shoping: '高级版'
            })
        }
    }

    no(e) {
        this.setState({
            top: '-100%',
            opacity: '0'
        })
        setTimeout(() => {
            this.setState({
                zIndex: '-1'
            })
        },)
    }

    show(e) {
        this.setState({
            show: 'block',
            top: '0',
            opacity: '1',
            zIndex: '20'
        })

    }

    endNo() {
        if (this.state.endShow !== 'block') {
            this.no()
        }
        setTimeout(() => {
            this.setState({
                endShow: this.state.endShow === 'block' ? 'none' : 'block'
            })
        }, 500)

    }
    render() {
        console.log(this.props.location.pathname);
        //总价
        let and = parseInt(this.state.num)*(parseInt(this.state.typ)+parseInt(this.state.year)+parseInt(this.state.shop))
        return (
            <div>
                <h1>流量分析</h1>
                <p>是指在获得网站访问量基本数据的情况下对数据进行统计、分析、从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现
                    目前网络营销活动中可能存在的问题</p>
                <div className="sect-sect">
                    <div className="sect-num"><span>购买数量：</span>
                        <button onClick={() => {
                            this.del()
                        }}>-
                        </button>
                        <input value={this.state.num} onChange={(e) => {
                            this.changeNum(e)
                        }}/>
                        <button onClick={() => {
                            this.add()
                        }}>+
                        </button>
                    </div>
                    <div className='cla'>
                        <span>行业：</span>
                        <div className='lin'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <span>{this.state.msg}</span><span className='sect-span'>＞</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu onClick={(e)=>{this.cktyp(e)}}>
                                    <Dropdown.Item className='sect-btn' >出版业</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>嘤嘤业</Dropdown.Item>
                                    <Dropdown.Item className='sect-btn'>藏起来</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div><span>产品版本：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.ckshop(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>初级版</Button>
                            <Button variant="secondary">高级版</Button>
                            <Button variant="secondary">专业版</Button>
                        </ButtonGroup>
                    </div>
                    <div className='time'><span>有效时间：</span>
                        <ButtonGroup aria-label="Basic example" onClick={(e) => {
                            this.cktime(e)
                        }}>
                            <Button variant="secondary" className='btn-color btn btn-secondary'>半年</Button>
                            <Button variant="secondary">一年</Button>
                            <Button variant="secondary">三年</Button>
                        </ButtonGroup>
                    </div>
                    <div><span>总价：</span>{and}<span>{this.state.and}元</span></div>
                    <div><span> </span>
                        <button className="sect-button" onClick={(e) => {
                            this.show(e)
                        }}>立即购买
                        </button>
                        <div className="float"
                             style={{
                                 display: this.state.show,
                                 top: this.state.top,
                                 opacity: this.state.opacity,
                                 zIndex: this.state.zIndex
                             }}>
                            <button className="endX" onClick={(e) => {
                                this.no(e)
                            }}>X
                            </button>
                            <div className="float-sect">
                                <div style={{display: this.state.endShow}}>
                                    <div className="EX">
                                        <Container>
                                            <Row>
                                                <Col>购买数量</Col>
                                                <Col>产品类型</Col>
                                                <Col>有效时间</Col>
                                                <Col>产品版本</Col>
                                                <Col>&nbsp;总&nbsp;&nbsp;价&nbsp;</Col>
                                            </Row>
                                            <Row>
                                                <Col>{this.state.num}</Col>
                                                <Col>{this.state.msg}</Col>
                                                <Col>{this.state.years}</Col>
                                                <Col>{this.state.shoping}</Col>
                                                <Col>{and}元</Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <p>请选择银行</p>
                                    <div className="bank">
                                        <button>
                                            <img src={require("./img/zhaoshang.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jianshe.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/pufa.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/jiaotong.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/gongshang.png")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/nongye.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongguo.jpg")} alt=""/>
                                        </button>
                                        <button>
                                            <img src={require("./img/zhongxin.jpg")} alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="end-shop" onClick={() => {
                                            this.endNo()
                                        }}>确认购买
                                        </button>
                                    </div>
                                </div>
                                <div style={{display: this.state.endShow === 'block' ? 'none' : 'block'}}>
                                    <p className='end-p'>购买失败</p>
                                    <button className='end-shop' onClick={() => {
                                        this.endNo()
                                    }}>确认
                                    </button>
                                </div>
                            </div>
                            <div className="float-bg" onClick={(e) => {
                                this.no(e)
                            }}></div>

                        </div>
                    </div>
                </div>
                <div className="no"></div>
                <div className="foot">
                    <h1>产品说明</h1>
                    <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发报刊。这项工作一般由媒介部
                        门的有关人员负责.....</p>
                    <div className="msg">
                        <Container>
                            <Row>
                                <Col>安全安保</Col>
                                <Col>办公文书</Col>
                                <Col>体育彩票</Col>
                                <Col>车辆物流</Col>
                                <Col>成人用品</Col>
                                <Col>出版传媒</Col>
                                <Col>电脑硬件</Col>
                            </Row>
                            <Row>
                                <Col>电子电工</Col>
                                <Col>房地产建筑</Col>
                                <Col>分类平台</Col>
                                <Col>服装管理</Col>
                                <Col>箱包饰品</Col>
                                <Col>化工原料</Col>
                                <Col>机械设备</Col>
                            </Row>
                            <Row>
                                <Col>安全安保</Col>
                                <Col>办公文书</Col>
                                <Col>体育彩票</Col>
                                <Col>车辆物流</Col>
                                <Col>成人用品</Col>
                                <Col>出版传媒</Col>
                                <Col>电脑硬件</Col>
                            </Row>
                            <Row>
                                <Col>电子电工</Col>
                                <Col>房地产建筑</Col>
                                <Col>分类平台</Col>
                                <Col>服装管理</Col>
                                <Col>箱包饰品</Col>
                                <Col>化工原料</Col>
                                <Col>机械设备</Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;


function toData(num) {//参数分别表示  几条数据    字数
    let pc = {
        "pc1": Mock.Random.cword(4),
        "pc2": Mock.Random.cword(4),
        "pc3": Mock.Random.cword(4),
        "pc4": Mock.Random.cword(4)
    }
    let phone = {
        "p1": Mock.Random.cword(4),
        "p2": Mock.Random.cword(4),
    }
    let msg = {
        "msg1": Mock.Random.cword(5, 15),
        "msg2": Mock.Random.cword(5, 15),
        "msg3": Mock.Random.cword(5, 15),
        "msg4": Mock.Random.cword(5, 15),
        "msg5": Mock.Random.cword(5, 15),
    }
    let det = {
        "det1": {
            head: Mock.Random.cword(4),
            det: Mock.Random.cword(4),
        },
        "det2": {
            head: Mock.Random.cword(4),
            det: Mock.Random.cword(4),
        },
        "det3": {
            head: Mock.Random.cword(4),
            det: Mock.Random.cword(4),
        },
        "det4": {
            head: Mock.Random.cword(4),
            det: Mock.Random.cword(4),
        },
    }
    data.push(pc, phone, msg, det)
}

// Mock.mock('/data', 'get', data);

toData()
console.log(data);
// console.log(Mock.Random.cword(4));
// console.log(Mock.mock('@cword(3, 5)'));
