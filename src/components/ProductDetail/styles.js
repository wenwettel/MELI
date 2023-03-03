import styled from "styled-components";

const DetailStyle = styled.div`
width: 100%;
margin: 0 auto;
max-width: 1363px;
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

const DetailCard = styled.div`
width: 250px;

.condition{
    font-size: 14px;
}
.title{
    font-size: 24px;
    margin-top: 16px;
}
.price{
    font-size: 46px;
    font-weight: 200;
    margin: 32px 0;
}

.buy-button{
    background-color: #3483fa;
    color: white;
    padding: 11px 20px;
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
}


`
export{
    DetailStyle,
    DetailCard
}