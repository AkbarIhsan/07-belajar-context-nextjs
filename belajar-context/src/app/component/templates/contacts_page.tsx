import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPost from "../organisms/allpost";

export default function ContactsPage(){
    return(
        <Section2 isFancy={true}>
            <Heading>Contacts Saya</Heading>
            <Post
                title="Instagram"
                body="akbar.ihs"
                />
                
            <AllPost/>
        </Section2>
    )
}