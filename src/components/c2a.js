/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import MonkeyEmoji from './twemoji/1f435'
import AmazonLink from './amazon-link'
import ExternalLink from './external-link'
import {submitButtonCss} from './outro'

const C2A = () => (
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
        <MonkeyEmoji />
      </Emoji>{' '}
      元祖チンパンジークイズもどうぞ{' '}
      <Emoji large>
        <MonkeyEmoji />
      </Emoji>
    </h3>
    <p>
      今回のクイズは、『
      <AmazonLink>
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </AmazonLink>
      』の冒頭に載っていたチンパンジークイズに感化されて作成したものです。ぜひ元祖チンパンジークイズにもチャレンジしてみてください。
    </p>
    <p>
      <ExternalLink
        href="https://factfulness.chibicode.com"
        css={submitButtonCss}
      >
        元祖チンパンジークイズに挑戦
      </ExternalLink>
    </p>
  </>
)

export default C2A
