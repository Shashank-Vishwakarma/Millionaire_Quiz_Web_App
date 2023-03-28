import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: " Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
      answers: [
        {
          text: "P.B. Shelley",
          correct: false,
        },
        {
          text: "Alfred Tennyson",
          correct: false,
        },
        {
          text: "W.B. Yeats",
          correct: true,
        },
        {
          text: "T.S. Elliot",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these leaders was a recipient of a gallantry award in 1987 by a state government for saving two girls from drowning?",
      answers: [
        {
          text: "Anandiben Patel",
          correct: true,
        },
        {
          text: "Vasundhara Raje Scindia",
          correct: false,
        },
        {
          text: "Uma Bharti",
          correct: false,
        },
        {
          text: "Mamata Banerjee",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the only MP in the current Lok Sabha who is also an Olympic medalist?",
      answers: [
        {
          text: "Abhinav Bindra",
          correct: false,
        },
        {
          text: "Rajyavardan Singh Rathore",
          correct: true,
        },
        {
          text: "Karnam Maleshwari",
          correct: false,
        },
        {
          text: "Gagan Narang",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "In which state is the Larji Hydroelectric Power Project located?",
      answers: [
        {
          text: "Uttarakhand",
          correct: false,
        },
        {
          text: "Jammu and Kashmir",
          correct: false,
        },
        {
          text: "Sikkim",
          correct: false,
        },
        {
          text: "Himachal Pradesh",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Effective on may 2014,the European union imposed a temporary ban on the import of which of these fruits from India?",
      answers: [
        {
          text: "Mango",
          correct: true,
        },
        {
          text: "Banana",
          correct: false,
        },
        {
          text: "Litchi",
          correct: false,
        },
        {
          text: "Pineapple",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who was the first deaf-blind person to receive a bachelor of arts degree?",
      answers: [
        {
          text: "Alice Betteridge",
          correct: false,
        },
        {
          text: "Laura Bridgman",
          correct: false,
        },
        {
          text: "Helen Keller",
          correct: true,
        },
        {
          text: "Sanzan Tani",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these temples is located in Kathmandu, the capital of Nepal?",
      answers: [
        {
          text: "Kamakhya temple",
          correct: false,
        },
        {
          text: "Pashupatinath temple",
          correct: true,
        },
        {
          text: "Viswanath temple",
          correct: false,
        },
        {
          text: "Baba Baidyanath temple",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " In which of these sports are the terms reverse swing and reverse sweep used?",
      answers: [
        {
          text: "Football",
          correct: false,
        },
        {
          text: "Cricket",
          correct: true,
        },
        {
          text: "Basketball",
          correct: false,
        },
        {
          text: "Volleyball",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which newspaper once kept its editorial cloumn blank as a mark of protest against the emergency of 1975?",
      answers: [
        {
          text: "Hindustan Times",
          correct: false,
        },
        {
          text: "The Hindu",
          correct: false,
        },
        {
          text: "The Indian Express",
          correct: true,
        },
        {
          text: "The Times of India",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "In the film 2 states, a Punjabi boy falls in love with a ___ girl.",
      answers: [
        {
          text: "Bengali",
          correct: false,
        },
        {
          text: "Marathi",
          correct: false,
        },
        {
          text: "Tamil",
          correct: true,
        },
        {
          text: "Malayali",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Whose autobiography is titled ‘Man of Everest’ also published as ‘Tiger of the snows’?",
      answers: [
        {
          text: "Sir Edmund Hillary",
          correct: false,
        },
        {
          text: "Tenzing Norgay",
          correct: true,
        },
        {
          text: "George Mallory",
          correct: false,
        },
        {
          text: "Major H P S Aluhwalia",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Where did Homi Jehangir Bhaba, the principal architect of India’s nuclear program, die in a plane crash?",
      answers: [
        {
          text: "Monte Rosa",
          correct: false,
        },
        {
          text: "Mount Ararat",
          correct: false,
        },
        {
          text: "Mount Elbrus",
          correct: false,
        },
        {
          text: "Mont Blanc",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 1,25,000" },
        { id: 13, amount: "$ 2,50,000" },
        { id: 14, amount: "$ 5,00,000" },
        { id: 15, amount: "$ 10,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber > 15? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
