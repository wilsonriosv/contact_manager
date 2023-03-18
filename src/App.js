import logo from './logo.svg';
import './App.css';
import { ContactListComponent } from './components/container/contact_list';

function App() {
  return (
    <div className="App">
        <h1>Contact Manager</h1>
        <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
