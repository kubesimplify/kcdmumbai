import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {};

const TransparancyReport = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/transparency-report.pdf');
  }, []);
  return (
    <>
      <Head>
        <title>Transparency Report</title>
      </Head>
    </>
  );
};

export default TransparancyReport;
