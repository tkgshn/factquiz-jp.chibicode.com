/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import JapanEmoji from './twemoji/1f1ef-1f1f5'
import Emoji from './emoji'
import Book from './book'
import AmazonLink from './amazon-link'
import ExternalLink from './external-link'

const Intro = () => (
  <>
    <h1
      css={css`
        margin: 0 0 0.5rem;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.35;
        letter-spacing: -1.5px;
      `}
    >
      世界を少しインクルーシブにする？
      <br />
      セミリアルゲーム
      <br />
      「インクルーシブワールド」
    </h1>
    <p
      css={css`
        text-align: center;
        font-size: 0.825rem;
        color: #777;
      `}
    >
      Proj-povertyチーム作成
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
    <p>
    proj-povertyで開発している
    貧困を可視化する
      <AmazonLink href="https://yuiseki.github.io/inclusive-chart-vite/#bubble">
        <strong>インクルーシブチャート</strong>
      </AmazonLink>
      では、日本中の日の目に当たらない貧困に関する情報がまとめられています。
    </p>
    <p>
      この貧困可視化のテーマで授業を
      <ExternalLink href="https://codeforjapan.github.io/projpoverty/boukyuukunnren">
        先日行ったところ
      </ExternalLink>
      、「これのオンラインバージョンがあれば、やってみたい」という声がありました。
    </p>
    <p>
      というわけで、
      <strong>日本の貧困に関するクイズ問題を4問作ってみました</strong>
      。
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 2.75rem;
        margin-bottom: 1rem;
      `}
    >
      <Emoji>
        <JapanEmoji />
      </Emoji>{' '}
      <Emoji>
        <ThinkEmoji />
      </Emoji>{' '}
      <Emoji>
        <JapanEmoji />
      </Emoji>
    </div>
    <p>
      クイズは全部で4問。ニホンザルなら、だいたい2問正解します。あなたは
      <strong>2問以上正解</strong>
      し、見事ニホンザルに勝てるでしょうか？ぜひチャレンジしてみてください！
    </p>
  </>
)

export default Intro
