import { Outlet} from 'react-router-dom'
import NavbarPanel from './NavbarPanel'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../Store/store'

function RouteLayout() {
  return (
    <Provider store={store}>
        <NavbarPanel />
        <Container>
            <Outlet />
        </Container>
    </Provider>
  )
}

export default RouteLayout