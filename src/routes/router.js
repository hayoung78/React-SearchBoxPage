import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/layouts";
import Main from "../pages/main/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
        ],
    },
]);
export default router;
