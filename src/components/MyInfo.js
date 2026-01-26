import "../stylesheets/StyleMyInfo.js";
import { StyleMyInfo } from "../stylesheets/StyleMyInfo";
import { getSanityImage } from "../utils/imageOptimization";

export default function MyInfo(props) {
  const optimizedImageUrl = getSanityImage('square', props.userImage);
  const backgroundImage = {
    backgroundImage: "url(" + optimizedImageUrl + ")",
  };

  return (
    <div className="card card0" style={backgroundImage}>
      <StyleMyInfo></StyleMyInfo>
    </div>
  );
}
