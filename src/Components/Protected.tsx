/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

const Protected = ({ children }: { children: any }) => {
  const location = useLocation();
  const teacher = useAppSelector((state) => state.user.teacher);
  return teacher ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default Protected;
