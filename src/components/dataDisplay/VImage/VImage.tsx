import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import VLoading from "../../feedback/VLoading";
import VCloudOffIcon from "../icons/VCloudOffIcon";
import { Base, Container, Img } from "./VImage.styles";

interface Props {
  alt?: string;
  className?: string;
  fit?: "contain" | "cover";
  height?: string;
  url: string;
  width?: string;
  [x: string]: any;
}

const VImage = ({
  alt = "",
  fit = "cover",
  height,
  url,
  width,
  ...rest
}: Props) => {
  const [status, setStatus] =
    useState<"loading" | "complete" | "error">("loading");

  useEffect(() => {
    const onLoad = () => {
      cleanUp();
      setStatus("complete");
    };

    const onError = () => {
      cleanUp();
      setStatus("error");
    };

    const image = new Image();
    image.addEventListener("load", onLoad, false);
    image.addEventListener("error", onError, false);
    image.src = url;

    const cleanUp = () => {
      image?.removeEventListener("load", onLoad);
      image?.removeEventListener("error", onError);
    };

    return cleanUp;
  }, [url]);

  return (
    <Base height={height} width={width} {...rest}>
      <AnimatePresence>
        {status === "loading" && (
          <Container
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VLoading key={"loading"} />
          </Container>
        )}
        {status === "complete" && (
          <Img
            alt={alt}
            animate={{ opacity: 1 }}
            height={height}
            initial={{ opacity: 0 }}
            src={url}
            transition={{ duration: 1 }}
            width={width}
          />
        )}
        {status === "error" && (
          <Container
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VCloudOffIcon key={"error"} />
          </Container>
        )}
      </AnimatePresence>
    </Base>
  );
};

export default VImage;
