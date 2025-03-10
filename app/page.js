import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl text-green-300">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="flex flex-col gap-2">
        <Link
          href="/week-2"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week2
        </Link>
        <Link
          href="/week-3"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week3
        </Link>
        <Link
          href="/week-4"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week4
        </Link>

        <Link
          href="/week-5"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week5
        </Link>

        <Link
          href="/week-6"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week6
        </Link>
        <Link
          href="/week-7"
          className="hover:text-violet-600 active:text-violet-700"
        >
          week7
        </Link>
      </div>
    </div>
  );
}
