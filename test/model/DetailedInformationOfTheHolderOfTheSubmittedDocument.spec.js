/**
 * IdCheck.IO API
 * Check identity documents
 *
 * OpenAPI spec version: 0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.idcheckio_nodejs_client);
  }
}(this, function(expect, idcheckio_nodejs_client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DetailedInformationOfTheHolderOfTheSubmittedDocument', function() {
    it('should create an instance of DetailedInformationOfTheHolderOfTheSubmittedDocument', function() {
      // uncomment below and update the code to test DetailedInformationOfTheHolderOfTheSubmittedDocument
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be.a(idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument);
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property usageName (base name: "usageName")', function() {
      // uncomment below and update the code to test the property usageName
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birthDate")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property birthPlace (base name: "birthPlace")', function() {
      // uncomment below and update the code to test the property birthPlace
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property birthDpt (base name: "birthDpt")', function() {
      // uncomment below and update the code to test the property birthDpt
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

    it('should have the property extraInfos (base name: "extraInfos")', function() {
      // uncomment below and update the code to test the property extraInfos
      //var instane = new idcheckio_nodejs_client.DetailedInformationOfTheHolderOfTheSubmittedDocument();
      //expect(instance).to.be();
    });

  });

}));
