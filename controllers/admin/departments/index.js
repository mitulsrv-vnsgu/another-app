const departmentsDb = require('../../../data-access/departmentsDb');

const departmentsSchema = require('../../../validation/schema/departments');

const createValidation = require('../../../validation')(departmentsSchema.createSchema);
const updateValidation = require('../../../validation')(departmentsSchema.updateSchema);
const filterValidation = require('../../../validation')(departmentsSchema.filterValidationSchema);
const addDepartmentsUsecase = require('../../../use-case/departments/addDepartments')({
  departmentsDb,
  createValidation 
});
const findAllDepartmentsUsecase = require('../../../use-case/departments/findAllDepartments')({
  departmentsDb,
  filterValidation
});
const getDepartmentsCountUsecase = require('../../../use-case/departments/getDepartmentsCount')({
  departmentsDb,
  filterValidation
});
const getDepartmentsUsecase = require('../../../use-case/departments/getDepartments')({
  departmentsDb,
  filterValidation
});
const updateDepartmentsUsecase = require('../../../use-case/departments/updateDepartments')({
  departmentsDb,
  updateValidation 
});
const partialUpdateDepartmentsUsecase = require('../../../use-case/departments/partialUpdateDepartments')({ departmentsDb });
const softDeleteDepartmentsUsecase = require('../../../use-case/departments/softDeleteDepartments')({ departmentsDb });
const softDeleteManyDepartmentsUsecase = require('../../../use-case/departments/softDeleteManyDepartments')({ departmentsDb });
const bulkInsertDepartmentsUsecase = require('../../../use-case/departments/bulkInsertDepartments')({ departmentsDb });
const bulkUpdateDepartmentsUsecase = require('../../../use-case/departments/bulkUpdateDepartments')({ departmentsDb });
const deleteDepartmentsUsecase = require('../../../use-case/departments/deleteDepartments')({ departmentsDb });
const deleteManyDepartmentsUsecase = require('../../../use-case/departments/deleteManyDepartments')({ departmentsDb });

const departmentsController = require('./departments');

const addDepartments = departmentsController.addDepartments(addDepartmentsUsecase);
const findAllDepartments = departmentsController.findAllDepartments(findAllDepartmentsUsecase);
const getDepartmentsCount = departmentsController.getDepartmentsCount(getDepartmentsCountUsecase);
const getDepartmentsById = departmentsController.getDepartments(getDepartmentsUsecase);
const updateDepartments = departmentsController.updateDepartments(updateDepartmentsUsecase);
const partialUpdateDepartments = departmentsController.partialUpdateDepartments(partialUpdateDepartmentsUsecase);
const softDeleteDepartments = departmentsController.softDeleteDepartments(softDeleteDepartmentsUsecase);
const softDeleteManyDepartments = departmentsController.softDeleteManyDepartments(softDeleteManyDepartmentsUsecase);
const bulkInsertDepartments = departmentsController.bulkInsertDepartments(bulkInsertDepartmentsUsecase);
const bulkUpdateDepartments = departmentsController.bulkUpdateDepartments(bulkUpdateDepartmentsUsecase);
const deleteDepartments = departmentsController.deleteDepartments(deleteDepartmentsUsecase);
const deleteManyDepartments = departmentsController.deleteManyDepartments(deleteManyDepartmentsUsecase);

module.exports = {
  addDepartments,
  findAllDepartments,
  getDepartmentsCount,
  getDepartmentsById,
  updateDepartments,
  partialUpdateDepartments,
  softDeleteDepartments,
  softDeleteManyDepartments,
  bulkInsertDepartments,
  bulkUpdateDepartments,
  deleteDepartments,
  deleteManyDepartments,
};