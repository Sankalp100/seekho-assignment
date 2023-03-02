import { Button, Result } from 'antd';

function SubmitPage({correctAns, score}){
    return(
        <div>
        <Result
        status="success"
        title="You have Successfully submited the Assessment"
        // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={
            <div>
                <p>Question Asked: 3</p>
                <p>Question Correct: {correctAns}</p>
                <p>Your score: {score}</p>
            </div>            
        }
      /></div>
    )
}

export default SubmitPage