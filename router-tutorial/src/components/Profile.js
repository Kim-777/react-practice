import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    wabbang: {
        name: '김예찬',
        description: '리액트를 잘하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '동해번쩍 서해번쩍'
    }
};

const Profile = ({ match }) => {

    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <div>오긴오나??</div>
            <WithRouterSample />
        </div>
    )
}

export default Profile
