import { useState } from "react";
export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);
    return display ? (
        <div><h3>This is true</h3></div>
    ) : (
        <div><h3>this is false</h3></div>
    );


}