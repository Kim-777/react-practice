import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home'; 
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

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
          <Link to="/info">인포</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
        <li>
          <Link to="/with">위드라우터</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={["/about", "/info"]} component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          <Route
            render={({location}) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다 : </h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>

      </div>
    </div>
  );
}

export default App;
