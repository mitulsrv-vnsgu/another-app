const express = require('express');
const router = express.Router();
const departmentsController = require('../../controller/admin/departments');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/departments/create').post(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.addDepartments);
router.route('/admin/departments/list').post(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.findAllDepartments);
router.route('/admin/departments/count').post(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.getDepartmentsCount);
router.route('/admin/departments/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.getDepartmentsById);
router.route('/admin/departments/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.updateDepartments);   
router.route('/admin/departments/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.partialUpdateDepartments);   
router.route('/admin/departments/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.softDeleteDepartments);
router.route('/admin/departments/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.softDeleteManyDepartments);
router.route('/admin/departments/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.bulkInsertDepartments);
router.route('/admin/departments/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.bulkUpdateDepartments); 
router.route('/admin/departments/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.deleteDepartments);
router.route('/admin/departments/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,departmentsController.deleteManyDepartments);

module.exports = router;
