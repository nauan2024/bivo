import { Text, Image } from "react-native";
import { CircleSocial } from "../pages/entrada/styles";
import { Social } from "../pages/entrada/styles";
import { ContentSocial } from "../pages/entrada/styles";
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