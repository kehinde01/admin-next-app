import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (<>
        <Head>
            <title>Admin profile</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>);
}

export default Layout;