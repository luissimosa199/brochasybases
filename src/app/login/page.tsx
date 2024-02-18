"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

const Login = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      router.push("/admin");
      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
      } else {
        setLoginError("Error desconocido");
      }
    }
  };

  return (
    <main className="">
      <div className="w-full lg:w-1/3 my-6 pr-0 lg:pr-2 mx-auto">
        <p className="text-xl pb-6 flex items-center">
          <i className="fas fa-list mr-3"></i> Ingresar
        </p>
        <div className="leading-loose">
          <form
            ref={formRef}
            action={handleSubmit}
            className="p-10 bg-white rounded shadow-xl"
          >
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="email"
                name="email"
                type="text"
                required
                placeholder="Tu Email"
                aria-label="Email"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="email"
              >
                Contraseña
              </label>
              <input
                className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="password"
                name="password"
                type="password"
                required
                placeholder="Tu contraseña"
                aria-label="password"
              />
            </div>
            <div className="mt-6 flex">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
                disabled={pending}
              >
                {pending ? "Verificando..." : "Ingresar"}
              </button>
              <Link
                href="/register"
                className="ml-auto px-4 py-1 tracking-wider border-2 border-gray-900 rounded font-semibold"
              >
                Registrarme
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
