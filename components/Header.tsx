import Image from 'next/image'

import { ChevronDownIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'

import {
  GlobeIcon,
  VideoCameraIcon,
  SparklesIcon,
  ChatIcon,
  BellIcon,
  PlusIcon,
  SpeakerphoneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="/Reddit_Lockup_OnWhite.svg"
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="w-full flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        ></input>
        <button type="submit" hidden></button>
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />

        <hr className="h-10 border border-gray-100" />

        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center text-gray-500 lg:hidden">
        <MenuIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
