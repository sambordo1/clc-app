import EmberRouter from '@ember/routing/router';
import config from 'clc-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('our-foundation');
  this.route('sin');
  this.route('repentance-from-dead-works');
  this.route('redemption');
  this.route('faith-toward-god');
  this.route('water-baptism');
  this.route('holy-spirit-baptism');
  this.route('fire-baptism');
  this.route('laying-on-of-hands');
  this.route('divine-healing');
  this.route('resurrection-of-the-dead');
  this.route('eternal-judgement');
});
