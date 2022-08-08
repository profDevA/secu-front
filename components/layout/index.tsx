import Head from "next/head";
import Header from "../header";

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="container mx-auto px-4 min-h-screen">
      <Head>
        <title>{`${pageTitle} - ABC Ventures Capital`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full h-full min-h-[500px] pt-20">{children}</main>
    </div>
  );
};

export default Layout;
