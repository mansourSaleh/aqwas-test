import React from 'react'
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import {ic_local_dining} from 'react-icons-kit/md/ic_local_dining'
import {iosSettingsStrong} from 'react-icons-kit/ionicons/iosSettingsStrong'
// import {ic_local_dining} from 'react-icons-kit/md/ic_local_dining'
// import { MdRestaurantMenu } from "react-icons/md";
import {location} from 'react-icons-kit/icomoon/location'
export const IconHome =  () => <Icon size={200} icon={ic_local_dining} style={{color: "rgba(255,255,255,0.5)"}} />
// export const Location =  () => <Icon style={{position: "absolute"}} icon={location} />
export const Setting =  () => <Icon  size={60} style={{color: "rgba(29, 98, 99, 1)", marginRight: 10, marginLeft: 10, backgroundColor: "rgb(224, 242, 242)", borderRadius: 10}} icon={iosSettingsStrong} />