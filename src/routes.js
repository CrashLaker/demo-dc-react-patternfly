

import Home from './Home'
import PageGroupPage from './DemoTemplates/Page/GroupPage'

export default [
  {
    path: '/demo/page/group-page', 
    component: PageGroupPage,
    props: {exact: true}
  },
  {
    path: '/', 
    component: Home,
    props: {}
  },
]