import { Text, Image } from "react-native";
import { CircleSocial } from "./componentsstyle";
import { Social } from "./componentsstyle";
import { ContentSocial } from "./componentsstyle";
export default function SocialIcons({img}) {
    return(
        <Social>
            <CircleSocial>
                <ContentSocial source={require("../assets/FacebookIcon.png")}/>
            </CircleSocial>
            <CircleSocial>
                <ContentSocial source={require("../assets/GoogleIcon.png")}/>
            </CircleSocial>
            <CircleSocial>
                <ContentSocial source={require("../assets/InstagramIcon.png")}/>
            </CircleSocial>
        </Social>

        
    )
}