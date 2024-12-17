"use client";

import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DownloadButton = () => {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.status === 200) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Gonzalo_Aguilar_CV.pdf');
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) link.parentNode.removeChild(link);
        toast({
          variant: "success",
          title: "Done! Feel free to contact me via e-mail.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Please contact me via e-mail",
        description: "I'm very sorry. There was an error trying to download the CV. You can try again or contact me.",
      })
      console.error('There was an error downloading the file:', error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-md p-5 rounded-lg shadow-md hover:shadow-lg inline-flex justify-center"
    >
      <Download /> Download Resume
    </Button>
  );
};

export default DownloadButton;
