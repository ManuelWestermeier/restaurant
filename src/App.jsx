import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" />
      <Route path="/kontakt" />
      <Route path="/impressum" />
      <Route path="/datenschutz" />
      <Route path="/" />
      <Route path="*" />
    </BrowserRouter>
  );
}
export default App;
