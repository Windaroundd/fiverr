import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Layout from "./HOC/Layout";
import ShowPage from "./ShowPage/ShowPage";
import TitlePage from "./TitlePage/TitlePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import NotfoundPage from "./Pages/NotfoundPage/NotfoundPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          ></Route>
          <Route
            path="/job"
            element={
              <Layout>
                <ShowPage />
              </Layout>
            }
          ></Route>
          <Route
            path="/title"
            element={
              <Layout>
                <TitlePage />
              </Layout>
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <RegisterPage />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
