import { cookies, headers } from "next/headers";

export const GET = async (request) => {
    const requestHeaders = new Headers(request.headers); // method 1
    console.log(requestHeaders.get("Authorization"));

    const headerList = headers(); // method 2
    console.log(headerList.get("Authorization"));

    cookies().set("resultsPerPage", "20"); // method 3
    console.log(cookies().get("resultsPerPage"));
    
    const theme = request.cookies.get("theme");
    console.log(theme);

    return new Response("<h1>Profile API data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}