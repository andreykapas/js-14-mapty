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
      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    function () {
      alert('Could not get your position.');
    },
  );
}
