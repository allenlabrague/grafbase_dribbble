"use client";

import ThemeButton from "./ThemeButton";

import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const TooltipHover = () => {
  const { data: session } = useSession();
  return (
    <div className="p-5 rounded-lg w-[320px]">
      <div className="flex flex-col items-center justify-between">
        <Image
          src={session?.user.image}
          className="rounded-full"
          width={80}
          alt="profile"
        />
        <h2 className="mt-5">{session.user.name}</h2>
        <div className="py-6">
          <Button radius="sm">
            <Link href="/create-project">Share work</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2>Profile</h2>
        <h2>Work preferences</h2>
        <h2>Settings</h2>
      </div>
      <div className="mt-4 py-4 border-t-[1px] border-y-gray-50 flex items-center justify-between">
        <button type="button" onClick={signOut}>
          Sign Out
        </button>
        <ThemeButton />
      </div>
    </div>
  );
};

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav>
      <div className="flex items-center gap-3">
        {session?.user ? (
          <div className="flex items-center gap-5">
            <div className="hidden xl:flex">
              <Button radius="sm">
                <Link href="/create-project">Share work</Link>
              </Button>
            </div>
            <Popover backdrop="opaque" placement="bottom-end">
              <PopoverTrigger>
                <Image
                  src={session?.user.image}
                  className="rounded-full cursor-pointer "
                  width={40}
                  alt="profile"
                />
              </PopoverTrigger>
              <PopoverContent>
                <TooltipHover />
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Log in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
