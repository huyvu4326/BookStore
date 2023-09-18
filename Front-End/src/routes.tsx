import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./component/admin/AdminLayout";
import Dashboard from "./component/admin/Dashboard";
import ListBook from "./component/admin/book/ListBook";
import AddBook from "./component/admin/book/AddBook";
import EditBook from "./component/admin/book/EditBook";
import ListCate from "./component/admin/cate-book/ListCate";
import AddCate from "./component/admin/cate-book/AddCate";
import EditCate from "./component/admin/cate-book/EditCate";
import ListAuthor from "./component/admin/author/ListAuthor";
import AddAuthor from "./component/admin/author/AddAuthor";
import EditAuthor from "./component/admin/author/EditAuthor";

export const router = createBrowserRouter ([
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
            {
                path: "list-book",
                element: <ListBook/>
            },
            {
                path: "add-book",
                element: <AddBook/>
            },
            {
                path: "edit-book/:id",
                element: <EditBook/>
            },
            {
                path: "list-cate-book",
                element: <ListCate/>
            },
            {
                path: "add-cate",
                element: <AddCate/>
            },
            {
                path: ":id/edit-cate",
                element: <EditCate/>
            },
            {
                path: "list-author",
                element: <ListAuthor/>
            },
            {
                path: "add-author",
                element: <AddAuthor/>
            },
            {
                path: "edit-author",
                element: <EditAuthor/>
            },
        ]
    }
])