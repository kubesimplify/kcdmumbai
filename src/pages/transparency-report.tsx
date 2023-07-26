import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type Props = {};

const TransparancyReport = (props: Props) => {
  return (
    <>
      <Head>
        <title>Transparency Report</title>
      </Head>
      <main>
        <div>
          <embed
            src="/transparency-report.pdf"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
        <Link href="/transparency-report.pdf">report</Link>
      </main>
    </>
  );
};

export default TransparancyReport;
