import React, {Component} from 'react';
import Silde from '../../components/sild/slid';
import tLogo3 from '../../image/t-logo3.png';
import WLogo1 from '../../image/Wlogo1.png';
import Banner1 from '../../image/banner1.png';
import Ends from '../../image/end1.png';
import oneSilde from '../../image/oneSilde.png';
import fivelogo1 from '../../image/fivelogo1.png';

import './home.css';

const datas = {
    "two": [{
        "img": WLogo1,
        "h": '高端网站设计'
    }, {
        "img": WLogo1,
        "h": '高端网站设计'
    }, {
        "img": WLogo1,
        "h": '高端网站设计'
    }, {
        "img": WLogo1,
        "h": '高端网站设计'
    }],
    'ther': [{
        "img": tLogo3,
        "h": '交互设计',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '交互设计',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '交互设计',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '交互设计',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '交互设计',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '交互设计',
        "p": '获取更加强大的数据分析水平'
    }],
    "four": [{
        "img": tLogo3,
        "h": '大数据分析',
        "p": '头脑风景交互情景模拟，原型设计'
    }, {
        "img": tLogo3,
        "h": '安全',
        "p": '预防、检测与应对突发问题'
    }, {
        "img": tLogo3,
        "h": '团队',
        "p": '成熟的seo &技术团队'
    }],
    "list1": [{
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }], "list2": [{
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }, {
        "img": oneSilde,
        "h": '汇一资产管理',
        "p": 'APP'
    }]
};
const Li = (e) => (
    <div className="ul">
        {e.map((item, i) => (
            <div className="uli">
                <img src={item.img}/>
                <a>
                    <span>{item.h}</span>
                    <span>{item.p}</span>
                </a>
            </div>
        ))}
    </div>
);
const one = () => (
    <div className="inner">
        <div className="main-one">
            <div className="main-o-top">
                <h3>青锦只是为用户提升品牌价值</h3>
                <p>QINGJIN JUST FOR THE USER TO ENHANCE BRAND VALUS</p>
            </div>
            <div className="main-o-center">
                {Li(datas.list1)}
                {Li(datas.list2)}
            </div>
        </div>
    </div>
);
const two = () => (
    <div className="main-two">
        <div className="inner">
            <div className="main-w-top">
                <h3>探索视觉设计与用户体验的完美结合</h3>
                <p>EXPLORE THE PERFECT COMBINATION OF VISUAL DESIGN & USER EXPERIENCE</p>
            </div>
            <div className="main-w-center">
                {datas.two.map((item, i) => (
                    <div key={i}>
                        <img src={item.img}/>
                        <p>{item.h}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
const ther = () => (
    <div className="main-ther inner">
        <div className="main-t-top">
            <h3>优秀的项目是这样出来的</h3>
            <p>A good project is the way out</p>
            <p>优化产品流程，增强产品的易用性，提高使用者的工作效率，科学地组织生产。</p>
        </div>
        <div className="main-t-center">
            {datas.ther.map((item, i) => (
                <div key={i}>
                    <img src={item.img}/>
                    <p>{item.h}</p>
                    <p>{item.p}</p>
                </div>
            ))}
        </div>
    </div>
);
const four = () => (
    <div className="main-four">
        <div className="inner">
            <div className="main-f-top">
                <h3>我们为您而不断前进</h3>
                <p>WE OFFER YOU ONGOING EXPLORATION PROSPECTS</p>
            </div>
            <div className="main-f-center">
                <div className="main-f-one">
                    <p>杭州青锦网络信息技术有限公司专注于移动客户端的开发，我们的团队拥有年轻但优秀的技术团队，营销团队，专业定向服务客户。在逐渐发展过程中拥有了稳定的客户群，我们向客户提供一系列的标准化在线软件、客户端软件、嵌入式软
                        件和服务器端软件，帮助企业更好的管理、运营自己的微信、移动客户端，从而把传统的营销行为迁移到移动社交工具上。</p>
                </div>
                <div className="main-f-two">
                    <img src={Banner1}/>
                </div>
            </div>
            <div className="main-f-center">
                <div className="main-f-two">
                    <img src={Banner1}/>
                </div>
                <div className="main-f-one">
                    <p>经过多年的发展，目前我们的业务范围已经囊括:微信商城、代运营，定制开发、及行业软文等。我们以更宽广的渠道将企业与客户连接在一起。更好的兼容性、更便捷的操作性、更直观的数据分析，同时提供多范围的多渠道解决方案同时具有其他网络公司没有的优势。</p>
                </div>
            </div>
            <div className="mian-f-end">
                <div className="main-f-ends">
                    {datas.four.map((item, i) => (
                        <div key={i}>
                            <img src={item.img}/>
                            <p>{item.h}</p>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
const five = () => (
    <div className="main-five">
        <div className="main-fives">
            <div className="main-fs-box">
                <div className="main-fs-top">
                    <h3>品牌建设流程</h3>
                    <p>BRAND BUILDING PROCESS</p>
                </div>
                <div className="main-fs-center">
                    <img src={fivelogo1}/>
                </div>
            </div>
        </div>
        <div className="inner">
            <div className="main-fives-end">
                <div className="main-five-top">
                    <h3>我们追求完美的品牌推广与技术服务，更关注我们的伙伴</h3>
                    <p>RAND PROMOTION & TECHNICAL SERVICES, MORECONCERNED ABOUT SATISFACTION</p>
                </div>
                <div className="main-five-center">
                    <span>
                        <img src={Ends}/>
                    </span>
                    <span>
                        <img src={Ends}/>
                    </span>
                    <span>
                        <img src={Ends}/>
                    </span>
                </div>
            </div>
        </div>
    </div>
);


class Home extends Component {
    render() {
        return (
            <div>
                <Silde/>
                {one()}
                {two()}
                {ther()}
                {four()}
                {five()}
            </div>
        )
    }
}

export default Home;