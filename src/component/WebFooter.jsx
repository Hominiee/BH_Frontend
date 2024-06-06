import React from "react";
import './WebFooter.css';
import { Col, Row } from 'antd';

function Footer() {   
    return ( 
        <div>
        <div className='footerBackground'>
            <Row className="row">
                <Col span={24}></Col>
            </Row>
            <Row className="row">
                <Col span={24}><hr className="hr1"/></Col>
            </Row>
            <Row className="row">
                <Col span={7}>
                    <Row className="row">
                        <Col span={24}><h3 className="h3">THE BOOK HEAVEN</h3></Col>
                    </Row>
                    <Row className="row">
                        <Col span={24}><p className="pp">Welcome to Book Heaven, your ultimate online bookshop! We offer a vast selection of books across various genres, from bestsellers to rare finds. Enjoy seamless browsing, secure shopping, and fast delivery. Our curated collection ensures you'll find your next great read with ease. Whether it's fiction, non-fiction, or children's books, Book Heaven has something for every reader. Shop now!</p></Col>
                    </Row>
                </Col>
                <Col span={1}></Col>
                <Col span={8}>
                    <Row className="row">
                        <Col span={24}><h3 className="h3">CONTACT US</h3></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/email.png' alt='email'/></Col>
                        <Col span={18}><p className="p">info@bookheavenstore.com</p></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/phone.png' alt='phone'/></Col>
                        <Col span={18}><p className="p">(555) 123-4567</p></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/location.png' alt='location'/></Col>
                        <Col span={18}><p className="p">123 Book Street,<br/>Literary Town, BK 98765,<br/>United States</p></Col>
                    </Row>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                    <Row className="row">
                        <Col span={24}><h3 className="h3">SOCIAL MEDIA</h3></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/fb.png' alt='fb'/></Col>
                        <Col span={18}><p className="p">facebook.com/BookHeavenStore</p></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/phone.png' alt='instagram'/></Col>
                        <Col span={18}><p className="p">instagram.com/BookHeavenStore</p></Col>
                    </Row>
                    <Row className="row">
                        <Col span={6}><img className='contactImg' src='/Images/twitter.png' alt='twitter'/></Col>
                        <Col span={18}><p className="p">twitter.com/BookHeavenStore</p></Col>
                    </Row>
                </Col>
            </Row>
            <Row className="row">
                <Col span={24}><hr className="hr1"/></Col>
            </Row>
            <Row className="row">
                <Col span={12}><p className="bootom">Terms and Condition</p></Col>
                <Col span={1}>col-12</Col>
                <Col span={11}><p className="bootom">Privacy Policy</p></Col>
            </Row>
        </div>
    </div>
    );
}



export default Footer;