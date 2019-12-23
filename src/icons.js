import React from "react";
import { Icon } from "react-icons-kit";
import { ic_local_dining } from "react-icons-kit/md/ic_local_dining";
import { iosSettingsStrong } from "react-icons-kit/ionicons/iosSettingsStrong";
// One place to mange all the Icon to be easy to mange and change
export const IconHome = () => (
  <Icon
    size={200}
    icon={ic_local_dining}
    style={{ color: "rgba(255,255,255,0.5)" }}
  />
);

export const Setting = () => (
  <Icon
    size={60}
    style={{
      color: "rgba(29, 98, 99, 1)",
      marginRight: 20,
      marginLeft: 20,
      backgroundColor: "rgb(224, 242, 242)",
      borderRadius: 10
    }}
    icon={iosSettingsStrong}
  />
);
