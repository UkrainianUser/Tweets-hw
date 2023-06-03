import BackLink from 'components/backLink/BackLink';
import TweetsCard from 'components/tweetsCard/TweetsCard';
import { useLocation } from 'react-router-dom';

const Tweets = () => {
  const location = useLocation();
  const backLinkPath = location.state?.from ?? '/';

  return (
    <div className="container">
      <BackLink to={backLinkPath} />
      <TweetsCard />
    </div>
  );
};

export default Tweets;
