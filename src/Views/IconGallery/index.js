import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Grid,
  GridItem,
  Gallery,
  GalleryItem,
} from '@patternfly/react-core'

import * as PatternflyIcons from '@patternfly/react-icons/dist/js/icons/'

const IconGallery = (props) => {

  const GalleryItemsElems = Object.keys(PatternflyIcons)
                                  .filter(d => typeof(PatternflyIcons[d]) == 'function')
                                  .map((elem,idx) => {
    const Comp = PatternflyIcons[elem]
    return (
      <div>
        {elem}
        <Comp style={{height: '50px', width: '50px'}} />
      </div>
    )
  })


  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Icon Gallery</Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Grid hasGutter={true}>
          <GridItem span={12} style={{columnCount: 4}}>
            {GalleryItemsElems}
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  )
}


export default IconGallery;