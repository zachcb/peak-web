import React, { Component } from "react";
import { fetchCoordinates } from "utils";

type Props = {
  children?: React.ReactNode;
}

type State = {
  coordinates: [number, number];
}

type Context = {
  state: State;
  update: React.Dispatch<React.SetStateAction<typeof defaultState>>;
}

const defaultState: State = {
  coordinates: [0, 0]
};

const GeolocationContext = React.createContext<Context>({
  state: defaultState,
  update: () => defaultState
});

class GeolocationProvider extends Component<Props, State> {
  async componentDidMount() {
    const coordinates = await fetchCoordinates();
    this.setState({ coordinates });
  }

  render() {
    const { children } = this.props;
    const { state, update } = React.useContext(GeolocationContext);

    return (
      <GeolocationContext.Provider
        value={{
          coordinates: state.coordinates
        }}>
        {children}
      </GeolocationContext.Provider>
    )
  }
}

export { GeolocationContext, GeolocationProvider };
