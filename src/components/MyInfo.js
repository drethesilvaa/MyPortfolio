import "../stylesheets/StyleMyInfo.js";
import { StyleMyInfo } from "../stylesheets/StyleMyInfo";

export default function MyInfo(props) {
  const backgroundImage = {
    backgroundImage: "url(" + props.userImage + ")  ",
  };

  return (
    <div className="card card0" style={backgroundImage}>
      <StyleMyInfo></StyleMyInfo>
    </div>
  );
}
