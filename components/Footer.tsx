import React from 'react'

import Image from 'next/image'

const Footer = () => {
  return (
    <div className="h-fill flex-wrap bg-black p-16 text-white lg:flex lg:justify-around lg:text-left">
      <div className="flex flex-col items-center space-y-5 pb-10 lg:inline-block lg:pb-0">
        <div className="flex space-x-4">
          <div className="social">
            <Image src="/Instagram_Glyph_White.svg" layout="fill" />
          </div>
          <div className="social">
            <Image src="/Twitter_White.svg" layout="fill" />
          </div>
          <div className="social">
            <Image src="/Discord-Logo-White.svg" layout="fill" />
          </div>
        </div>

        <h3 className="text-gray-400">support@kineticlabs.com</h3>

        <h3 className="text-gray-400">
          4001 Dell Ave, North Bergen, NJ 07047 USA
        </h3>
      </div>

      <div className="flex flex-1 justify-around">
        <div className="flex flex-col space-y-6 lg:space-y-10">
          <h1 className="text-xl font-medium">Resources</h1>

          <div className="flex flex-col space-y-3 text-gray-300">
            <a href="#">Blog</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="flex flex-col space-y-6 lg:space-y-10">
          <h1 className="text-xl font-medium">Categories</h1>

          <div className="flex flex-col space-y-3 text-gray-300">
            <a href="#">Switches</a>
            <a href="#">Keycaps</a>
            <a href="#">Desk Mats</a>
            <a href="#">Lube</a>
            <a href="#">Storage</a>
            <a href="#">Apparel</a>
            <a href="#">Misc</a>
            <a href="#">Sale</a>
            <a href="#">Clearance</a>
            <a href="#">Discontinued</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-around">
        <div className="flex w-[40vh] flex-col space-y-10 pt-16 lg:inline lg:pt-0">
          <h1 className="text-xl font-medium">Join Kinetic Labs!</h1>

          <div className="flex">
            <p>
              Sign up to our weekly newsletter for exclusive offers and updates
              on our latest products.
            </p>
          </div>

          <form className="flex flex-1 flex-row rounded-2xl bg-zinc-900 p-1">
            <input
              className="w-full flex-1 border-none bg-transparent outline-none focus:ring-0"
              type="text"
              placeholder="Email..."
            />
            <button className="rounded-2xl bg-blue-700 pl-4 pr-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
