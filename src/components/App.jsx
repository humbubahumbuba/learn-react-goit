import User from '../data/user'
import { Profile } from "./Profile/Profile";


export const App = () => {
  return (
    <div>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
    </div>
  );
};
