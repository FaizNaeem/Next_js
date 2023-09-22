// /pages/details.js
"use client"
import { useRouter } from 'next/navigation';

function Details() {
  const router = useRouter();
  const { id, name } = router.query;

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>Name: {name}</h2>
    </div>
  );
}

export default Details;
