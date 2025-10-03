import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PhoneInput from "./phone";

function Profile () {
    const navigate = useNavigate();

    const username = localStorage.getItem('username')

    const handlelogout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <div className='profile-container'>
            <h2>Profile</h2>
            <div className='profile-card'>
                <FaUserCircle size={100} color="#888" />
                {/*
                <img
                    src="/default-avatar.png"
                    alt="user avatar"
                    className="avatar"
                />
                */}
                <h3>{username}</h3>
                <p>Username: {username}</p>
                <p>Email: {username}@gmail.com</p>
                <p>Date of Joining: {Date}</p>
                <p>Member since: 2025</p>  
                <p>Bio: Avid traveler and adventure seeker.</p> 
                <p>Location: {Location}</p>
                <p>Phone:{PhoneInput} </p> 
            </div>
            <button className="logout-btn" onClick={handlelogout}>
                logout
            </button>
        </div>
    )
}

export default Profile