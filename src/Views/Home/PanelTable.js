import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,

} from '@patternfly/react-core';

import MyTable from './MyTable'

const PanelTable = (props) => {

  return (
    <Card>
      <CardTitle>
        Recently Provisioned EC2
      </CardTitle>
      <CardBody>
        <MyTable/>
      </CardBody>
    </Card>
  )
}


export default PanelTable;

