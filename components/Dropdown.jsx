/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function MyDropdown() {
  return (
    <Menu as='div' className={`relative inline-block text-left `}>
      <div>
        <Menu.Button className=' rounded-2xl mt-3' aria-label='more'>
          <ChevronDownIcon className='h-5 w-5' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-8 w-52  rounded-2xl shadow-xl bg-white hover:bg-paper divide-y divide-gray-200 transition duration-500 ease-in-out'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link href='#'>
                  <a
                    href='#'
                    className={`
                   ${
                     active
                       ? 'bg-white text-white'
                       : 'text-paper hover:text-white'
                   }
                   transition duration-500 ease-in-out
                    block px-4 py-2 text-sm 
                  font-montserrat
                  `}
                  >
                    Settings
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
