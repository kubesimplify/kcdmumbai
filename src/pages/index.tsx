import Aboutus from '@components/About';
import Hero from '@components/Hero';
import LocationAndDate from '@components/LocationAndDate';
import Speakers from '@components/Speakers';
import Sponsors from '@components/Sponsors';
import Heading from '@components/ui/Heading';
import SectionWrapper from '@components/ui/SectionWrapper';
import { videos } from '@data/index';
import Layout from '@layout/index';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>KCD Mumbai</title>
        <meta name="title" content="KCD Mumbai" />
        <meta
          name="description"
          content="Join us at Kubernetes Community Days in Mumbai to experience the power of a diverse community coming together to learn & share knowledge on cloud native."
        />
        <meta name="keywords" content="Hackathons,  KCD Mumbai" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#00002C" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="mx-auto mb-2 flex max-w-6xl flex-col gap-4 px-2">
          <div className="py-10">
            <h3 className="text-center text-2xl text-red-500 underline">
              Thank you for joining KCD Mumbai 2023 Edition
            </h3>
          </div>
          <Hero />
          <Aboutus />
          <LocationAndDate />
          <Speakers />
          {/* <PropsalAndSponsors /> */}

          {/* PDF  */}
          <SectionWrapper
            id="#transparency-report"
            className="mx-3 h-[900px] w-full"
          >
            <object
              data="/transparency-report.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Alternative text - include a link{' '}
                <a href="http://africau.edu/images/default/sample.pdf">
                  to the PDF!
                </a>
              </p>
            </object>
          </SectionWrapper>

          <Sponsors />

          {/* Recording  */}
          <SectionWrapper id="#recordings" className="pb-10">
            <Heading>Recordings</Heading>
            <div className="flex w-full flex-wrap items-center justify-center gap-10">
              {videos.map((video) => (
                <iframe
                  key={video}
                  width="340"
                  height="200"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </SectionWrapper>
          {/* <Agenda /> */}
        </main>
      </Layout>
    </>
  );
}
