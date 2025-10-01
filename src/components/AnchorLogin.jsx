import { AnchorLoginText } from "./componentsstyle";
import { AnchorLoginTextAnchor } from "./componentsstyle";
import { AnchorLoginTextContainer } from "./componentsstyle";
import { TouchableOpacity } from "react-native";

export default function AnchorLogin({label, anchor, onPress}) {
    return (
        <AnchorLoginTextContainer>
            <AnchorLoginText>{label}</AnchorLoginText>
            <TouchableOpacity onPress={onPress}>
                <AnchorLoginTextAnchor>{anchor}</AnchorLoginTextAnchor>
            </TouchableOpacity>
            
        </AnchorLoginTextContainer>
    )
}