// eslint-disable-next-line

import React, { useState } from "react";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { db } from "./firebase"

import { useDispatch } from "react-redux";
import { createWord, loadWordFB, createWordFB, loadWord } from "./redux/modules/word";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const Add = (props) => {

    const history = useHistory();

    const word = React.useRef(null);
    const prono = React.useRef(null);
    const mean = React.useRef(null);
    const exK = React.useRef(null);
    const exF = React.useRef(null);
    const remem = React.useRef(null);

    const dispatch = useDispatch();

        return (
            <>
                <WordAddBody>
                    <Label>단어</Label>
                    <Addword type="text" ref={word}></Addword>
                    <Label>발음</Label>
                    <Addword type="text" ref={prono}></Addword>
                    <Label>뜻</Label>
                    <Addword type="text" ref={mean}></Addword>
                    <Label>예문</Label>
                    <Addword type="text" ref={exF}></Addword>
                    <Label>예문의 뜻</Label>
                    <Addword type="text" ref={exK}></Addword>
                    <BackbtmDiv>
                        <SaveBtn onClick={() => {
                        dispatch(createWordFB({
                            word: word.current.value, prono: prono.current.value,
                            mean: mean.current.value, exK: exK.current.value,
                            exF: exF.current.value, remem:false 
                        })
                        )
                        history.push("/")
                    }}>저장하기</SaveBtn>
                        <SaveBtn onClick={()=>{history.push("/")
                        }}>뒤로가기</SaveBtn>
                    </BackbtmDiv>
                </WordAddBody>
            </>
        );
    }

    const WordAddBody = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #DFDFDE;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display: grid;
`

    const Label = styled.label`
cursor: default;
height:10px;
margin: 0%;
padding:0px;
`

    const Addword = styled.input`
background-color: transparent;
border: transparent;
border-bottom: 2px #8D8DAA solid;
height: 2rem;
`

const BackbtmDiv = styled.div`
display: flex;
justify-items: center;
margin:0 auto;
`

    const SaveBtn = styled.button`
background-color: #8D8DAA;
border:transparent;
border-radius: 4px;
box-shadow: 0 3px 2px 0;
height : 40px;
width: 60%;
margin: 0 30px;
`

 export default Add;