import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';

const NetworkServices = (props) => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Network Services</Text>
          <Text component="p">
            NetworkServices content
          </Text>
        </TextContent>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} noPadding={true}>
        Panel section content
      </PageSection>
    </div>
  )
}

export default NetworkServices;