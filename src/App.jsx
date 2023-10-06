import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import UsContacts from "./components/UsContacts.jsx";
import AllContacts from "./components/Allcontacts.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="allcontacts" element={<AllContacts />} />
          <Route path="uscontacts" element={<UsContacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
