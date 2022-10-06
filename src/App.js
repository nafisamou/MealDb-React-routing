import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },

        {
          path: "meals",

          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: "/meal/:mealId",
          loader: async ({ params }) => {
            console.log(params.mealId)
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
            );
          },
          element: <MealDetails></MealDetails>,
        },
      ],
    },

    { path: "about", element: <About></About> },
    { path: "*", element: <div className="text-red-500">This route not found: 404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
