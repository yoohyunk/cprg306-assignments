import Image from "next/image";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl text-green-300">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col gap-2">
        <a href="/week-2" className="hover:text-violet-600 active:text-violet-700">week2</a>
      </div>
    </div>
    
  );
}
