import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NotificationBadge,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Title,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  ContextSelectorItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
//import imgBrand from '@patternfly/react-core/src/components/Brand/examples/pfLogo.svg';

const MySidebar = (props) => {
  const [activeItem, setActiveItem] = useState(0)  

  const onNavSelect = result => {
    setActiveItem(result.itemId)
    console.log(result)
    const toroute = result.event.target.outerText.toLowerCase().replace(/\s+/g, '-')
    console.log(toroute)
    props.history.push(`/${toroute}`)
  };

  //let routeList = 
  const navList = [
    'Home',
    'Dashboard', 
    'Table',
    'Network Services',
    'Servers',
    'demo/page/group-page'
  ]

  const navItems = navList.map((e,idx) => {
    return (<NavItem key={idx} itemId={idx} isActive={activeItem === idx}>
      {e}
    </NavItem>)
  })

  console.log(navItems)

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        {navItems}
      </NavList>
    </Nav>
  );

    //const Sidebar = <PageSidebar nav={PageNav} />;

    return <PageSidebar nav={PageNav}/>

}


export default MySidebar;