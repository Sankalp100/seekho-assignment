import { useState } from "react";
import { Card, Row, Col, Button, Radio, Space } from "antd";
import "./styles.css";
import SubmitPage from "./SubmitPage";
import questionLogo from "./assets/questionImg.png";
import reviewLogo from "./assets/review.webp";

function App() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [score, setScore] = useState(0);

  const data = [
    {
      id: 1,
      question: "Q1: A line which cuts a pair of parallel lines is called",
      options: ["Tangent", "Chord", "Traversal", "Intersector"],
      ans: "Traversal",
    },
    {
      id: 2,
      question:
        "Q2: If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is",
      options: ["20%", "30%", "40%", "50%"],
      ans: "20%",
    },
    {
      id: 3,
      question:
        "Q3: A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of",
      options: ["50%", "75%", "80%", "125%"],
      ans: "125%",
    },
  ];

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
    <div style={{ padding: "36px 224px" }}>
      {submit ? (
        <Card>
          <SubmitPage correctAns={correctAnswer} score={score} />
        </Card>
      ) : (
        <>
          <Row>
            <Col span={6}>
              <Card style={{ height: "60vh", margin: "24px" }}>
                <div style={{ textAlign: "center" }}>
                  <img src={reviewLogo} alt="logo" height="60" />
                </div>
                <div className="Heading">Review Answer Here</div>
                <div style={{ padding: "24px 64px" }}>
                  {answers.map((e, i) => (
                    <div>
                      {i + 1}. {e}{" "}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col span={18}>
              <Card style={{ height: "60vh", width: "100%", margin: "24px" }}>
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
                  <div style={{ marginTop: "48px", textAlign: "center" }}>
                    <Button type="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default App;
