import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timer = 'videoplayer-current-time';


player.on(
    'timeupdate',
    throttle(evt => {
      localStorage.setItem(timer, evt.seconds);
    }, 1000)
);

player.setCurrentTime(localStorage.getItem(timer) || 0);