import {
    Button,
    Section,
    Header,
    Text,
    Image,
    Container,
} from "../utils/Utils";
import { useContext } from "react";
import { RootContext } from "../context";

function Home() {
    const { dispatch } = useContext(RootContext);

    return (
        <div>
            <Section text>
                <Header>We’ve done more than 100 works. Big and small</Header>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellendus dolorem numquam autem dignissimos, adipisci
                    ullam at facere voluptatibus vitae, minima facilis ad
                    tempore ipsa cumque! Quis doloribus commodi fuga quas nihil
                    ipsum enim, mollitia odit corrupti aliquam error! Aliquid,
                    necessitatibus.
                </Text>
                <Button>Contact</Button>
            </Section>
        </div>
    );
}

export default Home;
