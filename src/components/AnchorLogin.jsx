import { AnchorLoginText } from "./componentsstyle";
import { AnchorLoginTextAnchor } from "./componentsstyle";
import { AnchorLoginTextContainer } from "./componentsstyle";

export default function AnchorLogin({label, anchor}) {
    return (
        <AnchorLoginTextContainer>
            <AnchorLoginText>{label}</AnchorLoginText>
            <AnchorLoginTextAnchor>{anchor}</AnchorLoginTextAnchor>
        </AnchorLoginTextContainer>
    )
}