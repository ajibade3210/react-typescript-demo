import "./App.css";
import { Button } from "./components/Button";
import { Counters } from "./components/class/Counters";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserAuth } from "./components/context/UserAuth";
import { UserContextProvider } from "./components/context/UserContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
  <div className="App">
    <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>

    <UserContextProvider>
      <UserAuth/>
    </UserContextProvider>

    <MutableRef/>
    <DomRef/>
    <Counters message="We are Counting Now"/>

    </div>
  );
}

export default App;
