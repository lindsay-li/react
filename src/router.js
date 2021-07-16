import App from './App';
import Dashboard from './views/dashboard'
import About from './views/about'
import Inbox from './views/inbox'


const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox
      }
    ]
  }
]
export default routeConfig