import React from 'react';
import { Button, Flex } from 'antd';
import './Allbutton.css'

const App = () => (
  <Flex gap="small" wrap>
    <Button className='button' type="primary">Primary Button</Button>
  </Flex>
);
export default App;