import logo from "./logo.svg";
import "./App.css";
import Locations from "./Locations/Locations";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Home Work</h1>
        <Locations />
      </div>
    </QueryClientProvider>
  );
}

export default App;
