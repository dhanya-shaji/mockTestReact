import React, { Fragment } from 'react';
import style from './App.css'
const Profile = () => {
    return (
        <Fragment>
            <div className={style.profile}>User profile data
                <h1>Dhanya Shaji</h1>
                <p>Engineer</p>
            </div>
        </Fragment>
    )
}
export default Profile;