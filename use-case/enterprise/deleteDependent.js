const response = require('../../utils/response');

const getDependencyCount = ({
  enterpriseDb,departmentsDb
})=> async (filter) =>{
  let enterprise = await enterpriseDb.findMany(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  await departmentsDb.count(departmentsFilter);
    let result = { departments :departmentsCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  enterprise : 0 }
    });
  }
};

const deleteWithDependency = ({
  enterpriseDb,departmentsDb
})=> async (filter) =>{
  let enterprise = await enterpriseDb.findMany(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  (await departmentsDb.deleteMany(departmentsFilter));
    let deleted = (await enterpriseDb.deleteMany(filter));
    let result = { departments :departmentsCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  enterprise : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  enterpriseDb,departmentsDb
}) => async (filter,updateBody) =>{
  let enterprise = await enterpriseDb.findMany(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  (await departmentsDb.updateMany(departmentsFilter,updateBody));
    let updated = (await enterpriseDb.updateMany(filter,updateBody));
    let result = { departments :departmentsCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  enterprise : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
