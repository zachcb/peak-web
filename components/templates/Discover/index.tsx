import React from 'react';
import dynamic from 'next/dynamic';
import DefaultLayout from 'layouts/Default';

const Map = dynamic(() => import('components/organisms/Map'), { ssr: false });

type Props = {
  coordinates: [number, number];
};

const Discover: React.FC<Props> = ({ coordinates }: Props) => {
  return (
    <DefaultLayout>
      <Map label="primary-map" coordinates={coordinates} />
    </DefaultLayout>
  );
};

export default Discover;
