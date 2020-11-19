import React, {Component} from "react";

import classes from './Profile.module.css'
import MyPosts from "./allPosts/MyPosts";
import Music from "./music/Music";
import Groups from "./groups/Groups";
import Friends from "./friends/Friends";
import CreatePost from "./createPost/CreatePost";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Photo from "./photo/Photo";
import AllPhotos from "./allPhotos/AllPhotos";

const  Profile = () =>{

        return (
            <div className={classes.Profile}>

                <Photo/>
                <ProfileInfo/>
                <AllPhotos/>
                <CreatePost/>
                <MyPosts/>
                <Friends/>
                <Groups/>
                <Music/>





            </div>
        );


}

export default Profile;
