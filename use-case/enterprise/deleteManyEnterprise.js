/**
 *deleteManyEnterprise.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyEnterprise = ({
  enterpriseDb,departmentsDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedEnterprise;
  if (isWarning){
    const getDependencyCount = makeGetDependencyCount({
      enterpriseDb,
      departmentsDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      enterpriseDb,
      departmentsDb
    });
    return await deleteWithDependency(query);
  }
};
module.exports = deleteManyEnterprise;