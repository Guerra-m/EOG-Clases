import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import HomePage from "../pages/HomePage";
import VideosPage from "../pages/VideosPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout general */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />

        </Route>
        </Routes>
    </BrowserRouter>
  )
}