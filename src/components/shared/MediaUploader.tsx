"use client";

import React from "react";
import { toast, useToast } from "@/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Upload } from "lucide-react";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: "Image Uploaded Successfully",
      description: "1 credit was deducted from your account",
      duration: 3000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Please try again",
      description: "Something went wrong while uploading",
      duration: 3000,
      className: "error-toast",
    });
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="OmniCog"
        options={{
          multiple: false,
          resourceType: "image",
        }}
        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
      >
        {({ open }) => (
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-black">Original</h3>
            {publicId ? (
              <>
                <div className="cursor-pointer overflow-hidden rounded-md">
                  <CldImage
                    width={getImageSize(type, image, "width")}
                    height={getImageSize(type, image, "height")}
                    src={publicId}
                    alt="image"
                    sizes={"(max-width: 767px) 100vw, 50vw"}
                    placeholder={dataUrl as PlaceholderValue}
                    className="media-uploader_cldImage"
                  />
                </div>
              </>
            ) : (
              <div className="media-uploader_cta" onClick={() => open()}>
                <div className="media-uploader_cta-image">
                  <Upload size={25} />
                </div>
                <p className=" p-14-medium">Click here to upload image</p>
              </div>
            )}
          </div>
        )}
      </CldUploadWidget>
    </>
  );
};

export default MediaUploader;