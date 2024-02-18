"use client";
import { handleRegister } from "@/utils/handleRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const Register = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const initialState = {
    success: false,
    message: "",
  };

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(handleRegister, initialState);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (state.success) {
      formRef.current?.reset();
      timeoutId = setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [state, router]);

  return (
    <main className="">
      <div className="w-full lg:w-1/3 my-6 pr-0 lg:pr-2 mx-auto">
        <p className="text-xl pb-6 flex items-center">
          <i className="fas fa-list mr-3"></i> Registrarse
        </p>
        <div className="leading-loose">
          <form
            action={formAction}
            className="p-10 bg-white rounded shadow-xl"
          >
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="name"
                name="name"
                type="text"
                required
                placeholder="Tu Nombre"
                aria-label="name"
              />
            </div>
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
                {pending ? "Verificando..." : "Registrarme"}
              </button>
              <Link
                href="/register"
                className="ml-auto px-4 py-1 tracking-wider border-2 border-gray-900 rounded font-semibold"
              >
                Ya tengo una cuenta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
