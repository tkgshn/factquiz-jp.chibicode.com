/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems, score} from '../lib/quiz'
import Card from './card'
import ResultsIntro from './results-intro'
import ResultsBreakdown from './results-breakdown'
import C2A from './c2a'
import Share2CA from './share-c2a'
import Book2CA from './book-c2a'
import QuizResultChoice from './quiz-result-choice'

const QuizResults = ({selectedAnswers}) => (
  <>
    <Card>
      <ResultsIntro score={score(selectedAnswers)} />
    </Card>
    <Card>
      <ResultsBreakdown selectedAnswers={selectedAnswers} />
    </Card>
    <Card>
      <Share2CA />
    </Card>
    {problems.map(
      ({text, type, choices, answer, explanation, trust}, index) => (
        <Card
          key={text}
          backgroundColor={
            answer === selectedAnswers[index] ? '#F4F6FB' : '#FEF1F3'
          }
          footer={
            <div>
              <p>
                {selectedAnswers[index] === answer ? (
                  <strong>正解！</strong>
                ) : (
                  <>
                    正解は「<strong>{choices[answer]}</strong>」。
                  </>
                )}
              </p>
              <div
                css={css`
                  font-size: 0.825rem;
                  color: #777;
                `}
              >
                <p>
                  <strong>解説:</strong> {explanation}
                </p>
                <p>
                  <strong>データの信頼性:</strong> {trust}
                </p>
              </div>
            </div>
          }
        >
          <h3
            css={css`
              margin-top: 0;
              font-size: 1rem;
              margin-bottom: 1rem;
            `}
          >
            <div
              css={css`
                color: #777;
              `}
            >
              質問{index + 1}: {type}について
            </div>{' '}
            {text}
          </h3>
          <div
            css={css`
              margin-bottom: 1rem;
            `}
          >
            <QuizResultChoice
              choice="a"
              choices={choices}
              selectedAnswer={selectedAnswers[index]}
              correctAnswer={answer}
            />
            <QuizResultChoice
              choice="b"
              choices={choices}
              selectedAnswer={selectedAnswers[index]}
              correctAnswer={answer}
            />
            <QuizResultChoice
              choice="c"
              choices={choices}
              selectedAnswer={selectedAnswers[index]}
              correctAnswer={answer}
            />
          </div>
        </Card>
      )
    )}
    <Card>
      <C2A />
    </Card>
    <Card>
      <Share2CA isBottom />
    </Card>
    <Card isLast>
      <Book2CA />
    </Card>
  </>
)

export default QuizResults
