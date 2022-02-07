import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CardItem from "./CardItem"
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import Countryselect from "./Countryselect";



const Container = styled.div`
display:flex;
align-items:center;
justify-content;
flex-direction:column;


`
const HeaderTitle = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
font-size:2rem;


`

const Logo = styled.div`

color:red;
font-weight:3rem;

`

const Title = styled.h1`
font-family: 'Rubik Beastly', cursive;

font-weight:300;
@media(max-width:768px){
    font-size:2rem;
}
`
const Covidspan = styled.span`
color:green;
`
const Trackerspan = styled.span`
color:red;
`

const Summarycontainer = styled.div`
display:flex;
justify-content:space-between;
justify-content:center;
align-item:center;
gap:2em;
@media(max-width:768px){
flex-wrap:wrap;
}
`







const Header = () => {

    const [countries, setCountries] = useState([]);
    const [selectCountry, setSelectedCountry] = useState()
    const [summaries, setSummaries] = useState({})
    useEffect(() => {
        fetchCountries()
        fetchSummaries()

    }, [])



    const fetchCountries = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.covid19api.com/countries", requestOptions)
            .then(response => response.json())
            .then(result => setCountries(result))
            .catch(error => console.log('error', error));


    }


    const fetchSummaries = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        fetch("https://api.covid19api.com/summary", requestOptions)

            .then(response => response.json())
            .then(result => setSummaries(result))
    }
 
    const countrySummary=(countryItem)=>{
if(Object.keys(summaries).length!=0){
const filteredCountry=summaries.Countries.filter(country=>country.Country===countryItem)
console.log(filteredCountry)
}
    }

    return (
        <Container>

            <Container>
            {
                countrySummary(selectCountry)
            }
                <HeaderTitle>
                    <Logo>
                        <CoronavirusTwoToneIcon style={{ fontSize: '4.5rem' }} />
                    </Logo>
                    <Title>
                        <Covidspan>Covid19</Covidspan>-<Trackerspan>tracker</Trackerspan>
                    </Title>
                </HeaderTitle>
                <Countryselect countries={countries} setSelectedCountry={setSelectedCountry} />
                <Summarycontainer>
                    <CardItem title='500,000' cases='Confirmed Cases' update="30" color="red" type='New Cases' />
                    <CardItem title="200,000" cases='Recovered' update='20' color="green" type='Recovered' />
                    <CardItem title="100,000" cases="Confirmed Deaths" update='10' color="grey" type='Deaths' />
                </Summarycontainer>
{console.log(selectCountry)}
            </Container>

        </Container>
    )
}










export default Header