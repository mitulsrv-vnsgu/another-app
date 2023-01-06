const enterpriseDb = require('../../../data-access/enterpriseDb');
const departmentsDb = require('../../../data-access/departmentsDb');

const enterpriseSchema = require('../../../validation/schema/enterprise');

const createValidation = require('../../../validation')(enterpriseSchema.createSchema);
const updateValidation = require('../../../validation')(enterpriseSchema.updateSchema);
const filterValidation = require('../../../validation')(enterpriseSchema.filterValidationSchema);
const addEnterpriseUsecase = require('../../../use-case/enterprise/addEnterprise')({
  enterpriseDb,
  createValidation 
});
const findAllEnterpriseUsecase = require('../../../use-case/enterprise/findAllEnterprise')({
  enterpriseDb,
  filterValidation
});
const getEnterpriseCountUsecase = require('../../../use-case/enterprise/getEnterpriseCount')({
  enterpriseDb,
  filterValidation
});
const getEnterpriseUsecase = require('../../../use-case/enterprise/getEnterprise')({
  enterpriseDb,
  filterValidation
});
const updateEnterpriseUsecase = require('../../../use-case/enterprise/updateEnterprise')({
  enterpriseDb,
  updateValidation 
});
const partialUpdateEnterpriseUsecase = require('../../../use-case/enterprise/partialUpdateEnterprise')({ enterpriseDb });
const softDeleteEnterpriseUsecase = require('../../../use-case/enterprise/softDeleteEnterprise')({
  enterpriseDb,
  departmentsDb
});
const softDeleteManyEnterpriseUsecase = require('../../../use-case/enterprise/softDeleteManyEnterprise')({
  enterpriseDb,
  departmentsDb
});
const bulkInsertEnterpriseUsecase = require('../../../use-case/enterprise/bulkInsertEnterprise')({ enterpriseDb });
const bulkUpdateEnterpriseUsecase = require('../../../use-case/enterprise/bulkUpdateEnterprise')({ enterpriseDb });
const deleteEnterpriseUsecase = require('../../../use-case/enterprise/deleteEnterprise')({
  enterpriseDb,
  departmentsDb
});
const deleteManyEnterpriseUsecase = require('../../../use-case/enterprise/deleteManyEnterprise')({
  enterpriseDb,
  departmentsDb
});

const enterpriseController = require('./enterprise');

const addEnterprise = enterpriseController.addEnterprise(addEnterpriseUsecase);
const findAllEnterprise = enterpriseController.findAllEnterprise(findAllEnterpriseUsecase);
const getEnterpriseCount = enterpriseController.getEnterpriseCount(getEnterpriseCountUsecase);
const getEnterpriseById = enterpriseController.getEnterprise(getEnterpriseUsecase);
const updateEnterprise = enterpriseController.updateEnterprise(updateEnterpriseUsecase);
const partialUpdateEnterprise = enterpriseController.partialUpdateEnterprise(partialUpdateEnterpriseUsecase);
const softDeleteEnterprise = enterpriseController.softDeleteEnterprise(softDeleteEnterpriseUsecase);
const softDeleteManyEnterprise = enterpriseController.softDeleteManyEnterprise(softDeleteManyEnterpriseUsecase);
const bulkInsertEnterprise = enterpriseController.bulkInsertEnterprise(bulkInsertEnterpriseUsecase);
const bulkUpdateEnterprise = enterpriseController.bulkUpdateEnterprise(bulkUpdateEnterpriseUsecase);
const deleteEnterprise = enterpriseController.deleteEnterprise(deleteEnterpriseUsecase);
const deleteManyEnterprise = enterpriseController.deleteManyEnterprise(deleteManyEnterpriseUsecase);

module.exports = {
  addEnterprise,
  findAllEnterprise,
  getEnterpriseCount,
  getEnterpriseById,
  updateEnterprise,
  partialUpdateEnterprise,
  softDeleteEnterprise,
  softDeleteManyEnterprise,
  bulkInsertEnterprise,
  bulkUpdateEnterprise,
  deleteEnterprise,
  deleteManyEnterprise,
};