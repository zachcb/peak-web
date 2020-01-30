import React from "react";
import dynamic from "next/dynamic";
import FullscreenLayout from "layouts/Fullscreen";

const Map = dynamic(() => import("components/organisms/Map"), { ssr: false });

type Props = {
  coordinates: [number, number];
};

function Discover({ coordinates }: Props) {
  return (
    <FullscreenLayout>
      <Map
        label="primary-map"
        coordinates={coordinates}
      />
    </FullscreenLayout>
  );
}

export default Discover;
