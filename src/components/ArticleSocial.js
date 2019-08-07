import React from "react";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";

export default ({ meta, title }) => {
  const url = window.location;
  const shareText = `${title}... #${meta.tags[0]} #${meta.tags[1]}  - ${
    window.location
  } by @luis_acervantes`;

  return (
    <div>
      <Twitter link={url} shareText={shareText} />
      <Facebook link={url} shareText={shareText} />
    </div>
  );
};
