import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';

const Dashboard = (props) => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Dashboard</Text>
          <Text component="p">
            Dashboard content
          </Text>
        </TextContent>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} noPadding={true}>
        Panel section content
      </PageSection>
    </div>
  )
}

export default Dashboard;