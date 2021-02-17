export default function Home() {
  const [currentForm, setCurrentForm] = useState<"Part" | "Month" | "Year">(
    "Part"
  );
  return (
    <div className="flex flex-col items-center bg-gray-200 w-full min-h-screen py-12">
      <Head>
        <title>ISS Timeline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl px-12">
        You know how boring it is to just type this shit normally?
      </h1>
      <main className="flex flex-col sm:flex-row items-center justify-evenly w-full text-center h-full my-8 px-12 sm:px-4">
        <OutputContextProvider>
          <div className="w-full sm:w-1/3 mb-8 sm:mb-2">
            <div className="flex flex-wrap">
              <Button
                action={() => {
                  setCurrentForm("Part");
                }}
              >
                Part
              </Button>
              <Button
                action={() => {
                  setCurrentForm("Month");
                }}
              >
                Month
              </Button>
              <Button
                action={() => {
                  setCurrentForm("Year");
                }}
              >
                Year
              </Button>
            </div>
            {
              {
                Part: <IssPartForm />,
                Month: <IssMonthForm />,
                Year: <IssYearForm />,
              }[currentForm]
            }
          </div>
          <div className="w-full sm:w-1/2">
            <OutputSection />
          </div>
        </OutputContextProvider>
      </main>
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";

import Button from "../components/Button";

import IssPartForm from "../components/iss/parts/Form";
import IssMonthForm from "../components/iss/month/Form";
import IssYearForm from "../components/iss/year/Form";

import OutputSection from "../components/iss/OutputSection";
import { OutputContextProvider } from "../components/iss/outputContext";
