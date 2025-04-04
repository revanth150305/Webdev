import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
    const { onSent,recentPrompt,showResult, resultData, setInput, input, loading } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Shallow</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-cont">
                {!showResult?
                <>
                <div className="great">
                    <p><span>Hello there!</span></p>
                    <p>How can I help you?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Looking for a fun activity to try</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card">
                        <p>Need a suggestion for a beautiful place?</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                    </div>
                    <div className="card">
                        <p>Want a quick tip to make your day better?</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>
                </>
                :<div className='results'>
                    <div className='results-title'>
                        <img src={assets.user_icon}/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className='result-data'>
                        <img src={assets.gemini_icon}/>
                        {loading?
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                    </div>
                    }
                
                <div className="main-bottom-container">
                    <div className="main-bottom">
                        <div className="search-box">
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                placeholder="Enter your prompt"
                            />
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <img
                                onClick={() => onSent(input)}
                                src={assets.send_icon}
                                alt="Send Icon"
                            />
                        </div>
                    </div>
                    <p className="bottom-info">
                        This is a testing version of the chatbot — responses may be incomplete or inaccurate.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Main;