import data from '../data/data'
import User from '../data/user'
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  return (
    <div>
      Just one more time
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
        // followers={User.stats.followers}
        // views={User.stats.views}
        // likes={User.stats.likes}
        
      />
      <Statistics title="Upload stats" stats={data} />
     
    </div>
  );
};


