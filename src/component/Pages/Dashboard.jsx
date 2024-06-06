import React from 'react';
import { Col, Row } from 'antd';
import FullNavBar from '../NavBar/FullNavBar.jsx'
import WebFooter from '../WebFooter.jsx'
import './Dashboard.css';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const App = () => (
  <>
    <Row>
      <Col span={24}><FullNavBar/></Col>
    </Row>
    <Row>
      <Col span={24}>
        <div className='TrendingNovDiv'>
          <br/>
          <h4 className='H4'>TRENDING BOOKS</h4><br/>
          <hr className='hr'/>
          <br/>
          {/* <Row className='TrendingNovRow'>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel1.jpeg' alt='novel1'/></Col>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel2.jpeg' alt='novel2'/></Col>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel3.jpeg' alt='novel3'/></Col>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel4.jpeg' alt='novel4'/></Col>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel5.jpeg' alt='novel5'/></Col>
            <Col span={4}><img className='TrendingNovelImg' src='/Images/Novel6.jpeg' alt='novel6'/></Col>
          </Row> */}
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
              <div>
                <img src='/Images/Novel1.jpeg' alt='novel1'/>
              </div>
            </Slider>
          </div>
          <br/>
        </div>
      </Col>
    </Row>
    <br/><br/>
    <Row>
      <div className='categories'>
        <Row className='NovRows'>
          <Col span={8}><img className='NovelImg' src='/Images/1.png' alt='novel1'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/2.png' alt='novel2'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/3.png' alt='novel3'/></Col> 
        </Row>
        <br/><br/>
        <Row className='NovRows'>
          <Col span={8}><img className='NovelImg' src='/Images/4.png' alt='novel1'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/5.png' alt='novel2'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/6.png' alt='novel3'/></Col>
        </Row>
        <br/><br/>
        <Row className='NovRows'>
          <Col span={8}><img className='NovelImg' src='/Images/7.png' alt='novel1'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/8.png' alt='novel2'/></Col>
          <Col span={8}><img className='NovelImg' src='/Images/9.png' alt='novel3'/></Col>
        </Row>
      </div>
    </Row>
    <br/><br/>
    <Row>
      <Col span={24}><WebFooter/></Col>
    </Row>    
  </>
);
export default App;