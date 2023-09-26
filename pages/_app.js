import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Halfmoon Manga + Anime</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
