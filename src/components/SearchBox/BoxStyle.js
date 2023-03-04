import styled from 'styled-components';
import Container from '../Commons/Container'

const Header = styled.header`
 background-color: #ffe600;
 height: 72px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 10px;
`

const BoxStyle = styled(Container)`
 display : flex;
 align-items: center;
 height: 46px;
 position: relative;

 form{
    border-radius: 2px;
    height: 100%;
    width: 100%;
 }

 .imgLogo{
    object-fit: cover;
    height: 100%;
    margin-right: 24px;
 }

 .inputSearch{
    border: none;
    font-size: 18px;
    height: 100%;
    border-radius: 2px;
    padding:8px 15px;
    width: 100%;
    outline: none;
}

 .labelSearch{
    position: absolute;
    z-index: -2;
 }

 .imgSearch{
    object-fit: contain;
    width: 43px;
    height: 100%;
    padding: 10px;
    
 }
 
 .button{
    cursor: pointer;
    position: absolute;
    background-color: #eeeeee;
    border-radius: 0 2px 2px 0;
    height: 46px;
    width: 50px;
    right: 0px;
    
 }
`



export {
   BoxStyle,
Header

}

