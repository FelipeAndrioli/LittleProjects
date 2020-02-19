import React from 'react';
import { Title, HeaderTitle, TextContainer, Img, SubTitle, Text } from './style/componentsStyle'
import GlobalStyle from './style/global'
//import Img from 'react-image'

function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <HeaderTitle>
        <Title>Leonardo da Vinci</Title>
      </HeaderTitle>
      
      <TextContainer>
        <Img src = {require('./Images/Leonardo.jpg')} />
        <Text>
          Leonardo da Vinci was a Renaissance artist and engineer, known for paintings like "The Last Supper" and "Mona Lisa,” and for inventions like a flying machine.
        </Text>
        <Text>
          <br />
          <SubTitle>Who Was Leonardo da Vinci?</SubTitle>
          <br />
          Leonardo da Vinci was a Renaissance painter, sculptor, architect, inventor, military engineer and draftsman — the epitome of a true Renaissance man. Gifted with a curious mind and a brilliant intellect, da Vinci studied the laws of science and nature, which greatly informed his work. His drawings, paintings and other works have influenced countless artists and engineers over the centuries. 
        </Text>
        <br />
        <SubTitle>Early Life</SubTitle>
        <br />
        <Text>
          Da Vinci was born in a farmhouse outside the village of Anchiano in Tuscany, Italy (about 18 miles west of Florence) on April 15, 1452.
        </Text>
        <br />
        <Text>
          Born out of wedlock to respected Florentine notary Ser Piero and a young peasant woman named Caterina, da Vinci was raised by his father and his stepmother. 
        </Text>
        <br />
        <Text>
          At the age of five, he moved to his father’s estate in nearby Vinci (the town from which his surname derives), where he lived with his uncle and grandparents.
        </Text>
        <br />
        <SubTitle>Education</SubTitle>
        <br />
        <Text>
        Young da Vinci received little formal education beyond basic reading, writing and mathematics instruction, but his artistic talents were evident from an early age.
        </Text>
        <br />
        <Text>
        Around the age of 14, da Vinci began a lengthy apprenticeship with the noted artist Andrea del Verrocchio in Florence. He learned a wide breadth of technical skills including metalworking, leather arts, carpentry, drawing, painting and sculpting. 
        </Text>
        <br />
        <Text>
        His earliest known dated work — a pen-and-ink drawing of a landscape in the Arno valley — was sketched in 1473.
        </Text>
      </TextContainer>
    </div>
  );
}

export default App;
