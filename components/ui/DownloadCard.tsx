import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

interface DownloadCardProps {
  fileName: string;
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ fileName, fileUrl }) => {
  return (
    <div className="w-full p-4 mt-8 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">{fileName}</h3>
      <Link href={fileUrl} target="_blank" download className={cn(buttonVariants({ variant: "default" }),"text-black")}>
        Download
      </Link>
    </div>
  );
};

export default DownloadCard;
