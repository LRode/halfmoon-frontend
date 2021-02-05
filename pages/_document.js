import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#94c7e7" />
                    <meta name="msapplication-TileColor" content="#94c7e7" />
                    <meta name="theme-color" content="#94c7e7" />
                    <title>Halfmoon Manga + Anime</title>
                    <meta name="description" content="Vancouver's largest selection of new and used Japanese and English manga, anime, books, and goods" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://animanga.me/" />
                    <meta property="og:title" content="Halfmoon Anime & Manga" />
                    <meta property="og:description" content="Vancouver's largest selection of new and used Japanese and English manga, anime, books, and goods" />
                    <meta property='og:image' content='https://animanga.me/storePhoto1.jpg' />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://animanga.me/" />
                    <meta property="twitter:title" content="Halfmoon Anime & Manga" />
                    <meta property="twitter:description" content="Vancouver's largest selection of new and used Japanese and English manga, anime, books, and goods" />
                    <meta property="twitter:image" content="https://animanga.me/storePhoto1.jpg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
