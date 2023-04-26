import { Base, Swatch, Swatches } from "./SwatchList.styles";

interface Props {
  [x: string]: any;
}

const SwatchList = ({ swatches }: Props) => {
  return (
    <Base>
      {Object.keys(swatches).map((key) => {
        const section = swatches[key];

        if (typeof section === "string") {
          return null;
        }
        return (
          <Swatches key={key}>
            <h3>
              {key.charAt(0).toUpperCase()}
              {key.slice(1)}
            </h3>
            {Object.keys(section).map((key2) => {
              const color = section[key2];
              console.log(color);
              return (
                <Swatch
                  key={key2}
                  style={{ backgroundColor: color, padding: "4px 8px" }}
                >
                  {color}
                </Swatch>
              );
            })}
          </Swatches>
        );
      })}
    </Base>
  );
};

export default SwatchList;
