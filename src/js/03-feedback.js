import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener(
    'input',
    throttle(evt => {
        const saveObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        saveObj[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveObj));
    }, 500)
);

form.addEventListener('submit', evt => {
    evt.preventDefault();
    const email = evt.currentTarget.email.value;
    const message = evt.currentTarget.message.value;
    console.log({ email, message });
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});

(function localStorageData() {
    const saveObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    for (let key in saveObj) {
        form.elements[key].value = saveObj[key];
    }
})();

