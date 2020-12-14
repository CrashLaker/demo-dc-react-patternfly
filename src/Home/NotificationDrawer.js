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
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

const MyNotificationDrawer = (props) => {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(null)
  const [showNotifications, setShowNotifications] = useState(true)
  const [isUnreadMap, setIsUnreadMap] = useState({
    'notification-1': true,
    'notification-2': true,
  })
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

  const onToggle = (id, isOpen) => {
    setIsActionsMenuOpen({ [id]: isOpen })
  };
  
  const onSelect = event => {
    setIsActionsMenuOpen(null)
  };

  const onListItemClick = (id) => {
    if (!isUnreadMap) return
    setIsUnreadMap({
      ...isUnreadMap,
      [id]: false,
    })
  }

  const getNumberUnread = () => {
    if (isUnreadMap === null) return 0;
    return Object.keys(isUnreadMap).reduce((count, id) => {
      return isUnreadMap[id] ? count + 1 : count;
    }, 0);
  }

  const markAllRead = () => {
    setIsUnreadMap(null)
  }
  
  const fshowNotifications = (showNotifications) => {
    setIsUnreadMap(null)
    setShowNotifications(showNotifications)
  }

  const notificationDrawerActions = [
    <DropdownItem key="markAllRead" onClick={markAllRead} component="button">
      Mark all read
    </DropdownItem>,
    <DropdownItem key="clearAll" onClick={() => fshowNotifications(false)} component="button">
      Clear all
    </DropdownItem>,
    <DropdownItem key="unclearLast" onClick={() => fshowNotifications(true)}component="button">
      Unclear last
    </DropdownItem>,
    <DropdownItem key="settings" component="button">
      Settings
    </DropdownItem>,
  ];
  
  const notificationDrawerDropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>
  ];

  return (
    <NotificationDrawer>
      <NotificationDrawerHeader count={getNumberUnread()} 
                                onClose={props.onCloseNotificationDrawer}>
        <Dropdown
          onSelect={onSelect}
          toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-0', isOpen)} id="toggle-id-0" />}
          isOpen={isActionsMenuOpen && isActionsMenuOpen['toggle-id-0']}
          isPlain
          dropdownItems={notificationDrawerActions}
          id="notification-0"
          position={DropdownPosition.right}
        />
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {showNotifications && (
          <NotificationDrawerList>
            <NotificationDrawerListItem variant="info" onClick={() => onListItemClick("notification-1")} isRead={isUnreadMap === null || !isUnreadMap["notification-1"]}>
              <NotificationDrawerListItemHeader
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-1', isOpen)} id="toggle-id-1" />}
                  isOpen={isActionsMenuOpen && isActionsMenuOpen['toggle-id-1']}
                  isPlain
                  dropdownItems={notificationDrawerDropdownItems}
                  id="notification-1"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="5 minutes ago">
                This is an info notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger" onClick={() => onListItemClick("notification-2")} isRead={isUnreadMap === null || !isUnreadMap["notification-2"]}>
              <NotificationDrawerListItemHeader
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                srTitle="Danger notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-2', isOpen)} id="toggle-id-2" />}
                  isOpen={isActionsMenuOpen && isActionsMenuOpen['toggle-id-2']}
                  isPlain
                  dropdownItems={notificationDrawerDropdownItems}
                  id="notification-2"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="warning" onClick={() => onListItemClick("notification-3")} isRead={isUnreadMap === null || !isUnreadMap["notification-3"]}>
              <NotificationDrawerListItemHeader
                variant="warning"
                title="Read warning notification title"
                srTitle="Warning notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-3', isOpen)} id="toggle-id-3" />}
                  isOpen={isActionsMenuOpen && isActionsMenuOpen['toggle-id-3']}
                  isPlain
                  dropdownItems={notificationDrawerDropdownItems}
                  id="notification-3"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="20 minutes ago">
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="success" onClick={() => onListItemClick("notification-4")} isRead={isUnreadMap === null || !isUnreadMap["notification-4"]}>
              <NotificationDrawerListItemHeader
                variant="success"
                title="Read success notification title"
                srTitle="Success notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  direction={DropdownDirection.up}
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-4', isOpen)} id="toggle-id-4" />}
                  isOpen={isActionsMenuOpen && isActionsMenuOpen['toggle-id-4']}
                  isPlain
                  dropdownItems={notificationDrawerDropdownItems}
                  id="notification-4"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        )}
        {!showNotifications && (
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={SearchIcon} />
            <Title headingLevel="h2" size="lg">
              No alerts found
            </Title>
            <EmptyStateBody>
              There are currently no alerts. There may be silenced critical alerts however.
            </EmptyStateBody>
            <EmptyStatePrimary>
              <Button variant="link">Action</Button>
            </EmptyStatePrimary>
          </EmptyState>
        )}
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
}


export default MyNotificationDrawer;