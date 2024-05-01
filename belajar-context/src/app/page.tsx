'use client';

import MyApp from "./component/atoms/myapp";
import MainPage from "./component/templates/main_page";

export default function Home(){
  return <MyApp Component={MainPage} pageProps={undefined}/>
}