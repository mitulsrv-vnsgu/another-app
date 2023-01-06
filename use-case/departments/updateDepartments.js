/**
 *updateDepartments.js
 */

const  departmentsEntity = require('../../entities/departments');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Departments. {status, message, data}
 */
const updateDepartments = ({
  departmentsDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let departments = departmentsEntity(dataToUpdate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(departmentsDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'code', 'email' ],departments,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  departments = await departmentsDb.updateOne(query,departments);
  if (!departments){
    return response.recordNotFound();
  }
  return response.success({ data:departments });
};
module.exports = updateDepartments;