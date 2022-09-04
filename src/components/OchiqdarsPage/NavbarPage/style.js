import styled from "styled-components";
import circles from '../../../assets/img/circles.png'


export const Navbarcon = styled.div`
background-image: url(${circles});
height: 574px;
background-color: black;
background-size: cover;
background-position: center;
`






export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 30px;

`

export const Logo = styled.img`
width: 129px;
height: 48px;
margin-left: 70px;
`

export const Navbarright = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 115px;
width: 400px;
p{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    cursor: pointer;
}
`

export const Border = styled.div`
border: 1px solid #FFFFFF;
transform: rotate(90deg);
width: 20px;
`

export const Navhome = styled.div`
color: #fff;
padding-top: 116px;
margin-left: 120px;
h1{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
}
p{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
}
`