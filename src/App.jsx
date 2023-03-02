import { useState } from "react";
import { Card, Row, Col, Button, Radio, Space, Layout } from "antd";
import "./styles.css";
import SubmitPage from "./SubmitPage";
import questionLogo from "./assets/questionImg.png";
import reviewLogo from "./assets/review.webp";
import data from './data'

function App() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [score, setScore] = useState(0);

  

  const onSelectOption = (e) => {
    let arr = [...answers];
    arr[count] = e.target.value;
    setAnswers(arr);
  };

  const handleSubmit = () => {
    setSubmit(true);
    let correctAns = 0;
    data.map((e) => {
      if (answers.includes(e.ans)) {
        correctAns++;
      }
    });
    let score = (Math.round(correctAns * 100) / 3).toFixed(2);
    setScore(score);
    setCorrectAnswer(correctAns);
  };

  return (
    <>
    <div className="topNav">Frontend Assignment</div>
    <div style={{ padding: "44px" }}>
      {submit ? (
        <Card>
          <SubmitPage correctAns={correctAnswer} score={score} />
        </Card>
      ) : (
        <>
          <Row justify="space-between">
            <Col span={2}></Col>
            <Col span={6}>
              <Card className="cardStyles">
                <div style={{ textAlign: "center" }}>
                  <img src={reviewLogo} alt="logo" height="60" />
                </div>
                <div className="Heading">Review Answer Here</div>
                <div style={{ padding: "24px", textAlign:'center' }}>
                  {answers.map((e, i) => (
                    <div style={{paddingBottom:'18px', fontWeight:'bold'}}>
                      {i + 1}. {e}{" "}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col span={14}>
              <Card className="cardStyles">
                <div style={{ textAlign: "center" }}>
                  <img src={questionLogo} alt="logo" height="60" />
                </div>

                <Row justify="space-between">
                  <Col span={2}>
                    <Button
                      onClick={() => {
                        setCount((prev) => prev - 1);
                      }}
                      disabled={count == 0}
                    >
                      Prev
                    </Button>
                  </Col>
                  <Col span={8}>
                    <div className="Heading">Attempt Questions Here</div>
                  </Col>
                  <Col span={2}>
                    <Button
                      onClick={() => {
                        setCount((prev) => prev + 1);
                      }}
                      disabled={count == 2}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
                <div className="questionBox">
                  <div className="question">{data[count].question}</div>
                  <div className="options">
                    <Radio.Group onChange={onSelectOption} value={answers[count]}>
                      <Space direction="vertical">
                        {data[count].options.map((e) => (
                          <Radio value={e}>{e}</Radio>
                        ))}
                      </Space>
                    </Radio.Group>
                  </div>
                </div>
                {answers.length == 3 && (
                  <div style={{ marginTop: "24px", textAlign: "center" }}>
                    <Button type="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                )}
              </Card>
            </Col>
            <Col span={2}></Col>
          </Row>
        </>
      )}
    </div>
    </>
  );
}

export default App;
