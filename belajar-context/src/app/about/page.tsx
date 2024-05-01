'use client';

import MyApp from "../component/atoms/myapp";
import AboutPage from "../component/templates/about_page";

export default function Home(){
  return <MyApp Component={AboutPage} pageProps={undefined}/>
}