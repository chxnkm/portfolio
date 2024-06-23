import React from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

interface DownloadCardProps {
  fileName: string;
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ fileName, fileUrl }) => {
  return (
    <Card className="w-full p-4 mt-8 bg-background border-1 border-[#bc7b0b]">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{fileName}</h3>
        <a href={fileUrl} download className="inline-block bg-[#bc7b0b] text-white py-2 px-4 rounded">
          Download
        </a>
      </CardHeader>
    </Card>
  );
};

export default DownloadCard;
