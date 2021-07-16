//Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from '../components/loading/index';

let Dashboard  = Loadable({
  loader: () => import('../views/dashboard'),
	loading: Loading,
})
let About  = Loadable({
  loader: () => import('../views/about'),
	loading: Loading,
})
let Inbox  = Loadable({
  loader: () => import('../views/inbox'),
	loading: Loading,
})

let BasicRoute = {
  Dashboard,
  About,
  Inbox
}


export default BasicRoute;