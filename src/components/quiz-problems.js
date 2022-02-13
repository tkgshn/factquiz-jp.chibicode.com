/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems} from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import Outro from './outro'
import ChoiceButton from './choice-button'
import ExternalLink from './external-link'

const quietCss = css`
  color: #777;
  font-size: 0.825rem;
`

const QuizProblems = ({setAnswer, selectedAnswers, submit}) => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(
      ({text, choices, type, subtext}, index) =>
        selectedAnswers.length >= index && (
          <Card key={text} isLast={selectedAnswers.length === index}>
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
            <>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'a'}
                onClick={setAnswer({index, answer: 'a'})}
              >
                {choices.a}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'b'}
                onClick={setAnswer({index, answer: 'b'})}
              >
                {choices.b}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'c'}
                onClick={setAnswer({index, answer: 'c'})}
              >
                {choices.c}
              </ChoiceButton>
            </>
            {index === 0 && (
              <>
                <p css={quietCss}>
                  正しいと思う答えを選んでみてください。最後にある「
                  <strong>何問正解したかチェック！</strong>
                  」ボタンを押すまで何度でも選び直すことができます。
                </p>
                <p css={quietCss}>
                  このクイズについて詳しくは
                  <ExternalLink href="https://github.com/chibicode/factquiz-jp.chibicode.com">
                    こちら
                  </ExternalLink>
                  。
                </p>
              </>
            )}
            {subtext && (
              <>
                <p css={quietCss}>{subtext}</p>
              </>
            )}
          </Card>
        )
    )}
    {selectedAnswers.length === 4 && (
      <Card isLast>
        <Outro submit={submit} />
      </Card>
    )}
  </>
)

export default QuizProblems
