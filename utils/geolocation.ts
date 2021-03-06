export interface Coordinates {
  latitude: number;
  longitude: number;
}

export function getCurrentPosition(options: object = {}): Promise<{ coords: Coordinates }> {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export async function fetchCoordinates() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  try {
      const { coords } = await getCurrentPosition(options);
      const { latitude, longitude } = coords;

      return [latitude, longitude];
  } catch (error) {
      console.error(error);
  }
}
