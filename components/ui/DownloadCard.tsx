import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

interface DownloadCardProps {
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({fileUrl }) => {
  return (
    <div className="w-full p-4 flex flex-col items-center">
      <Link href={fileUrl} target="_blank" download className={cn(buttonVariants({ variant: "outline" }),"text-black")}>
        Download my résumé here!
      </Link>
    </div>
  );
};

export default DownloadCard;
