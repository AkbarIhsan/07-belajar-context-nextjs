import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPost from "../organisms/allpost";

export default function AboutPage(){
    return(
        <Section2 isFancy={true}>
            <Heading>About Me</Heading>
            <Post
                title="Akbar Ihsan"
                body="ganteng bgt"
                />
                
            <AllPost/>
        </Section2>
    )
}