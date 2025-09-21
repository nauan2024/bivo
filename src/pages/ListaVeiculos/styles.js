import styled from "styled-components"

export const ContainerListaVeiculos = styled.View`
flex: 1;
background-color: #00A6FB;
width:"100%";
display: flex;
gap: 50px;`

export const Upbar = styled.View`
display:flex;
flex-direction:row ;
background-color: #0582CA;
width:100%;
height:10%;`

export const Downbar = styled.View`
display:flex;
justify-content:Bottom;
background-color: #0582CA;
width:100%;
height:17%;
position:absolute;
bottom:0px;
gap:20px;
padding-left:30%;
padding-right:30%;
border: solid white 0.5px;
`

export const TitleLeft = styled.Text`
width:auto;
display: flex;
color: white;
font-size: 50;
justify-content:center;
align-self:flex-start;
margin-left:20px;


`
export const Logotipo = styled.Image`
width:50px;
height:70px;
align-self:flex-end;
margin-left:45%;
`
export const ContainerCards = styled.View`
width:100%;
height:90%;
gap:30px;`

export const ComponentContainerCards = styled.View`
color: white;
gap:20px;
margin-right:40%;
align-items:flex-end;
justify-content:space-between;
`

export const CardInfo = styled.View`
align-self:center;
background-color:#003554;
width: 70%;
height:15%;
border-radius:10px;
flex-direction: row;
color: white;

`

export const CamposCards = styled.Text`
color: white;
font-size:13px;
`

export const LineDivision = styled.View`

height: 1;
background-color: #FFF;
width: 100%;
margin-top: 10;
position:absolute;
bottom: 50px;
`