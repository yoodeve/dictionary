// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB } from "./redux/modules/word";

const Main = (props) => {
    // console.log(props.words)
    let history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(loadWordFB());
    }, [])

    //여기에 useEffect


    const word_list = useSelector((state) => state.word.list);

    return (
        <><BtnDiv>
            <AddBtn onClick={() => {
                history.push("/addition");
            }}>추가하러 가기</AddBtn>
        </BtnDiv>
            <WordListBody>
                {word_list.map((list, id) => {
                    return (<Card>
                        <CardHead>
                            <Word
                                className="wordList"
                                key={id}>
                                {list.word}</Word>
                            <Blank />
                            <Buttons>
                                <Btn1>외움</Btn1>
                            </Buttons>
                        </CardHead>
                        <CardBody>
                            <InputB>/{list.prono}/</InputB>
                            <InputB>의  미 : {list.mean}</InputB>
                            <Ex>
                                <InputB>{list.exF}</InputB>
                                <InputB>{list.exK}</InputB>
                            </Ex>
                        </CardBody>
                    </Card>);
                })}

            </WordListBody>
        </>
    );
}


const WordListBody = styled.div`
display: flex;
/* justify-content: space-between; */
margin: 70px 70px;
margin-top: 65px;
flex-wrap: wrap;
float: left;
`

const BtnDiv = styled.div`
display: flex;
justify-content: center;
`
const Blank = styled.div`
height:100%;
width:80px;
`
const Card = styled.div`
background-color: #DFDFDE;
height: 100%;
width: 30%;
text-align: left;
margin: 10px 10px 10px 0px;
padding: 10px 10px 10px 10px;
border: dotted 2px #F56D91;
`

const CardHead = styled.div`
display: flex;
`

const Word = styled.p`
font-size: 24px;
font-weight: bolder;
width: 150px;
`

const Buttons = styled.div`
display: flex;
`

const Btn1 = styled.button`
background-color: transparent;
border-radius: 5px;
border:transparent #8D8DAA;
box-shadow: 0px 1px 3px 0px #dadce0;
height:30px;
width:50px;
`

const CardBody = styled.div`
`

const InputB = styled.p`
border-bottom: 2px #F56D91 solid;
`

const Ex = styled.div`
color: #3E64FF;
`

const AddBtn = styled.button`
background-color: #F56D91;
border:transparent;
border-radius: 25px;
width: 70%; 
height: 50px;
`
export default Main;