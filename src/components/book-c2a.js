/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import BookEMoji from './twemoji/1f4d9'
import GlassesEmoji from './twemoji/1f9d0'
import Book from './book'
import AmazonLink from './amazon-link'
import {submitButtonCss} from './outro'

const BookC2A = () => (
  <>
    <h3
      css={css`
        margin-top: -0.25rem;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        text-align: center;
      `}
    >
      <Emoji large>
        <GlassesEmoji />
      </Emoji>{' '}
      『ファクトフルネス』もぜひ
      <Emoji large>
        <BookEMoji />
      </Emoji>
    </h3>
    <p>
      わたしが共訳した『
      <AmazonLink>
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </AmazonLink>
      』では、「日本」ではなく「世界」の事実を学ぶことができます。ぜひお手にとってみてください。
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
    <p>
      <AmazonLink css={submitButtonCss}>Amazonで見る</AmazonLink>
    </p>
  </>
)

export default BookC2A
