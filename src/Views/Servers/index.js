import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';

const Servers = (props) => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Servers</Text>
          <Text component="p">
            Servers content
          </Text>
        </TextContent>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} noPadding={true}>
        Panel section content
      </PageSection>
    </div>
  )
}

export default Servers;
