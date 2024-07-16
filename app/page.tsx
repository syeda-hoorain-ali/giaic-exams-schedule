import Image from "next/image";
import Search from "@/app/components/Search";
import Table from "@/app/components/Table";
import { fetchExams, StudentData } from "@/app/lib/data";

export default async function Home({ searchParams }: {
  searchParams?: { 'roll-no'?: string; }
}) {

  const rollNo = Number(searchParams?.["roll-no"]) || 0
  const {data, error} = await fetchExams(rollNo)

  return (<>

    <nav className="w-full py-3 bg-green-100 flex items-center justify-center relative shadow-nav">

      <Image src="/logo.png" alt="GIAIC Logo"
        className=" w-14 md:w-20 absolute top-1 md:top-10 lg:top-1 left-0 md:left-3"
        width={100} height={100} />

      <span className="w-96 md:w-full text-xl md:text-4xl font-bold font-sans text-center">
        Governor Initiative for Artificial Intelligence and Cloud computing
      </span>
    </nav>

    <main className="mt-10 md:mt-24 flex items-center flex-col gap-5">

      <p className="text-base md:text-xl text-center font-bold">Work hard is the key of success</p>
      <p className="text-base md:text-xl text-center font-bold">Find Your Exam Date: Enter Your Roll Number to Discover Your Exam Schedule!</p>
      
      <Search />
      <Table data={data} error={error} />

      <Image src="/sir-zia.png" alt="Zia Khan" width={400} height={400}
        className="absolute -right-20 bottom-0 hidden lg:block xl:w-[30rem]"
      />

      <Image src="/sir-daniyal.png" alt="Daniyal Nagori" width={300} height={400}
        className="absolute -left-14 bottom-0 hidden lg:block xl:w-96"
      />
    </main>

  </>);
}
