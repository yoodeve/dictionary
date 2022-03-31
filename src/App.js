import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {createWord} from "./redux/modules/word"

import Main from "./Main_copy";
import Add from "./Add";
import {useDispatch} from "react-redux"
// import Detail from "./Add";


function App() {
const [words, setWord] = React.useState(0);

  return (
    <div className="App">
      <Container>
        <WordListHead>
          <Daneo>항해 단어장</Daneo>
          <Line />
        </WordListHead>
        <Route 
        path="/" 
        exact
        render={(props)=>(<Main words={words}/>)}/>
        <Route path="/addition" component={Add} />
      </Container>
    </div>
  );
}

const Container = styled.div`
max-width: 100%;
min-height: 90vh;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
`;

const WordListHead = styled.div`
max-width: 100%;
min-height: 5vh;
padding: 16px 0px 10px 0px;
font-weight: bold;
`

const Daneo = styled.p`
font-size: 24px;
text-align: center;
`

const Line = styled.hr`
border-top: 3px double #bbb;
width:100%;
`


export default App;