import Main from "./pages/MainPage";
import Auth from "./pages/AuthPage";
import { MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, ADMIN_ROUTE, PRODUCT_ITEM_ROUTE, PROFIL_ROUTE, CONSOLIDATION_ROUTER } from "./utils/consts";
import ProductListPage from "./pages/ProductListPage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import ConsolidationPage from "./pages/ConsolidationPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PROFIL_ROUTE + '/:id',
        Component: Profile
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductListPage
    },
    {
        path: CONSOLIDATION_ROUTER,
        Component: ConsolidationPage
    },
    {
        path: PRODUCT_ITEM_ROUTE + '/:id',
        Component: ProductPage
    }
];