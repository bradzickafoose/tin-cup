import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

export default function Layout({ title, children, header = true, footer = true }) {
  return (
    <>
      <Head>
        <title>{title && `${title} - `}The Tin Cup Kitchen + Oyster Bar</title>
      </Head>
      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
}