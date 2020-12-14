import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageGroup,
  PageBreadcrumb,
  PageNavigation,
  PageSectionVariants,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavList,
  NavItem
} from '@patternfly/react-core';

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageGroup>
          <PageNavigation>
            <Nav aria-label="Nav" variant="tertiary">
              <NavList>
                <NavItem itemId={0} isActive>
                  System Panel
                </NavItem>
                <NavItem itemId={1}>Policy</NavItem>
                <NavItem itemId={2}>Authentication</NavItem>
                <NavItem itemId={3}>Network Services</NavItem>
                <NavItem itemId={4}>Server</NavItem>
              </NavList>
            </Nav>
          </PageNavigation>
          <PageBreadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>Section home</BreadcrumbItem>
              <BreadcrumbItem to="#">Section title</BreadcrumbItem>
              <BreadcrumbItem to="#">Section title</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Section landing
              </BreadcrumbItem>
            </Breadcrumb>
          </PageBreadcrumb>
          <PageSection variant={PageSectionVariants.light}>Grouped section</PageSection>
        </PageGroup>
        <PageSection variant={PageSectionVariants.dark}>Section 1</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section 2</PageSection>
      </Page>
    );
  }
}

export default GroupPage;