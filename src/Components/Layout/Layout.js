import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation/Navigation';
import CardProfil from '../CardProfil';

export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <CardProfil />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
