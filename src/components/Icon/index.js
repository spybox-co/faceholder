// import parse from "html-react-parser";
// import feather from "feather-icons";
import { SWMIcon } from "react-swm-icon-pack";

// API
// https://github.com/feathericons/feather#feathericonsnametosvgattrs

// SVG Sprite
// https://stackoverflow.com/questions/42296499/how-to-display-svg-icons-svg-files-in-ui-using-react-component

// Processing SVG -> React js (lib/node modules)
// https://pulkitgoyal.in/transform-svg-icons-and-images-to-react-component

export default function Icon({ type, className, size, color, set, stroke }) {
  const classes = [className && className, "spbx--icon"].join(" ").trim();
  return (
    <span className={classes}>
      <SWMIcon
        className="dupa"
        name={type || "Circle"}
        color={color || "currentColor"}
        set={set || "oultine"}
        size={size || 16}
        strokeWidth={stroke || 2}
      />
    </span>
  );
}

/*
export default function Icon({ type, className, stroke }) {
  const name = type || "circle";

  const IconComponent = feather.icons[name].toSvg({
    class: className || "",
    "stroke-width": stroke || 1,
    color: "currentColor",
    width: 16,
    height: 16
  });

  return parse(IconComponent);
}
*/
