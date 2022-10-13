import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Item = ({text, href, active }: any) => {

    return(
        <Link href={href}>
        <Button>
        <a
            className={`nav__item ${
            active ? "active" : ""
            }`}
        >
        {text}
      </a>
      </Button>
    </Link>
    );
};

export default Item;