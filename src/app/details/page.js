// /pages/details.js

import { useRouter } from 'next/router';

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
