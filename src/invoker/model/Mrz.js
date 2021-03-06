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
    define(['invoker/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.idcheckio_nodejs_client) {
      root.idcheckio_nodejs_client = {};
    }
    root.idcheckio_nodejs_client.Mrz = factory(root.idcheckio_nodejs_client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Mrz model module.
   * @module invoker/model/Mrz
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Mrz</code>.
   * @alias module:invoker/model/Mrz
   * @class
   * @param line1 {String} line 1 of MRZ
   */
  var exports = function(line1) {
    var _this = this;

    _this['line1'] = line1;


  };

  /**
   * Constructs a <code>Mrz</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/Mrz} obj Optional instance to populate.
   * @return {module:invoker/model/Mrz} The populated <code>Mrz</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('line1')) {
        obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
      }
      if (data.hasOwnProperty('line2')) {
        obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
      }
      if (data.hasOwnProperty('line3')) {
        obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
      }
    }
    return obj;
  }

  /**
   * line 1 of MRZ
   * @member {String} line1
   */
  exports.prototype['line1'] = undefined;
  /**
   * line 2 of MRZ
   * @member {String} line2
   */
  exports.prototype['line2'] = undefined;
  /**
   * line 3 of MRZ
   * @member {String} line3
   */
  exports.prototype['line3'] = undefined;



  return exports;
}));


