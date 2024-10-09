import { cookies } from "next/headers";

const AboutPage = () => {
    console.log("About Server Component");
        
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);

    return (
        <h1>About Page {new Date().toLocaleTimeString()}</h1>
    )
}

export default AboutPage