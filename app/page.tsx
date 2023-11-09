import TestSelect from './components/TestSelect';

export default async function Home() {
  'use server';
  await fetch('https://google.com', { cache: 'no-store' });

  return (
    <TestSelect />
  )
}
