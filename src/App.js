import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";
import { Root } from "./pages/root.jsx";
import { Category } from "./pages/Category.jsx";
import { ErrorPage } from "./pages/error-page.jsx";
import { Home } from "./pages/Home.jsx";
import { Recipe } from "./pages/Recipe.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route basename="/my_food_project">
          <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
