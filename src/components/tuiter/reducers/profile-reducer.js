
const profileData = {
    firstName: 'Mario', lastName: 'ThePlumber', handle: 'ItsAMario',
    profilePicture: 'images/user.png', 	bannerPicture: 'images/polyglot.jpeg',
    bio: 'Plumbing enthusiast, long time lover of games and fun',
    website: 'youtube.com/webdevtv',
    location: 'New York, NY',	dateOfBirth: '7/7/1848',	dateJoined: '4/2019',
    followingCount: 312,	followersCount: 180, tuitCount: 1203
}

const profileReducer = (state = profileData, action) => {
    switch(action.type){
        case 'update-profile':
            console.log(action.profile);
            return (action.profile);
        default:
            return (state);
    }
};

export default profileReducer;