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
      『ファクトフルネス』風？
      <br />
      日本の事実が学べる
      <br />
      ニホンザルクイズ
    </h1>
    <p
      css={css`
        text-align: center;
        font-size: 0.825rem;
        color: #777;
      `}
    >
      ファクトフルネス共訳者(上杉)作成
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
    <p>
      2019年1月に発売された本『
      <AmazonLink href="https://amzn.to/2CMacFZ">
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </AmazonLink>
      』の冒頭には、世界の事実に関するクイズが載っています。
    </p>
    <p>
      このクイズのオンライン版を
      <ExternalLink href="https://factquiz.chibicode.com">
        先日公開したところ
      </ExternalLink>
      、「これの『日本の事実』バージョンがあれば、やってみたい」という声がありました。
    </p>
    <p>
      というわけで、
      <strong>日本の事実に関するクイズ問題を12問、独自に作ってみました</strong>
      。『ファクトフルネス』の内容と近い質問もあれば、そうでない質問もあります。
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
    <p
      css={css`
        margin-bottom: 0;
      `}
    >
      クイズはどの質問もA・B・Cの3択です。つまり、仮にニホンザルにこのクイズを出したら、正解率はだいたい「3分の1」になります。
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 2.75rem;
        margin-bottom: 1rem;
      `}
    >
      <Emoji>
        <ThinkEmoji />
      </Emoji>{' '}
      <Emoji>
        <VsEmoji />
      </Emoji>{' '}
      <Emoji>
        <MonkeyEmoji />
      </Emoji>
    </div>
    <p>
      クイズは全部で12問。ニホンザルなら、だいたい4問正解します。あなたは
      <strong>5問以上正解</strong>
      し、見事ニホンザルに勝てるでしょうか？ぜひチャレンジしてみてください！
    </p>
  </>
)

export default Intro
