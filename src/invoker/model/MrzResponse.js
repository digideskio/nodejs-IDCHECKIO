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
    // AMD. Register as an anonymous module.
    define(['invoker/ApiClient', 'invoker/model/Mrz'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Mrz'));
  } else {
    // Browser globals (root is window)
    if (!root.idcheckio_nodejs_client) {
      root.idcheckio_nodejs_client = {};
    }
    root.idcheckio_nodejs_client.MrzResponse = factory(root.idcheckio_nodejs_client.ApiClient, root.idcheckio_nodejs_client.Mrz);
  }
}(this, function(ApiClient, Mrz) {
  'use strict';




  /**
   * The MrzResponse model module.
   * @module invoker/model/MrzResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MrzResponse</code>.
   * @alias module:invoker/model/MrzResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MrzResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/MrzResponse} obj Optional instance to populate.
   * @return {module:invoker/model/MrzResponse} The populated <code>MrzResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mrz')) {
        obj['mrz'] = Mrz.constructFromObject(data['mrz']);
      }
    }
    return obj;
  }

  /**
   * @member {module:invoker/model/Mrz} mrz
   */
  exports.prototype['mrz'] = undefined;



  return exports;
}));

