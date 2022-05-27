import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const Login = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div>
        <div className="relative h-12 w-auto flex-shrink-0">
          <Image
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            layout="fill"
          />
        </div>

        <h1 className="mt-6 text-center text-[24px] font-extrabold">
          Sign in to your account
        </h1>

        <h3 className="mb-8 text-center text-xs">
          Or{' '}
          <a href="#" className="text-indigo-600">
            start your 14-day free trial
          </a>
        </h3>

        <form className="mt-2 flex flex-1 items-center rounded-t-md border border-gray-300 bg-white p-1.5">
          <input
            className="w-full flex-1 border-none bg-transparent p-1 placeholder-gray-500 outline-none focus:ring-0"
            type="text"
            placeholder="Username"
          />
          <button type="submit" hidden></button>
        </form>

        <form className="mb-2 flex flex-1 items-center rounded-b-md border-b border-l border-r border-gray-300 bg-white p-1.5">
          <input
            className="w-full flex-1 border-none bg-transparent p-1 placeholder-gray-500 outline-none focus:ring-0"
            type="password"
            placeholder="Password"
          />
          <button type="submit" hidden></button>
        </form>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <input
              className="h-4 w-4 rounded border-gray-300 text-indigo-600"
              type="checkbox"
            />
            <label className="ml-2">Remember me</label>
          </div>

          <a href="#" className="font-medium text-indigo-600">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="relative mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700"
        >
          <span className="absolute left-0">
            <LockClosedIcon className="ml-3 h-5 w-5" />
          </span>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Login
