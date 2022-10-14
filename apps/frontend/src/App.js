import './App.css';
import { Switch, Route } from 'react'

function App() {
  return (
    <Switch>
      <Route path="/" component={ home }/>

    </Switch>
  );
}

export default App;
