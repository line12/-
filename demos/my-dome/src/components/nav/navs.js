import React, {Component} from 'react';
import {Row, Col} from 'antd';
import logo from '../../image/logo.png';
import './navs.css';
import home from '../../router/home/home.js';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';


const Home = home;
const skill = () => (
    <div>
        <h1>About</h1>
    </div>
);
const brand = () => (
    <div>
        <p>Inbox</p>
    </div>
);
const sucase = () => (
    <div>
        <p>Inbox</p>
    </div>
);
const news = () => (
    <div>
        <p>Inbox</p>
    </div>
);
const partner = () => (
    <div>
        <p>Inbox</p>
    </div>
);
const talent = () => (
    <div>
        <p>Inbox</p>
    </div>
);
const contact = () => (
    <div>
        <p>Inbox</p>
    </div>
);

const routers = [{
    path: '/index',
    name: '青锦首页',
    component: Home
},
    {
        path: '/skill',
        name: '技术服务',
        component: skill
    }
    ,
    {
        path: '/brand',
        name: '品牌推广/营销',
        component: brand
    },
    {
        path: '/sucase',
        name: '成功案例',
        component: sucase
    },
    {
        path: '/news',
        name: '新闻中心',
        component: news
    },
    {
        path: '/partner',
        name: '合作伙伴',
        component: partner
    },
    {
        path: '/talent',
        name: '人才中心',
        component: talent
    },
    {
        path: '/contact',
        name: '联系我们',
        component: contact
    }
];

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="inner">
                    <div className="header">
                        <div className="gutter-example">
                            <Row gutter={24}>
                                <Col className="gutter-row" span={8}>
                                    <div className="header-left">
                                        <img src={logo}/>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={16}>
                                    <div className="header-right gutter-example">
                                        {routers.map((route, i) => (
                                                <Col className="gutter-row li" span={3} key={i}>
                                                    <Link to={route.path} key={i}>{route.name}</Link>
                                                </Col>
                                            )
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <Switch>
                        {routers.map((route, i) => (
                                <Route key={i} path={route.path} exact component={route.component}/>
                            )
                        )}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Nav;