import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./screens/Data";
import Blog from "./screens/Blog";
import SignUp from "./screens/SignUp";
import Pricing from "./screens/Pricing";
import Checkout from "./screens/Checkout";
import ELearning from "./screens/ELearning";
import SignInSide from "./screens/SignInSide";
import TopCourses from "./screens/TopCourses";
import UniversityData from "./screens/UniversityData";
import UpcommingExams from "./screens/UpcommingExams";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/Data" component={Data} />
        <Route path="/" exact component={Blog} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/eLearning" component={ELearning} />
        <Route path="/Exams" component={UpcommingExams} />
        <Route path="/SignInSide" component={SignInSide} />
        <Route path="/TopCourses" component={TopCourses} />
        <Route path="/UniversityData" component={UniversityData} />
      </div>
    </Router>
  );
}

export default App;
