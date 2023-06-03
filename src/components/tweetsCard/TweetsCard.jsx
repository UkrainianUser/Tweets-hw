import css from './TweetsCard.module.css';
import logo from 'images/logo.png';
import popup from 'images/popup-img.png';
import avatar from 'images/avatar-img.png';
import { useState } from 'react';

const TweetsCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  const handleBtnClick = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setFollowersCount(followersCount + 1);
    } else {
      setFollowersCount(followersCount - 1);
    }
  };

  return (
    <div className="container">
      <ul className={css.cardsList}>
        <li className={css.tweetsCard}>
          <div className={css.cardTop}>
            <a href="https://www.edu.goit.global/">
              <img className={css.logoImg} src={logo} alt="logo" />
            </a>
            <span className={css.popupImg}>
              <img src={popup} alt="chat" />
            </span>
            <span className={css.avatar}>
              <img src={avatar} alt="avatar" />
            </span>
          </div>
          <span className={css.cardLine}></span>
          <div className={css.cardBottom}>
            <p className={css.tweetsCount}>
              <span>777</span> tweets
            </p>
            <p className={css.followersCount}>
              <span>{followersCount}</span> Followers
            </p>
            <button
              className={`${css.followBtn} ${
                isFollowing ? css.followingBtn : ''
              }`}
              type="button"
              onClick={handleBtnClick}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TweetsCard;
