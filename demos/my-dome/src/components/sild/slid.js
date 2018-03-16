import React, {Component} from 'react';
import {Carousel} from 'antd';
import Banner1 from '../../image/banner1.png';
import './sild.css';


class slid extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div className="sildes"><img src={Banner1} className="imgs"/></div>
                <div className="sildes"><h3>2</h3></div>
                <div className="sildes"><h3>3</h3></div>
                <div className="sildes"><h3>4</h3></div>
            </Carousel>
        )
    }
}

export default slid;
