import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/landing-page";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Helmet>
            <title>DavaDwi - Web Profile</title>
            <meta charset="UTF-8" />
            <link
              rel="icon"
              type="image/svg+xml"
              href="/Picsart_23-09-06_09-53-54-196.png"
            />
            <meta
              name="description"
              content="This web profile project is a digital platform designed with the aim of introducing and promoting a personal profile to the online world."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
