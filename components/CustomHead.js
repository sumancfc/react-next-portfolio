import Head from "next/head";

const CustomHead = ({ title, description }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content={title} key='titleMeta' />
        <meta name='description' content={description} key='description' />
        <meta property='og:title' content={title} key='ogTitle' />
        <meta
          property='og:description'
          content={description}
          key='ogDescription'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='' />
        <meta name='keywords' content='Suman Shrestha, Suman, sumancfc' />
        <meta name='author' content='Suman Shrestha' />
        <title key='title'>{title}</title>
      </Head>
    </>
  );
};

export default CustomHead;
