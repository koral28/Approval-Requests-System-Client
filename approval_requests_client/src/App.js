import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./LayoutComp/Navbar";
import Dashboard from "./DashBoardComp/Dashboard";
import CreateRequest from "./RequestComp/CreateRequest";
import ConfirmationEmail from "./RequestComp/ConfirmationEmail";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: "url(pexels-photo-373076.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " bottom right",
          backgroundSize: "cover",
          width: "100%",
          height: "1000px",
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateRequest} />
          <Route path="/confirmationEmail" component={ConfirmationEmail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
