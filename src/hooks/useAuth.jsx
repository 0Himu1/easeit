import { useState } from 'react';

export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState(true);

  return loggedIn;
}
