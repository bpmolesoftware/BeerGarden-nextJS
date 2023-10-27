import '@/styles/global.scss';

import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className=" border-gray-300">
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Add to Favourites
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/guestbook/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <main className="content py-5 text-xl">{props.children}</main> */}
    </div>
  </div>
);

export { Main };
