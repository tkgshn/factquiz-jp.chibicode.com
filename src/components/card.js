/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Bar = () => (
  <div
    css={css`
      width: 1.25rem;
      height: 1rem;
      ${ns} {
        height: 1.75rem;
      }
      margin: 0 auto;
      background: #c7afa7;
    `}
  />
)

const Card = ({children, isLast, backgroundColor, footer}) => (
  <>
    {footer ? (
      <>
        <section
          css={css`
            border-radius: 0.5rem;
            overflow: hidden;
          `}
        >
          <div
            css={css`
              background: ${backgroundColor};
              padding: 1.25rem 0.875rem 0.25rem;
              ${ns} {
                padding: 2rem 2rem 0.5rem;
              }
            `}
          >
            {children}
          </div>
          <div
            css={css`
              background: #fff;
              padding: 1.25rem 0.875rem 0.25rem;
              ${ns} {
                padding: 1.5rem 2rem 1rem;
              }
            `}
          >
            {footer}
          </div>
        </section>
      </>
    ) : (
      <>
        <section
          css={css`
            background: ${backgroundColor};
            border-radius: 0.5rem;
            padding: 1.25rem 0.875rem 0.25rem;
            ${ns} {
              padding: 2rem 2rem 1rem;
            }
          `}
        >
          {children}
        </section>
      </>
    )}
    {!isLast && <Bar />}
  </>
)

Card.defaultProps = {
  isLast: false,
  backgroundColor: '#fff'
}

export default Card
