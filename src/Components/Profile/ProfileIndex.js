import React from 'react';
import {ReactComponent as UnkownUserPhotoBadge} from '../../Assets/Icons/unknown-user.svg';
import "./ProfileIndex.css"


const ProfileIndex = ({userProfile}) => {

    return (
        <div className='user--profile'>
            <div className='user--profile--photobadge--container'>
                <div className='user--profile--photobadge--photo--container'>
                    <UnkownUserPhotoBadge className='user--profile--photobadge--svg'/>
                </div>
                <div className='user--profile--photobadge--name--container'>
                    <span>{userProfile.name}</span>
                    <img>{/* pencil button here for edit profile page link */ }</img>
                </div>
            </div>

            <div className='user--profile--orders--badges--container'>
                <div className='user--profile--orders--badge--pending--container'>
                    <span className='user--profile--orders--badge--pending--title'>Pending orders</span>
                    <span className='user--profile--orders--badge--pending--value'>0</span> {/* Users Pending Order Count Here*/}

                </div>
                <div className='user--profile--orders--badge--nonpending--container'>
                    <span className='user--profile--orders--badge--nonpending--title'>Orders</span>
                    <span className='user--profile--orders--badge--nonpending--value'>0</span> {/* Users Order Count Here*/}

                </div>
            </div>

            <div className='user--profile--dashboard--container'>
                <div className='user--profile--dashboard--wallet--container'>
                    {/* <img> Wallet Icon Image Here</img> */}
                    <span>Wallet</span>

                </div>
                <div className='user--profile--dashboard--favorite--container'>
                    {/* <img> Favorite Stores Icon Image Here</img> */}
                    <span>Favorite Stores</span>

                </div>
            </div>
            
        </div>
    );
};

export default ProfileIndex;