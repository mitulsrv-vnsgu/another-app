
/**
 *bulkInsertDepartments.js
 */

const  departmentsEntity = require('../../entities/departments');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Departmentss. {status, message, data}
 */

const bulkInsertDepartments = ({ departmentsDb }) => async (dataToCreate,req,res) => {
  let departmentsEntities = dataToCreate.map(item => departmentsEntity(item));
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(departmentsDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'code', 'email' ],departmentsEntities,'BULK_INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  let createdDepartments = await departmentsDb.create(departmentsEntities);
  return response.success({ data:{ count:createdDepartments.length || 0 } });
};
module.exports = bulkInsertDepartments;