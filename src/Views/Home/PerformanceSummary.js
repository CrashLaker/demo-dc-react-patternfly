import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,

} from '@patternfly/react-core';

import MySparklineChart from '../../components/UI/Charts/MySparklineChart'

const PerformanceSummary = (props) => {
  return (
    <Card>
      <CardTitle>
        Performance
      </CardTitle>
      <CardBody>
        <MySparklineChart name="CPU Utilization"/>
        <MySparklineChart name="Memory%" color="green"/>
        <MySparklineChart name="Network" color="purple"/>
        <MySparklineChart name="IOPS" color="grey"/>
        <MySparklineChart name="Disk Usage" color="gold"/>
        <MySparklineChart name="BurstBalance" color="orange"/>
        <MySparklineChart name="CPUCreditBalance" color="orange"/>
        <MySparklineChart name="Total Clusters"/>
        <MySparklineChart name="Total Disks"/>
        <MySparklineChart name="Storages" color="purple"/>
      </CardBody>
    </Card>
  )
}

export default PerformanceSummary;