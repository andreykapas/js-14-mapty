'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** @type {HTMLFormElement } */
const form = document.querySelector('.form');
/** @type {HTMLUListElement} */
const containerWorkouts = document.querySelector('.workouts');
/** @type {HTMLSelectElement} */
const inputType = document.querySelector('.form__input--type');
/** @type {HTMLInputElement} */
const inputDistance = document.querySelector('.form__input--distance');
/** @type {HTMLInputElement} */
const inputDuration = document.querySelector('.form__input--duration');
/** @type {HTMLInputElement} */
const inputCadence = document.querySelector('.form__input--cadence');
/** @type {HTMLInputElement} */
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
    },
    function () {
      alert('Could not get your position.');
    },
  );
}
