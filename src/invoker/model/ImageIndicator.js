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
    root.idcheckio_nodejs_client.ImageIndicator = factory(root.idcheckio_nodejs_client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageIndicator model module.
   * @module invoker/model/ImageIndicator
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ImageIndicator</code>.
   * @alias module:invoker/model/ImageIndicator
   * @class
   * @param type {String} 
   * @param status {module:invoker/model/ImageIndicator.StatusEnum} 
   */
  var exports = function(type, status) {
    var _this = this;

    _this['type'] = type;
    _this['status'] = status;


  };

  /**
   * Constructs a <code>ImageIndicator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/ImageIndicator} obj Optional instance to populate.
   * @return {module:invoker/model/ImageIndicator} The populated <code>ImageIndicator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:invoker/model/ImageIndicator.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "INFO"
     * @const
     */
    "INFO": "INFO",
    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"  };


  return exports;
}));


