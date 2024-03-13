'use client'

import { signInUser } from "@/application/helpers/auth";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signInUser(data.email, data.password)
  }

  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <div>
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => register(email, password)}>Iniciar Sesión</button>
            <button onClick={() => signIn(email, password)}>Cerrar Sesión</button>
            <button onClick={logOut}>Registrarse</button>
          </div> */}
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
              {...register("email")}
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
              {...register("password")}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-dianne-300 text-dianne-600 focus:ring-dianne-600"
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-dianne-900">
              Recordarme
            </label>
          </div>

          <div className="text-sm leading-6">
            <Link href="/"
              className="font-semibold text-dianne-600 hover:text-dianne-500">
              Forgot password?
            </Link>
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
  )
};

export default Login;
