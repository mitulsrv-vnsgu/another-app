/**
 *partialUpdateDepartments.js
 */

const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Departments. {status, message, data}
 */
const partialUpdateDepartments = ({ departmentsDb }) => async (params,req,res) => {
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(departmentsDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'code', 'email' ],params.dataToUpdate,'UPDATE',params.query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const departments = await departmentsDb.updateOne(params.query,params.dataToUpdate);
  if (!departments){
    return response.recordNotFound();
  }
  return response.success({ data:departments });
};
module.exports = partialUpdateDepartments;