import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

import "./server-route.css";

const ServerRoutePage = () => {
    console.log("server route rendered");
    const result = serverSideFunction();

    return (
        <>
            <h1>Server Route Page</h1>
            <p>{result}</p>
            <ImageSlider />
        </>
    )
}

export default ServerRoutePage