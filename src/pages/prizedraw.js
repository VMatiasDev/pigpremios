import AllPrizesDraw from '@/components/allPrizesDraw';
import Footer from '@/components/footer';
import Instructions from '@/components/instructions';
import NavBar from '@/components/navbar';
import Head from 'next/head';

export default function PrizeDraw() {
  return (
    <>
      <Head>
        <title>Sorteios</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <AllPrizesDraw />
      <Instructions />
      <Footer />
    </>
  );
}
