import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
