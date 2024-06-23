import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";

interface DownloadCardProps {
  fileName: string;
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ fileName, fileUrl }) => {
  return (
    <div className="w-full p-4 mt-8 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">{fileName}</h3>
      <Link href={fileUrl} className={buttonVariants({ variant: "default" })}>
        Download
      </Link>
    </div>
  );
};

export default DownloadCard;
