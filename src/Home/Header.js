import React, { useState } from 'react';
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
  PageHeaderToolsItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
//import imgBrand from '@patternfly/react-core/src/components/Brand/examples/pfLogo.svg';
//import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

//import imgBrand from '../assets/datacenter-logo.png'
import imgAvatar from '../assets/avatar.png'

import Logo from '../components/UI/Logo'

import MyNotificationBadge from '../components/UI/MyNotificationBadge'

const Header = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false)
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false)

  const getNumberUnread = () => {
    let isUnreadMap = {
      'notification-1': true,
      'notification-2': true
    }
    if (isUnreadMap === null) return 0;
    return Object.keys(isUnreadMap).reduce((count, id) => {
      return isUnreadMap[id] ? count + 1 : count;
    }, 0);
  }

  const onDropdownToggle = isDropdownOpen => {
    setIsDropdownOpen(isDropdownOpen)
  };
  const onDropdownSelect = event => {
    setIsDropdownOpen(!isDropdownOpen)
  };
  const onKebabDropdownSelect = event => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen)
  };
  const onKebabDropdownToggle = isKebabDropdownOpen => {
    setIsKebabDropdownOpen(isKebabDropdownOpen)
  };

  const kebabDropdownItems = [
    <DropdownItem>
      <CogIcon /> Settings
    </DropdownItem>,
    <DropdownItem>
      <HelpIcon /> Help
    </DropdownItem>
  ];
  const userDropdownItems = [
    <DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>
  ];
  const headerTools = (
    <PageHeaderTools>
      <PageHeaderToolsItem visibility={{default: 'visible'}} isSelected={isDrawerExpanded}>
        {/*<NotificationBadge variant={getNumberUnread() === 0 ? 'read' : 'unread'} 
                          onClick={props.onCloseNotificationDrawer} aria-label="Notifications">
          <BellIcon />
          </NotificationBadge>*/}
        <MyNotificationBadge onToggle={props.onCloseNotificationDrawer}/>
      </PageHeaderToolsItem>
      <PageHeaderToolsGroup
        visibility={{
          default: 'hidden',
          lg: 'visible'
        }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
      >
        <PageHeaderToolsItem>
          <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
            <CogIcon />
          </Button>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
          <Button aria-label="Help actions" variant={ButtonVariant.plain}>
            <HelpIcon />
          </Button>
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem
          visibility={{
            lg: 'hidden'
          }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
        >
          <Dropdown
            isPlain
            position="right"
            onSelect={onKebabDropdownSelect}
            toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
            isOpen={isKebabDropdownOpen}
            dropdownItems={kebabDropdownItems}
          />
        </PageHeaderToolsItem>
        <PageHeaderToolsItem
          visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
        >
          <Dropdown
            isPlain
            position="right"
            onSelect={onDropdownSelect}
            isOpen={isDropdownOpen}
            toggle={<DropdownToggle onToggle={onDropdownToggle}>Carlos Aguni</DropdownToggle>}
            dropdownItems={userDropdownItems}
          />
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <Avatar src={imgAvatar} alt="Avatar image" />
    </PageHeaderTools>
  );
  return (
    <PageHeader 
            logo={<Logo />}
            headerTools={headerTools} 
            showNavToggle />
  );
}

export default Header;