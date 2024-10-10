import fs from "fs";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-two.jsx", "utf-8");

    return (
        <>
            <h1>Server component one</h1>
        </>
    )
}
