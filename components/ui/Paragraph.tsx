import { HTMLAttributes, forwardRef } from "react";

type ParagraphVarient = "default" | "small" | "large";
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    varient? : ParagraphVarient
};

const getParagraphVarient : (varient : ParagraphVarient | undefined) => string = (varient) => {
    var className : string = "Paragraph";

    switch(varient) {
        case "small" : className += " small";
        
        case "large" : className += " large";

        //default : 
    }

    return className;
};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ children, varient, className, ...props}, ref) => {
    return (
        <p ref={ ref } { ...props } className={ getParagraphVarient(varient) }>{ children }</p>
    )
});
Paragraph.displayName = "Paragraph";

export default Paragraph;