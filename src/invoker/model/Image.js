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
    root.idcheckio_nodejs_client.Image = factory(root.idcheckio_nodejs_client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Image model module.
   * @module invoker/model/Image
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Image</code>.
   * @alias module:invoker/model/Image
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/Image} obj Optional instance to populate.
   * @return {module:invoker/model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('doc')) {
        obj['doc'] = ApiClient.convertToType(data['doc'], 'String');
      }
      if (data.hasOwnProperty('face')) {
        obj['face'] = ApiClient.convertToType(data['face'], 'String');
      }
      if (data.hasOwnProperty('rawType')) {
        obj['rawType'] = ApiClient.convertToType(data['rawType'], 'String');
      }
      if (data.hasOwnProperty('light')) {
        obj['light'] = ApiClient.convertToType(data['light'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:invoker/model/Image.DocEnum} doc
   */
  exports.prototype['doc'] = undefined;
  /**
   * @member {module:invoker/model/Image.FaceEnum} face
   */
  exports.prototype['face'] = undefined;
  /**
   * @member {module:invoker/model/Image.RawTypeEnum} rawType
   */
  exports.prototype['rawType'] = undefined;
  /**
   * @member {module:invoker/model/Image.LightEnum} light
   */
  exports.prototype['light'] = undefined;


  /**
   * Allowed values for the <code>doc</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DocEnum = {
    /**
     * value: "CNI_BE_SPECIMEN"
     * @const
     */
    "CNI_BE_SPECIMEN": "CNI_BE_SPECIMEN",
    /**
     * value: "CNI_BE_SPECIMEN_MRZ"
     * @const
     */
    "CNI_BE_SPECIMEN_MRZ": "CNI_BE_SPECIMEN_MRZ",
    /**
     * value: "PASSEPORT_FR_SPECIMEN_NATACHA"
     * @const
     */
    "PASSEPORT_FR_SPECIMEN_NATACHA": "PASSEPORT_FR_SPECIMEN_NATACHA",
    /**
     * value: "PASSEPORT_FR_SPECIMEN_NATACHA_MRZ"
     * @const
     */
    "PASSEPORT_FR_SPECIMEN_NATACHA_MRZ": "PASSEPORT_FR_SPECIMEN_NATACHA_MRZ",
    /**
     * value: "CNI_FR_SPECIMEN_BERTHIER"
     * @const
     */
    "CNI_FR_SPECIMEN_BERTHIER": "CNI_FR_SPECIMEN_BERTHIER",
    /**
     * value: "CNI_FR_SPECIMEN_BERTHIER_MRZ"
     * @const
     */
    "CNI_FR_SPECIMEN_BERTHIER_MRZ": "CNI_FR_SPECIMEN_BERTHIER_MRZ",
    /**
     * value: "PASSEPORT_FR_SPECIMEN_GRAUX_MRZ"
     * @const
     */
    "PASSEPORT_FR_SPECIMEN_GRAUX_MRZ": "PASSEPORT_FR_SPECIMEN_GRAUX_MRZ",
    /**
     * value: "PASSEPORT_FR_SPECIMEN_GRAUX"
     * @const
     */
    "PASSEPORT_FR_SPECIMEN_GRAUX": "PASSEPORT_FR_SPECIMEN_GRAUX",
    /**
     * value: "CNI_BIH_SPECIMEN"
     * @const
     */
    "CNI_BIH_SPECIMEN": "CNI_BIH_SPECIMEN",
    /**
     * value: "CNI_BIH_SPECIMEN_MRZ"
     * @const
     */
    "CNI_BIH_SPECIMEN_MRZ": "CNI_BIH_SPECIMEN_MRZ",
    /**
     * value: "PASSEPORT_USA_FALSIFIE_TRAVELER"
     * @const
     */
    "PASSEPORT_USA_FALSIFIE_TRAVELER": "PASSEPORT_USA_FALSIFIE_TRAVELER",
    /**
     * value: "PASSEPORT_USA_FALSIFIE_TRAVELER_MRZ"
     * @const
     */
    "PASSEPORT_USA_FALSIFIE_TRAVELER_MRZ": "PASSEPORT_USA_FALSIFIE_TRAVELER_MRZ",
    /**
     * value: "RP_FR_SPECIMEN_MARTIN"
     * @const
     */
    "RP_FR_SPECIMEN_MARTIN": "RP_FR_SPECIMEN_MARTIN",
    /**
     * value: "RP_FR_SPECIMEN_MARTIN_MRZ"
     * @const
     */
    "RP_FR_SPECIMEN_MARTIN_MRZ": "RP_FR_SPECIMEN_MARTIN_MRZ",
    /**
     * value: "CNI_GBR_SPECIMEN_FREEMAN"
     * @const
     */
    "CNI_GBR_SPECIMEN_FREEMAN": "CNI_GBR_SPECIMEN_FREEMAN",
    /**
     * value: "CNI_GBR_SPECIMEN_FREEMAN_MRZ"
     * @const
     */
    "CNI_GBR_SPECIMEN_FREEMAN_MRZ": "CNI_GBR_SPECIMEN_FREEMAN_MRZ",
    /**
     * value: "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN"
     * @const
     */
    "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN": "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN",
    /**
     * value: "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN_MRZ"
     * @const
     */
    "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN_MRZ": "PASSEPORT_CHN_SPECIMEN_ZHENGJIAN_MRZ",
    /**
     * value: "PASSEPORT_ITA_SPECIMEN_ROSSI"
     * @const
     */
    "PASSEPORT_ITA_SPECIMEN_ROSSI": "PASSEPORT_ITA_SPECIMEN_ROSSI",
    /**
     * value: "PASSEPORT_ITA_SPECIMEN_ROSSI_MRZ"
     * @const
     */
    "PASSEPORT_ITA_SPECIMEN_ROSSI_MRZ": "PASSEPORT_ITA_SPECIMEN_ROSSI_MRZ",
    /**
     * value: "RP_GBR_SPECIMEN_IVANOVA"
     * @const
     */
    "RP_GBR_SPECIMEN_IVANOVA": "RP_GBR_SPECIMEN_IVANOVA",
    /**
     * value: "RP_GBR_SPECIMEN_IVANOVA_MRZ"
     * @const
     */
    "RP_GBR_SPECIMEN_IVANOVA_MRZ": "RP_GBR_SPECIMEN_IVANOVA_MRZ",
    /**
     * value: "DL_FR_SPECIMEN_MARTIN"
     * @const
     */
    "DL_FR_SPECIMEN_MARTIN": "DL_FR_SPECIMEN_MARTIN",
    /**
     * value: "DL_FR_SPECIMEN_MARTIN_MRZ"
     * @const
     */
    "DL_FR_SPECIMEN_MARTIN_MRZ": "DL_FR_SPECIMEN_MARTIN_MRZ",
    /**
     * value: "ELECTRICITE_FR_BERTHIER"
     * @const
     */
    "ELECTRICITE_FR_BERTHIER": "ELECTRICITE_FR_BERTHIER",
    /**
     * value: "IMPOSITION_FR_BERTHIER"
     * @const
     */
    "IMPOSITION_FR_BERTHIER": "IMPOSITION_FR_BERTHIER",
    /**
     * value: "RIB_FR_BERTHIER"
     * @const
     */
    "RIB_FR_BERTHIER": "RIB_FR_BERTHIER",
    /**
     * value: "TELEPHONE_2DDOC_BERTHIER"
     * @const
     */
    "TELEPHONE_2DDOC_BERTHIER": "TELEPHONE_2DDOC_BERTHIER",
    /**
     * value: "CARTE_GRISE_DUPONT"
     * @const
     */
    "CARTE_GRISE_DUPONT": "CARTE_GRISE_DUPONT",
    /**
     * value: "SALAIRE_FR_BERTHIER"
     * @const
     */
    "SALAIRE_FR_BERTHIER": "SALAIRE_FR_BERTHIER"  };

  /**
   * Allowed values for the <code>face</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FaceEnum = {
    /**
     * value: "RECTO"
     * @const
     */
    "RECTO": "RECTO",
    /**
     * value: "VERSO"
     * @const
     */
    "VERSO": "VERSO"  };

  /**
   * Allowed values for the <code>rawType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RawTypeEnum = {
    /**
     * value: "BASE64"
     * @const
     */
    "BASE64": "BASE64",
    /**
     * value: "JPG"
     * @const
     */
    "JPG": "JPG"  };

  /**
   * Allowed values for the <code>light</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LightEnum = {
    /**
     * value: "DL"
     * @const
     */
    "DL": "DL",
    /**
     * value: "IR"
     * @const
     */
    "IR": "IR",
    /**
     * value: "UV"
     * @const
     */
    "UV": "UV"  };


  return exports;
}));

