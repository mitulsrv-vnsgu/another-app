const express = require('express');
const router = express.Router();
const enterpriseController = require('../../controller/admin/enterprise');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/enterprise/create').post(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.addEnterprise);
router.route('/admin/enterprise/list').post(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.findAllEnterprise);
router.route('/admin/enterprise/count').post(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.getEnterpriseCount);
router.route('/admin/enterprise/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.getEnterpriseById);
router.route('/admin/enterprise/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.updateEnterprise);   
router.route('/admin/enterprise/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.partialUpdateEnterprise);   
router.route('/admin/enterprise/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.softDeleteEnterprise);
router.route('/admin/enterprise/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.softDeleteManyEnterprise);
router.route('/admin/enterprise/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.bulkInsertEnterprise);
router.route('/admin/enterprise/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.bulkUpdateEnterprise); 
router.route('/admin/enterprise/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.deleteEnterprise);
router.route('/admin/enterprise/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,enterpriseController.deleteManyEnterprise);

module.exports = router;
