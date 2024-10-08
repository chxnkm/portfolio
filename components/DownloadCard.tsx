import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DownloadCardProps = {
  fileUrl: string;
}

const DownloadCard = ({fileUrl}: DownloadCardProps) => {
  return (
    <div className="w-full p-4 flex flex-col items-center">
      <Link href={fileUrl} target="_blank" rel="noopener noreferrer" download className={cn(buttonVariants({ variant: "outline" }),"text-black")}>
        Download my résumé here!
      </Link>
    </div>
  );
};

export default DownloadCard;
