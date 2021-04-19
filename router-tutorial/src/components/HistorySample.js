import React, {useEffect} from 'react'

const HistorySample = ({history}) => {

    let unblock= false;

    const handleGoBack = () => {
        history.goBack();
    }

    const handleGoHome = () => {
        history.push("/")
    }

    useEffect(() => {
        
        unblock = history.block('정말 떠나실 건가요?');

        return () => {
            if(unblock) {
                unblock();
            }
        }
    })

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    )
}

export default HistorySample
