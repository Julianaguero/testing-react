// eslint-disable-next-line react/prop-types
import { useState } from "react";

export function TwitterFollowCard ({children, userName = 'unknown'}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'siguiendo' : 'seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                src={`https://unavatar.io/${userName}`}
                    alt="Un avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}