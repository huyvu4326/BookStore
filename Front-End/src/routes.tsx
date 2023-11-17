import { Navigate, createBrowserRouter } from 'react-router-dom';

import AddBook from './component/admin/book/AddBook';
import AddCate from './component/admin/cate-book/AddCate';
import AdminLayout from './component/admin/AdminLayout';
import Cart from './component/client/Cart';
import CateBook from './component/client/CateBook';
import Dashboard from './component/admin/Dashboard';
import EditBook from './component/admin/book/EditBook';
import EditCate from './component/admin/cate-book/EditCate';
import ForgotPassword from './component/user/forgotPassword';
import ListBook from './component/admin/book/ListBook';
import ListCate from './component/admin/cate-book/ListCate';
import ProductDetail from './component/client/ProductDetail';
import ProductList from './component/client/ProductList';
import ResetPassword from './component/user/resetPassword';
import Sidebar from './component/client/Sidebar';
import SignIn from './component/user/SignIn';
import SignUp from './component/user/SignUp';
import UserProfile from './component/client/UserProfile';
import WebsiteLayout from './component/client/WebsiteLayout';

const AdminRoute = ({ element }) => {
	const accessToken = localStorage.getItem('user');
	const role = accessToken ? JSON.parse(accessToken).user.role : null;
	if (role === 'admin') {
	  return element;
	} else {
	  return <Navigate to="/" />;
	}
  };

export const router = createBrowserRouter([
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/forgotPassword',
		element: <ForgotPassword />,
	},
	{
		path: '/resetPassword',
		element: <ResetPassword />,
	},
	{
		path: '/profile',
		element: <UserProfile />,
	},
	{
		path: '/',
		element: <WebsiteLayout />,
		children: [
			{ index: true, element: <Navigate to="home" /> },
			{
				path: 'home',
				element: (
					<>
						<Sidebar />
						<ProductList />
					</>
				),
			},
			{
				path: 'books/:id/detail',
				element: <ProductDetail />,
			},
			{
				path: ':userId/cart',
				element: <Cart />,
			},
			{
				path: 'category',
				element: <CateBook />,
			},
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{ index: true, element: <Navigate to="dashboard" /> },
			{
				path: 'dashboard',
				element: <AdminRoute element={<Dashboard />} />,
			},
			{
				path: 'list-book',
				element: <AdminRoute element={<ListBook />} />,
			},
			{
				path: 'add-book',
				element: <AdminRoute element={<AddBook />} />,
			},
			{
				path: 'edit-book/:id',
				element: <AdminRoute element={<EditBook />} />,
			},
			{
				path: 'list-cate-book',
				element: <AdminRoute element={<ListCate />} />,
			},
			{
				path: 'add-cate',
				element: <AdminRoute element={<AddCate />} />,
			},
			{
				path: ':id/edit-cate',
				element: <AdminRoute element={<EditCate />} />,
			},
		],
	},
]);
