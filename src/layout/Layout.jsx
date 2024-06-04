import { Suspense } from "react";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Error from "../pages/404/Error.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";

export default function Layout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
