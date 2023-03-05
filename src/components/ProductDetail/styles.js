import styled from "styled-components";
import Container from "../Commons/Container";

const DetailStyle = styled(Container)`
padding-top: 32px;
background-color: white;

.container-detail{
    display: flex;
justify-content: space-around;
}

.img-product{
    object-fit: contain;
    width: 680px;
    height: 600px;
}
.container-description{
    margin-top: 100px;
    width: 70%;
    padding-left:32px;

    h3{
        font-size: 28px;
    }
    p{
        font-size: 16px;
        padding: 32px 0;
    }
}
`

export{
    DetailStyle,
}
