import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';

const Table = (props) => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Table</Text>
          <Text component="p">
            Table content
          </Text>
        </TextContent>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} noPadding={true}>
        Panel section content
      </PageSection>
    </div>
  )
}

export default Table;
