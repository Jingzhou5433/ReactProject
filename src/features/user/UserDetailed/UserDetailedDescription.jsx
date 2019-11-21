import React from 'react'
import { Grid, Segment, Header, Item } from 'semantic-ui-react'
import { format } from 'date-fns';


const UserDetailedDescription = ({profile}) => {
    return (
        <Grid.Column width={12}>
                    <Segment>
                        <Grid columns={2}>
                            <Grid.Column width={10}>
                                <Header icon='smile' content= 'About me'/>
                                <p>I am a:  <strong>{profile.occupation||'Unknow Occupation'}</strong></p>
                                <p>Originally from:  <strong>{profile.origin||'United Kingdom'}</strong></p>
                                <p>Member Since:  <strong>{profile.createdAt && format(profile.createdAt.toDate(), 'dd LLL yyyy')}</strong></p>
                                <p>Description of user: </p>
                                <p>{profile.about}</p>

                            </Grid.Column>
                            <Grid.Column width={6}>

                                <Header icon='heart outline' content='Interests'/>
                               
                                {profile.interests ? 
                                    profile.interests.map((interest,index) => 
                                        <Item key={index}>
                                         <i class="heart icon">{interest}</i>
                                         <br/>
                                         <br/>
                                        </Item>
                                    ):
                                    <p>No Interest</p>
                                }
                            
                                
                            </Grid.Column>
                        </Grid>

                    </Segment>
                </Grid.Column>
    )
}



export default UserDetailedDescription
