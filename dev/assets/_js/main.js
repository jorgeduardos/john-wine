
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;
import Foundation from 'foundation-sites';

// import JS files here using ES6 import statement
import slick from 'slick-carousel';
import waypoint from '../../../node_modules/waypoints/lib/noframework.waypoints';


$(document).foundation()


var homeBkg = new TweenMax.fromTo("#bkg-after", 9,{background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'},{ background: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))', ease: Linear.easeNone });
var logoHero = new TweenMax.to(".logo-hero", 1, { alpha: 1, ease: Linear.easeNone, delay: 9 });
var arrowHero = new TweenMax.to("#home-arrow", 1, { alpha: 1, ease: Linear.easeNone, delay: 9.8 });

// main

var mainHeight = $('.chianti-container').height() + $('.service').height()*3;

$('.about-main').height(mainHeight);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".chianti-container",
    duration: $('.chianti-container').height()/2,
    offset: $('.chianti-container').height()/2
})
.setTween(".chianti-container", 1, {alpha: 0}) // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var chianTextScene = new ScrollMagic.Scene({
    triggerElement: ".chianti-container",
    offset: $('.text-container-chianti').height()
})
.setClassToggle('.text-container-chianti', 'appear') // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".chianti-container",
    offset: $('.chianti-container').height()
})
.setTween(".service-1", 0.8, {alpha: 1}) // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


var landscapeTween = new TweenMax.to('.service-1', 1, {'background': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../media/wine-landscape.jpg)'})
var linearGrsdient = new ScrollMagic.Scene({
    triggerElement: $('.chianti-container'),
    offset: $('.chianti-container').height(),
})
.setTween(landscapeTween)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var landscapeTextScene = new ScrollMagic.Scene({
    triggerElement: $('.chianti-container'),
    offset: $('.chianti-container').height()
})
.setClassToggle(".service-text-container", 'appear') // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


var scene3 = new ScrollMagic.Scene({
    triggerElement: ".chianti-container",
    offset: $('.service-1').height() + $('.chianti-container').height()
})
.setTween(".service-2", 0.8, {alpha: 1}) // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".chianti-container",
    offset: $('.service-1').height() + $('.chianti-container').height() + $('.service-2').height()
})
.setTween(".contact", 0.8, {alpha: 1}) // trigger a TweenMax.to tween
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
    
