import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Grid,
  GridItem,
} from '@patternfly/react-core';

import TopGallery from './TopGallery'
import MetricsDashboard from './MetricsDashboard'
import TopUtilization from './TopUtilization'
import PerformanceSummary from './PerformanceSummary'
import PanelSummary from './PanelSummary'
import PanelTable from './PanelTable'

const Home = (props) => {


  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">My Demo Data Center</Text>
          <Text component="p">
            My demo admin dashboard to work as CMDB using Red Hat's Patternfly 
            library + React.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Grid hasGutter={true}>
          <GridItem span={12}>
            <TopGallery />
          </GridItem>
          <GridItem span={8}>
            <MetricsDashboard />
          </GridItem>
          <GridItem span={4}>
            <TopUtilization />
          </GridItem>
          <GridItem span={8}>
            <PanelSummary />
          </GridItem>
          <GridItem span={4} rowSpan={2}>
            <PerformanceSummary />
          </GridItem>
          <GridItem span={8}>
            <PanelTable />
          </GridItem>
        </Grid>
      </PageSection>
    </div>
  )
}

export default Home;