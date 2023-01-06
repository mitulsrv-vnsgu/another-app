/**
 *partialUpdateEnterprise.js
 */

const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Enterprise. {status, message, data}
 */
const partialUpdateEnterprise = ({ enterpriseDb }) => async (params,req,res) => {
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(enterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],params.dataToUpdate,'UPDATE',params.query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const enterprise = await enterpriseDb.updateOne(params.query,params.dataToUpdate);
  if (!enterprise){
    return response.recordNotFound();
  }
  return response.success({ data:enterprise });
};
module.exports = partialUpdateEnterprise;