'use client';

import ProfilePage from "../component/templates/profile_page";
import MyApp from "../component/atoms/myapp";

export default function Home(){
  return <MyApp Component={ProfilePage} pageProps={undefined}/>
}