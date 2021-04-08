import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Profiles from './page/Profiles';
import HistorySample from './page/HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({location}) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
