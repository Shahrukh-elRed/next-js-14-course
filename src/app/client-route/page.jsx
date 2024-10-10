"use client"
import { serverSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
    console.log("client route rendered");
    const result = serverSideFunction();

    return (
        <>
            <h1>Client Route Page</h1>
            <p>{result}</p>
        </>
    )
}

export default ClientRoutePage