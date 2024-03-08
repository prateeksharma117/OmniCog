"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Download, Loader } from "lucide-react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import Confetti from "react-confetti";

const TransformedImage = ({
    image,
    type,
    title,
    isTransforming,
    setIsTransforming,
    transformationConfig,
    hasDownload = false,
    transformationPage,
}: TransformedImageProps) => {
    const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault()

        download(
          getCldImageUrl({
            width: image?.width,
            height: image?.height,
            src: image?.publicId,
            ...transformationConfig
          }),title
        );
    };

    const [windowDimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [confetti, setConfetti] = useState(false);
    const [playSound, setPlaySound] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimension]);

    useEffect(() => {
        const audioElement = document.getElementById(
            "confettiSound"
        ) as HTMLAudioElement;

        if (playSound) {
            // Play the sound
            audioElement.play();
        } else {
            // Stop the sound
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }, [playSound]);

    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    return (
      <>
        <div className=" flex flex-col gap-4">
          <div className=" flex-between">
            <h3 className="h3-bold text-black">Transformed</h3>
            {hasDownload && (
              <Button className=" download-btn" onClick={downloadHandler}>
                <Download size={25} className=" pb-[6px]" />
              </Button>
            )}
          </div>

          {image?.publicId && transformationConfig ? (
            <div className=" relative">
              <CldImage
                width={getImageSize(type, image, "width")}
                height={getImageSize(type, image, "height")}
                src={image?.publicId}
                alt="Transformed image"
                sizes={"(max-width: 767px) 100vw, 50vw"}
                placeholder={dataUrl as PlaceholderValue}
                className="transformed-image"
                onLoad={() => {
                  setIsTransforming && setIsTransforming(false);
                  if (transformationPage) {
                    setConfetti(true);
                    setPlaySound(true);
                    setTimeout(() => {
                      setConfetti(false);
                      setPlaySound(false);
                    }, 4000);
                  }
                }}
                onError={() => {
                  debounce(() => {
                    setIsTransforming && setIsTransforming(false);
                  }, 8000)();
                }}
                {...transformationConfig}
              />

              {isTransforming && (
                <div className="transforming-loader text-white">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                      transform="translate(12, 12) scale(0)"
                    >
                      <animateTransform
                        attributeName="transform"
                        calcMode="spline"
                        type="translate"
                        dur="1.2s"
                        values="12 12;0 0"
                        keySplines=".52,.6,.25,.99"
                        repeatCount="indefinite"
                      />
                      <animateTransform
                        attributeName="transform"
                        calcMode="spline"
                        additive="sum"
                        type="scale"
                        dur="1.2s"
                        values="0;1"
                        keySplines=".52,.6,.25,.99"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="1.2s"
                        values="1;0"
                        keySplines=".52,.6,.25,.99"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                  <p className=" text-white/80">Please Wait...</p>
                </div>
              )}
            </div>
          ) : (
            <div className=" transformed-placeholder">Transformed Image</div>
          )}
        </div>

        {confetti && (
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            recycle={false}
            numberOfPieces={800}
            friction={1}
          />
        )}

        <div>
          <audio id="confettiSound" src={"/confetti.mp3"}></audio>
        </div>
      </>
    );
};

export default TransformedImage;
