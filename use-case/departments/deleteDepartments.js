
/**
 *deleteDepartments.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Departments. {status, message, data}
 */
const deleteDepartments = ({ departmentsDb }) => async (query,req,res) => {
  let deletedDepartments = await departmentsDb.deleteOne(query);
  if (!deletedDepartments){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedDepartments });
};

module.exports = deleteDepartments;