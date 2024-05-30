import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent/MainContent";
import Head from "next/head";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Bartosz Kowal - NextJS & React</title>
				<meta name="description" content="NextJS & React developer. Web Application Programming graduate. Programming enthusiast." />
				<meta name="author" content="Bartosz Kowal" />
				<meta
					name="keywords"
					content="HTML, CSS, SCSS, Bootstrap, MaterialUI, Tailwind CSS, JavaScript, TypeScript, JS, TS, 
					React, NextJS, MongoDB, PostgrSQL, Strapi, Frontend, Developer"
				/>
				<style>@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Sixtyfour&display=swap');</style>
			</Head>

			<Header />
			<MainContent />
			<Footer />
		</>
	);
}
