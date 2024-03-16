import Link from "next/link";
import Logo from "./Logo";
import LogoJM from "./LogoJM";

const LoginLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <div className="flex justify-center">
          <Logo className="h-32 w-auto" />
        </div>
      </div>

      <div className="mt-10 mx-auto w-full max-w-[480px]">
        {children}

        <p className="mt-10 text-center text-sm flex flex-col md:flex-row justify-center items-center">
          Desarrollado por:
          <Link href="https://javiermontalvo.dev" target="_blank" rel="noreferrer noopener">
            <LogoJM className="h-auto w-48 ml-2" />
          </Link>
        </p>
      </div>
    </div>
  )
};

export const LoginLayout = LoginLayoutComponent;

export default LoginLayout;
