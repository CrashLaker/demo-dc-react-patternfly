import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Progress,
  ProgressSize,
  ProgressMeasureLocation,
  ProgressVariant,
} from '@patternfly/react-core';




const TopUtilization = (props) => {
  const Basic = () => <Progress value={33} title="CentOS 7.7" />
  const FiniteStep = () => <Progress value={2} min={0} max={5} title="CentOS 8.2" measureLocation={ProgressMeasureLocation.top} label="2 of 5" valueText="2 of 5"/>
  const Success = () => <Progress value={100} title="Windows 2019" variant={ProgressVariant.success} />
  const Failure = () => <Progress value={33} title="Windows 2016" variant={ProgressVariant.danger} />
  const Warning = () => <Progress value={90} title="AWS" variant={ProgressVariant.warning} />
  return (
    <div>
      <Card>
        <CardTitle>
          Top Utilized Clusters
        </CardTitle>
        <CardBody>
          {FiniteStep()}
          {Success()}
          {Failure()}
          {Warning()}
          {Basic()}
        </CardBody>
      </Card>
    </div>
  )
}


export default TopUtilization;