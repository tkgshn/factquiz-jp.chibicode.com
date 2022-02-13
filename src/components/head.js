import React from 'react'
import NextHead from 'next/head'

export const title =
  '世界を少しインクルーシブ（誰も取り残さない状態）にするセミリアルゲーム「インクルーシブワールド」'
export const description = 'インクルーシブチャートを手がかりに回答してください。'
export const imageUrl =
  'https://factquiz-jp.chibicode.com/static/images/og-image-jp.png'

const Head = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/images/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/images/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/images/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/images/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/images/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:locale" content="ja_JP" />
    <link rel="canonical" href="https://factquiz-jp.chibicode.com/" />
    <meta property="og:url" content="https://factquiz-jp.chibicode.com/" />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chibicode" />
    <meta name="twitter:creator" content="@chibicode" />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:description" content={description} />
    <meta name="description" content={description} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{"name":"${title}","@type":"WebSite","url":"https://factquiz-jp.chibicode.com/","image":"${imageUrl}","headline":"${title}","@context":"http://schema.org"}`
      }}
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-32987822-21"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-32987822-23', { 'anonymize_ip': true });`
      }}
    />
  </NextHead>
)

export default Head
