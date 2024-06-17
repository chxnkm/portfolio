import React from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

interface DownloadCardProps {
  fileName: string;
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ fileName, fileUrl }) => {
  return (
    <Card className="w-full p-4 mt-8">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{fileName}</h3>
        <a href={fileUrl} download className="inline-block bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded">
          Download
        </a>
      </CardHeader>
    </Card>
  );
};

export default DownloadCard;
