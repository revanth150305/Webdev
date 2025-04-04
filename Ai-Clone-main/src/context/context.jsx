import React, { createContext, useState } from 'react';
import run from "../config/gemeni";

const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nxtword) => {
        setTimeout(() => {
            setResultData(prev => prev + nxtword);
        }, 75 * index);
    };

    const onSent = async (prompt) => { 
        setResultData(""); 
        setLoading(true);
        setShowResult(true);

        let response;
        let finalPrompt = prompt ?? input; 

        if (!prevPrompt.includes(finalPrompt)) {
            setPrevPrompt(prev => [...prev, finalPrompt]);
        }

        setRecentPrompt(finalPrompt);
        response = await run(finalPrompt);


        let responseArray = response.split("**");
        let newres = responseArray.map((item, index) => 
            index % 2 === 0 ? item : `<b>${item}</b>`
        ).join("");

        let formattedResponse = newres.split("*").join("</br>");
        let wordsArray = formattedResponse.split(" ");

        wordsArray.forEach((word, i) => delayPara(i, word + " "));

        setLoading(false);
        setInput("");
    };

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        setRecentPrompt,
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        run,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export { Context };
export default ContextProvider;
