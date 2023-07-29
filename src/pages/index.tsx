import Head from 'next/head';
import Hero from '@components/Hero';
import Aboutus from '@components/About';
import LocationAndDate from '@components/LocationAndDate';
import Speakers from '@components/Speakers';
import PropsalAndSponsors from '@components/PropsalAndSponser';
import Sponsors from '@components/Sponsors';
import Agenda from '@components/Agenda';
import Layout from '@layout/index';
import SectionWrapper from '@components/ui/SectionWrapper';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';

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
          <SectionWrapper id="#transparency-report" className="mx-3 w-full">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
              <div
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  height: '750px',
                }}
              >
                <Viewer fileUrl="/transparency-report.pdf" />
              </div>
            </Worker>
          </SectionWrapper>
          <Sponsors />
          <Agenda />
        </main>
      </Layout>
    </>
  );
}
