import React from 'react'
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';

const Profiles = () => {


    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/wabbang">wabbang</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
                <li>
                    <Link to="/profiles/gg">gg</Link>
                </li>
            </ul>
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            
        </div>
    )
}



export default Profiles
