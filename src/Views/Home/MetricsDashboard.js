import React, { useState } from 'react';
import { 
  Tabs, 
  Tab, 
  TabTitleText, 
  Checkbox,
  Card,
  CardBody,
} from '@patternfly/react-core';

import MyAreaChart from '../../components/UI/Charts/MyAreaChart'

const MetricsDashboard = (props) => {
  const [activeTabKey, setActiveTabKey] = useState(0)
  const [isBox, setIsBox] = useState(false)

  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex)
  };

  const toggleBox = checked => {
    setIsBox(checked)
  };

  return (
    <Card style={{backgroundColor: 'white'}}>
      <CardBody>
      <Tabs activeKey={activeTabKey} onSelect={handleTabClick} isBox={isBox}>
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
          <br/>
          <MyAreaChart name="User"/>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
          <br/>
          <MyAreaChart name="Container"/>
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
          <br/>
          <MyAreaChart name="Database"/>
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
          <br/>
          <MyAreaChart name="User"/>
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
          <br/>
          <MyAreaChart name="System"/>
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
          <br/>
          <MyAreaChart name="Network"/>
        </Tab>
      </Tabs>
      <div style={{marginTop: "20px"}}>
        <Checkbox
            label="isBox"
            isChecked={isBox}
            onChange={toggleBox}
            aria-label="show box variation checkbox"
            id="toggle-box"
            name="toggle-box"
          />
      </div>
      </CardBody>
    </Card>
  );
}


export default MetricsDashboard;