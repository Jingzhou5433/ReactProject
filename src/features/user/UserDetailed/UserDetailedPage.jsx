import React, { Component } from 'react';
import {Grid} from "semantic-ui-react";
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedDescription from './UserDetailedDescription';
import UserDetailedSiderbar from './UserDetailedSiderbar';
import UserDetailedPhoto from './UserDetailedPhoto';
import UserDetailedEvent from './UserDetailedEvent';

const query = ({auth}) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{collection: 'photos'}],
            storeAs: 'photos'
        }
    ]
}


const mapState = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos
});

class UserDetailedPage extends Component{
    render(){
        const {profile,photos} = this.props;
        return (
            <Grid>
                <UserDetailedHeader profile = {profile}/>
                <UserDetailedDescription profile = {profile}/>
                <UserDetailedSiderbar/>
                 {photos && photos.length > 0 &&
                    <UserDetailedPhoto photos = {photos}/>
                 } 
                <UserDetailedEvent/>
            </Grid>
        );
    }
}
    


export default compose(
    connect(mapState),
    firestoreConnect(auth => query(auth)),
)(UserDetailedPage);
