'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext';

export default function DashboardPage() {
  const { isAuthenticated, loading, user,logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <p>Cargando...</p>; // Puedes poner un spinner o lo que prefieras
  }

  if (!isAuthenticated) {
    return null; // O mensaje, pero la redirección ya se hizo
  }

  return (
    <div><button
      onClick={() => logout()}
      style={{
        padding: '8px 16px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      title={`Cerrar sesión de ${user?.email ?? ''}`}
    >
      Cerrar sesión
    </button>
      <h1>Bienvenido, {user?.role} y {user?.email}</h1>
      {/* Contenido del dashboard */}
    </div>
  );
}