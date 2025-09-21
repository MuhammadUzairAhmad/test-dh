"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
});

type ImageUploadProps = {
  onChange: (imageData: string) => void;
  className?: string;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onChange(result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`min-w-[164px] min-h-[164px] bg-[#EFF0F3] rounded-[8px] flex flex-col items-center justify-center gap-[8px] cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {preview ? (
        <div className="relative w-full h-full rounded-[8px] overflow-hidden">
          <Image
            src={preview}
            alt="Uploaded"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : (
        <>
          <AiOutlineCloudUpload
            size={40}
            className="text-[#050D27] opacity-80"
          />
          <span
            className={`${raleway.className} text-sm font-semibold opacity-80 text-[#050D27] underline tracking-[0.5px] leading-[150%]`}
          >
            Upload the image
          </span>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
