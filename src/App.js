import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateUser from "./components/GenerateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenerateUser />} />
        <Route path="/post">
          <Route path=":userId">
            <Route index />
            <Route path="answer"></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
