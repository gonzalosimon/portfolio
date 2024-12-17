import React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { clientsList } from "@/lib/lists";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import profileImage from '@/public/main_profile.jpg';
import { ModeToggle } from "@/components/ToggleTheme";
import DownloadButton from "@/components/DownloadButton";

export default function Resume() {
  return (
    <div className="bg-[rgb(var(--background))] px-36 py-12">
      <div className="flex flex-row justify-between items-center mb-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-sm font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Link>

        <ModeToggle />
      </div>

      <div className="bg-[rgb(var(--card-background))] rounded-lg shadow p-6 flex justify-between items-center space-x-6 mb-10">
        <div className="flex items-center space-x-6">
          <Avatar className="w-24 h-24">
            <Image src={profileImage} alt="picture of Gonzalo" />
            <AvatarFallback className="bg-gray-300 text-gray-600">JL</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">Gonzalo Simon Aguilar</h1>

            <p className="">Software Engineer</p>

            <p className=" mt-1">
              Córdoba, Argentina
            </p>
          </div>
        </div>

        <a
          href="/aguilar_cv.pdf"
          download="Gonzalo_Aguilar_CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
        >
          <DownloadButton />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Experience Section */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Experience</h2>

          {clientsList.map((client) => (
            <div
              key={client.index}
              className="bg-[rgb(var(--card-background))] rounded-lg shadow p-6 mb-6"
            >
              <h3 className="text-lg font-semibold">
                {client.position}
              </h3>

              <p className="">{client.client}</p>

              <p className="">{client.date}</p>

              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{client.description}</li>
                <li>
                  <strong>Tools:</strong> {client.tools}
                </li>
                <li>
                  <strong>Skills:</strong> {client.skills}
                </li>
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Education</h2>

          <div className="bg-[rgb(var(--card-background))] rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">BSc in Computer Science</h3>
            <p className="">University of London | 2024 - Currently Enrolled</p>
          </div>
        </section>
      </div>
    </div>
  );
}
