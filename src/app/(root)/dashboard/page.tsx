import { UserButton } from "@clerk/nextjs";
import React from "react";
import { navLinks } from "../../../../constants";
import Link from "next/link";
import { Collection } from "@/components/shared/Collections";
import { getAllImages } from "@/lib/database/actions/image.action";

const page =async ({searchParams}:SearchParamProps) => {
  
  const page = Number(searchParams?.page) || 1;
  const searchQuery=(searchParams?.query as string)||""
  const images=await getAllImages({page,searchQuery})

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Take advantage of AI tools to be more creative and complete tasks
          faster
        </h1>
        <ul className=" flex-center w-full gap-20">
          {navLinks.slice(1, 6).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className=" flex-center w-fit rounded-full bg-white p-4">{link.icon}</li>
              <p className=" p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section>
        <Collection
        hasSearch={true}
        images={images?.data}
        totalPages={images?.totalPages}
        page={page}
        />
      </section>
    </>
  );
};

export default page;
