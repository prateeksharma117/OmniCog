import React from "react";
import { navLinks } from "../../../../constants";
import Link from "next/link";
import { Collection } from "@/components/shared/Collections";
import { getAllImages } from "@/lib/database/actions/image.action";
import Image from "next/image";
import User from "@/lib/database/models/user.model";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

const page = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";
  const images = await getAllImages({ page, searchQuery });

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
              <li className=" flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="logo" width={24} height={24} />
              </li>
              <p className=" p-14-medium text-center text-white">
                {link.label}
              </p>
            </Link>
          ))}
        </ul>
      </section>

      <section>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default page;
