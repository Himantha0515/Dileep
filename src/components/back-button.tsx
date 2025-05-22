"use client"

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on homepage
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-900 text-white hover:bg-primary-700 transition-colors shadow mb-6 mt-4 ml-2"
      aria-label="Go back"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="font-medium">Back</span>
    </button>
  );
} 