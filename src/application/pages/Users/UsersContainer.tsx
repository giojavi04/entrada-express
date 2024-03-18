'use client';

import { useEffect, useState } from 'react';

import { useAppProvider } from '@/application/contexts/AppContext';
import { getUsers } from '@/application/helpers/auth';

const UsersContainer = () => {
  const { setTitle } = useAppProvider();
  const [users, setUsers] = useState<any[]>([]);
  setTitle('Usuarios');

  const getUsersFromFirebase = async () => {
    const fetchedUsers = await getUsers();
    if (fetchedUsers) {
      setUsers(fetchedUsers);
    }
  };

  useEffect(() => {
    getUsersFromFirebase();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-dianne-950">Preventas Noche Azul Grana</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-dianne-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-dianne-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dianne-700"
          >
            Añadir usuario
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-dianne-900 sm:pl-0">
                    Nombre
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dianne-900">
                    Cédula
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dianne-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dianne-900">
                    Entradas
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-dianne-900 sm:pl-0">{person.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.dni}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-dianne-600 hover:text-dianne-900">
                        Editar<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersContainer;
