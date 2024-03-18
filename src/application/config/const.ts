export const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Equipo', href: '#', current: false, roles: ['admin'] },
  { name: 'Usuarios', href: '/usuarios', current: false, roles: ['admin', 'distributor'] },
  { name: 'Eventos', href: '#', current: false, roles: ['admin'] }
];
