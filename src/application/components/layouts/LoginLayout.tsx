const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Logueate en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        {children}

        <p className="mt-10 text-center text-sm text-gray-500">
          Desarrollado por{' '}
          <a href="https://javiermontalvo.dev" target="_blank" rel="noreferrer noopener" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Javier montalvo
          </a>
        </p>
      </div>
    </div>
  )
};

export default LoginLayout;
