
/**
 *bulkInsertEnterprise.js
 */

const  enterpriseEntity = require('../../entities/enterprise');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Enterprises. {status, message, data}
 */

const bulkInsertEnterprise = ({ enterpriseDb }) => async (dataToCreate,req,res) => {
  let enterpriseEntities = dataToCreate.map(item => enterpriseEntity(item));
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(enterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],enterpriseEntities,'BULK_INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  let createdEnterprise = await enterpriseDb.create(enterpriseEntities);
  return response.success({ data:{ count:createdEnterprise.length || 0 } });
};
module.exports = bulkInsertEnterprise;