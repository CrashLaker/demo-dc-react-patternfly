import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Grid,
  GridItem,
  Text,
} from '@patternfly/react-core';

import MyDonutUtilizationChart from '../../components/UI/Charts/MyDonutUtilizationChart'
//import MySparklineBarChart from '../../components/UI/Charts/MySparklineBarChart'
import MySparklineBarChart from './MySparklineBarChart'
import LoadIcon from '../../utils/LoadIcon'


const PanelSummary = (props) => {

  return (
    <Grid hasGutter={true}>
      <GridItem span={4}>
        <Card style={{overflow: 'hidden'}}>
          <CardTitle>
            Critical Server Events
          </CardTitle>
          <CardBody>
            <Grid>
              <GridItem span={7} style={{display: 'flex'}}>
                <Text component='h2' style={{fontSize: '27px'}}>
                  625
                </Text>
                <Text component='small' style={{paddingLeft: '2px', paddingTop: '18px'}}>
                  {LoadIcon('ArrowUpIcon', {
                    style: {width: '10px'},
                    variant: 'danger',
                    fill: '#A30000'
                  })}
                  {' '}
                  Up 11%
                </Text>
              </GridItem>
              <GridItem span={5} rowSpan={2}>
                <MySparklineBarChart/>
              </GridItem>
              <GridItem span={7}>
                <Text component='small'>
                  Critical Server Events
                </Text>
              </GridItem>
            </Grid>
          </CardBody>
          <CardFooter>
            <Button variant="link" icon={LoadIcon('FlagIcon')}>
              See more critical events
            </Button>
          </CardFooter>
        </Card>
      </GridItem> 
      <GridItem span={8}>
        <Card>
          <CardTitle>
            Storage Utilization
          </CardTitle>
          <CardBody>
            <MyDonutUtilizationChart />
          </CardBody>
          <CardFooter>
            <Button variant="link" icon={LoadIcon('StorageDomainIcon')}>
              Check Other Storages
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  )
}


export default PanelSummary;
