import Main from "./pages/MainPage";
import Auth from "./pages/AuthPage";
import { MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, ADMIN_ROUTE, PRODUCT_ITEM_ROUTE, PROFIL_ROUTE, CONSOLIDATION_ROUTER, PACKAGE_CREATE_ROUTER, WAYBILL_ROUTER, WAYBILL_PAGE_ROUTER} from "./utils/consts";
import ProductListPage from "./pages/ProductListPage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import ConsolidationPage from "./pages/ConsolidationPage";
import CreatePackagePage from "./pages/CreatePackagePage";
import CarWayBill from "./pages/CarWayBill";
import Waybill from "./pages/WayBill";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: WAYBILL_ROUTER + '/:id',
        Component:  CarWayBill 
    },
    {
        path: WAYBILL_PAGE_ROUTER,
        Component:  Waybill 
    },
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PACKAGE_CREATE_ROUTER,
        Component: CreatePackagePage
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