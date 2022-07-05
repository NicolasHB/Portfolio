import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation/Navigation';
import CardProfil from '../CardProfil';

export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <main className='flex sm:flex-col'>
      <CardProfil />
        {children}
      </main>
      <Footer />
    </div>
  );
}
