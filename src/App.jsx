import UsersList from "./components/UsersList";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <UsersList />
      </div>
    </GlobalProvider>
  );
}

export default App;
