import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, refreshAccessToken } from "../../store/Slice/authSlice";

/**
 * Protects routes that require login.
 * - If user has valid access token (via cookie) → home.
 * - If no access token but has refresh token → call refresh API, then home.
 * - Otherwise → login page.
 */
const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userData, status, loading } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      if (userData && status) {
        setChecked(true);
        return;
      }
      // 1) Try with current access token (cookie)
      let result = await dispatch(getCurrentUser({ silent: true }))
        .unwrap()
        .catch(() => null);

      if (result) {
        setChecked(true);
        return;
      }

      // 2) No valid access token: try refresh (sends refreshToken cookie)
      const refreshResult = await dispatch(refreshAccessToken({ silent: true }))
        .unwrap()
        .catch(() => null);

      if (refreshResult) {
        result = await dispatch(getCurrentUser())
          .unwrap()
          .catch(() => null);
      }

      setChecked(true);
    };
    verifyAuth();
  }, [dispatch]);

  if (status && userData) {
    return <Outlet />;
  }

  if (!checked || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Checking access…</p>
      </div>
    );
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default ProtectedRoute;
