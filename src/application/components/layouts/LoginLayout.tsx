import Logo from "./Logo";

const LoginLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <div className="flex justify-center">
          <Logo className="h-32 w-auto" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
          Iniciar sesión
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-[480px]">
        {children}

        <p className="mt-10 text-center text-sm">
          Desarrollado por{' '}
          <a href="https://javiermontalvo.dev" target="_blank" rel="noreferrer noopener" className="font-semibold hover:text-gray-900">
            Javier Montalvo
          </a>
        </p>
      </div>
    </div>
  )
};

export const LoginLayout = LoginLayoutComponent;

export default LoginLayout;
