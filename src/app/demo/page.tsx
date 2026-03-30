import Link from "next/link";

export const metadata = {
  title: "Demo",
  description: "Placeholder demo route.",
};

export default function DemoPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-neutral-100 px-6 text-center dark:bg-neutral-950">
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        Demo page — navbar lives on the{" "}
        <Link
          href="/"
          className="font-medium text-neutral-900 underline dark:text-white"
        >
          home page
        </Link>
        .
      </p>
    </div>
  );
}
