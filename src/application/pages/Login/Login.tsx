'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { signInUser } from '@/application/helpers/auth';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signInUser(data.email, data.password);
      // redirect
    } catch (error) {
      toast.error('Hubo un error, inténta nuevamente o comunicate con la MAG.');
    }
  };

  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight">Inicia sesión</h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-dianne-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-dianne-900 shadow-sm ring-1 ring-inset ring-dianne-300 placeholder:text-dianne-400 focus:ring-2 focus:ring-inset focus:ring-dianne-600 sm:text-sm sm:leading-6"
              required
              {...register('email')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-dianne-900">
            Contraseña
          </label>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-dianne-900 shadow-sm ring-1 ring-inset ring-dianne-300 placeholder:text-dianne-400 focus:ring-2 focus:ring-inset focus:ring-dianne-600 sm:text-sm sm:leading-6"
              required
              {...register('password')}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dianne-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dianne-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dianne-600"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
