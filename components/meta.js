import Head from 'next/head'

export default function Meta({ title }) {
  return (
    <Head>
      <meta name="description" content="Martin Grönlund, Software Developer" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <title>{title}</title>
    </Head>
  )
}
