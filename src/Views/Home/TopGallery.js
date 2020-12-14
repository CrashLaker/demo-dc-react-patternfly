import React from 'react';
import {
  Gallery,
  GalleryItem,
} from '@patternfly/react-core';

import MyCard from '../../components/UI/MyCard'
import LoadIcon from '../../utils/LoadIcon';

const TopGallery = (props) => {
  const GalleryItems = [
    {
      title: [LoadIcon('shield'), " 3 Data Centers"],
      badges: [
        { icon: 'warning', text: '' },
        { icon: 'error', text: '3' },
        { icon: 'check', text: '3' },
      ]
    },
    {
      title: [LoadIcon('shield'), " 5 Clusters"],
      badges: [
        { icon: 'check', text: '' },
      ]
    },
    {
      title: [LoadIcon('shield'), " 50 Hosts"],
      badges: [
        { icon: 'error', text: '1' },
        { icon: 'warning', text: '15' },
      ]
    },
    {
      title: [LoadIcon('shield'), " 5 Storage Domains"],
      badges: [
        { icon: 'error', text: '1' },
      ]
    },
    {
      title: [LoadIcon('shield'), " 100 Virtual Machines"],
      badges: [
        { icon: 'check', text: '' },
      ]
    },
    {
      title: [LoadIcon('shield'), " 100 Networks"],
      badges: [
        { icon: 'check', text: '' },
      ]
    },
  ]

  const GalleryItemsElems = GalleryItems.map((elem, idx) => {
    return (
      <GalleryItem key={idx}>
        <MyCard meta={elem}/>
      </GalleryItem>
    )
  })

  return (
    <Gallery hasGutter className={'TopGalleryCards'}>
      {GalleryItemsElems}
    </Gallery>
  )
}

export default TopGallery;