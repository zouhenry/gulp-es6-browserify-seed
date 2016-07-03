/**
 * Created by hzou on 7/2/16.
 */

import jQuery from "jQuery";
import angular from "angular";
import _ from "lodash";

import helloWorld from './helloWorld';

export default
angular
  .module( 'app', [helloWorld.name] );
