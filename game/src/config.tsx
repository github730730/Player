import Head from 'next/head';
import React from 'react';

const titleDefault = '';
const url = '';
const description = '';
const author = '';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{titleDefault}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Web3,Games" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={titleDefault} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={'/icons/share.png'} />
        <meta name="og:site_name" content={titleDefault} />
        <meta name="og:description" content={description} />

        <link rel="manifest" href="/manifest.json" />

        {/* Meta Tags for HTML pages on Mobile */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={'/icons/share.png'} />
      </Head>
    </>
  );
};

export default Header;
