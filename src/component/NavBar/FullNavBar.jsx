import React from 'react';
import './FullNavBar.css'
import { Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import AllButton from '../AllButton'

const renderTitle = (title) => (
  <span>
    {title}
    <a style={{float: 'right',}} href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
      more
    </a>
  </span>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{display: 'flex', justifyContent: 'space-between',}}>
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

const App = () => (
  <div>
    <div>
    <Row>
      <Col span={3} ><img className='logo' src='/Images/BH_logo.png' alt='logo'/></Col>
      <Col span={13}><AutoComplete className='searchBar' popupClassName="certain-category-search-dropdown" popupMatchSelectWidth={500} style={{width: 450,}} options={options} size="large">
                      <Input.Search size="large" placeholder="Search here" />
                    </AutoComplete>
      </Col>
      <Col span={4}><AllButton/></Col>
      <Col span={4}><AllButton/></Col>
    </Row>
    </div> 
  </div>
);


export default App;