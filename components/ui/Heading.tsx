import { HTMLAttributes, forwardRef } from "react";

type HeadingVarient = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    varient? : HeadingVarient
};


const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, varient, className, ...props}, ref) => {
    const getHeadingVarient : (varient : HeadingVarient | undefined) => JSX.Element = (varient) => {
        switch(varient) {
            case "h1" : return <h1>{ children }</h1>;
            
            case "h2" : return <h2>{ children }</h2>;
            
            case "h3" : return <h3>{ children }</h3>;
            
            case "h4" : return <h4>{ children }</h4>;
            
            case "h5" : return <h5>{ children }</h5>;
            
            case "h6" : return <h6>{ children }</h6>;

            default : return <>{ children }</>
        }
    };

    return (
        <div ref={ ref } { ...props } className={ "Heading" }>
            { getHeadingVarient(varient) }
        </div>
    )
});
Heading.displayName = "Heading";

export default Heading;