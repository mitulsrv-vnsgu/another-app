/**
 *bulkUpdateEnterprise.js
 */

const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : update multiple records of enterprise with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateEnterprise = ({ enterpriseDb }) => async (params,req,res) => {
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(enterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],params.dataToUpdate,'BULK_UPDATE',params.query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedEnterprise = await enterpriseDb.updateMany(params.query,params.dataToUpdate);
  return response.success({ data:{ count:updatedEnterprise } });
};
module.exports = bulkUpdateEnterprise;