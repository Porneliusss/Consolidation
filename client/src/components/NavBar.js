import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFIL_ROUTE } from '../utils/consts';

const NavBar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate(MAIN_ROUTE)
    }

    return (
        <Navbar style={{ backgroundColor: '#32a852' }} data-bs-theme="dark">
            <Container>
                <NavLink
                    style={{
                        color: "white", textDecoration: "none"
                    }}
                    to={MAIN_ROUTE}
                >
                    <div className='d-flex'>
                        <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                        </svg>
                        <p className='ms-2'>
                            Consalidation
                        </p>
                    </div>
                </NavLink>
                {localStorage.getItem('isAuth') ?
                    <Nav className="ml-auto">
                        {localStorage.getItem('userRole') === 'ADMIN' ?
                            < Button
                                className="me-2"
                                variant='outlined-primary'
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ
                            </Button>
                            :
                            <></>
                        }
                        < Button
                            className="me-2"
                            variant='outlined-primary'
                            onClick={() => navigate(PROFIL_ROUTE + '/' + localStorage.getItem('userId'))}
                        >
                            Профиль
                        </Button>
                        <Button
                            variant='outlined-primary'
                            onClick={() => logout()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant='outlined-primary'
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    );
};

export default observer(NavBar)
