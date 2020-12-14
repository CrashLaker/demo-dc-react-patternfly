import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

import imgBrand from '../assets/datacenter-logo.png'

import Logo from '../components/UI/Logo'


import Header from './Header'
import MyNotificationDrawer from './NotificationDrawer'
import MySidebar from './Sidebar'

import HomeView from '../Views/Home'

const DashboardView = React.lazy(() => {
  return import('../Views/Dashboard')
})
const TableView = React.lazy(() => {
  return import('../Views/Table')
})
const NetworkServicesView = React.lazy(() => {
  return import('../Views/NetworkServices')
})
const ServersView = React.lazy(() => {
  return import('../Views/Servers')
})

class BasicNotificationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      isDrawerExpanded: false,
      isUnreadMap: {
        "notification-1": true,
        "notification-2": true
      },
      showNotifications: true,
      isActionsMenuOpen: null
    };
    this.onDropdownToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };
    this.onDropdownSelect = event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };
    this.onKebabDropdownToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };
    this.onKebabDropdownSelect = event => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    };
    this.onNavSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
    
    this.onCloseNotificationDrawer = () => {
      this.setState(prevState => {
        return {
          isDrawerExpanded: !prevState.isDrawerExpanded
        }
      });
    };
    
    this.onToggle = (id, isOpen) => {
      this.setState({
        isActionsMenuOpen: { [id]: isOpen }
      });
    };
    
    this.onSelect = event => {
      this.setState({
        isActionsMenuOpen: null
      });
    };
    
    this.onListItemClick = (id) => {
      this.setState(prevState => {
        if (!prevState.isUnreadMap) return;
        prevState.isUnreadMap[id] = false;
        return {
          isUnreadMap: prevState.isUnreadMap
        }
      });
    }
    
    this.getNumberUnread = () => {
      const { isUnreadMap } = this.state
      if (isUnreadMap === null) return 0;
      return Object.keys(isUnreadMap).reduce((count, id) => {
        return isUnreadMap[id] ? count + 1 : count;
      }, 0);
    }
    
    this.markAllRead = () => {
      this.setState({
        isUnreadMap: null
      });
    }
    
    this.showNotifications = (showNotifications) => {
      this.setState({
        isUnreadMap: null,
        showNotifications: showNotifications
      });
    }
  }
  render() {
    const { 
      isDropdownOpen, 
      isKebabDropdownOpen, 
      activeItem, 
      res, 
      isDrawerExpanded,
      isActionsMenuOpen,
      isUnreadMap,
      showNotifications
    } = this.state;
    const DropdownPosition = {
      right: 'right'
    }
    const DropdownDirection = {
      up: 'up',
      down: 'down'
    }
    const EmptyStateVariant = {
      full: 'full'
    }

    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;
    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section landing
        </BreadcrumbItem>
      </Breadcrumb>
    );
    
    const drawerContent = "Panel content";
  
    console.log(this)
    
    return (
      <React.Fragment>
        <Page
          header={<Header onCloseNotificationDrawer={this.onCloseNotificationDrawer}
            />}
          sidebar={<MySidebar {...this.props}/>}
          isManagedSidebar
          notificationDrawer={<MyNotificationDrawer
                                onCloseNotificationDrawer={this.onCloseNotificationDrawer}/>}
          isNotificationDrawerExpanded={isDrawerExpanded}
          skipToContent={PageSkipToContent}
          breadcrumb={PageBreadcrumb}
          mainContainerId={pageId}
        >
          <Suspense fallback={<p>loading...</p>}>
            <Switch>
              <Route path="/home" exact component={HomeView}/>
              <Route path="/dashboard" exact render={(props) => <DashboardView {...props}/>}/>
              <Route path="/table" exact render={(props) => <TableView {...props}/>}/>
              <Route path="/network-services" exact render={(props) => <NetworkServicesView {...props}/>}/>
              <Route path="/servers" exact render={(props) => <ServersView {...props}/>}/>
              <Route path="/" component={HomeView}/>
            </Switch>
          </Suspense>
        </Page>
      </React.Fragment>
    );
  }
}

export default withRouter(BasicNotificationDrawer);