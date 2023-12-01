import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, allowedRoles = null }) => {
  const router = useRouter();
  const { user, checkAuthentication } = useAuth();
  const [authorizationChecked, setAuthorizationChecked] = useState(false);

  const authenticate = async () => {
    await checkAuthentication();
    setAuthorizationChecked(true);

    if (!user) {
      router.replace('/login');
    } else if (allowedRoles && user.author_level !== allowedRoles) {
      router.replace('/login');
    }
  };

  // Chama a função de autenticação diretamente no componente
  authenticate();

  return authorizationChecked && user ? children : null;
};

export default PrivateRoute;
