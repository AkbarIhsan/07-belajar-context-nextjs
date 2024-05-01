'use client';

import MyApp from "../component/atoms/myapp";
import ContactsPage from "../component/templates/contacts_page";

export default function Home(){
  return <MyApp Component={ContactsPage} pageProps={undefined}/>
}