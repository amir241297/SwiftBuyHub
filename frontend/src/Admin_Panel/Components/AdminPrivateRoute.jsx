import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.isAuth);

  if (!isAuth) {
    return <Navigate to={"/adminlogin"} />;
  }

  console.log(isAuth); // This line will never be executed as it comes after the return statement

  return children;
};

export default AdminPrivateRoute;