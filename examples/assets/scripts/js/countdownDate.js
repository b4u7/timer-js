/**
 *
 * Countdown to Date v1.0.0
 * https://github.com/B4U7
 *
 * Free to use under the MIT License.
 * http://gomakethings.com/mit/
 *
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory());
    } else if (typeof exports === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.countdownDate = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    let countdownDate = {};
    let settings;
    let timer;
    let timerText;
    let intervalId;

    let defaults = {
        endDateTime: '',
        initId: 'timer',
        interval: .5,
        textColor: '#fff',
        fontSize: '',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        onFinishMessage: 'You reached the end date',
        onFinish: function () {
            return timer.innerHTML = this.onFinishMessage;
        }
    }

    /**
     * Initializes the plugin
     *
     * @public
     * @param options
     */
    countdownDate.init = function (options) {
        countdownDate.destroy();

        settings = Object.assign({}, defaults, options);

        timer = document.getElementById(settings.initId);
        timerText = document.createElement('p');
        timerText.className = 'timer__text';
        timer.append(timerText);

        countdownDate.timeStyle();

        settings.endDateTime = new Date(settings.endDateTime).getTime();
        if (!isValidTimestamp(settings.endDateTime)) {
            return timerText.innerHTML = 'Invalid date time';
        }

        countdownDate.start();
    }

    /**
     * Destroys the plugin
     *
     * @public
     */
    countdownDate.destroy = function () {
        if (!settings) {
            return;
        }

        countdownDate.clear();

        settings = null;
    };

    /**
     * Clears the interval
     *
     * @public
     */
    countdownDate.clear = function () {
        clearInterval(intervalId);
    }

    /**
     * Starts the countdown
     *
     * @public
     * @returns {number}
     */
    countdownDate.start = function () {
        intervalId = setInterval(countdownDate.updateTime, settings.interval * 1000);
    }

    /**
     * Formats the timer
     *
     * @public
     * @param distance
     * @returns {string}
     */
    countdownDate.format = function (distance) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    }

    /**
     * Updates the timer
     *
     * @public
     */
    countdownDate.updateTime = function () {
        const now = new Date().getTime();
        const distance = settings.endDateTime - now;

        if (distance <= 0) {
            settings.onFinish();
            countdownDate.clear();

            return;
        }

        timerText.innerHTML = countdownDate.format(distance);
    }

    /**
     * Applies basic styling to the timer
     *
     * @public
     */
    countdownDate.timeStyle = function () {
        timerText.style.color = settings.textColor;
        timerText.style.fontSize = settings.fontSize;
        timerText.style.fontFamily = settings.fontFamily;
        timerText.style.fontWeight = settings.fontWeight;
    }

    /**
     * Check if the timestamp is valid
     *
     * @private
     * @param date
     * @returns {boolean|boolean}
     */
    let isValidTimestamp = function (date) {
        return !isNaN(date);
    }

    return countdownDate;
});
