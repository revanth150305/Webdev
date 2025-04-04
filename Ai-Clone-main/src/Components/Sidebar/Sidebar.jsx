import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt,newchat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='Sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} />
                <div onClick={()=>newchat()} className='new-chat'>
                    <img src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'> {/* Add key prop */}
                                    <img src={assets.message_icon} />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} />
                    {extended ? <p>History</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
