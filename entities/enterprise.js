module.exports = (enterprise) => {

  let newEnterprise = { 
    name: enterprise.name,
    email: enterprise.email,
    phone: enterprise.phone,
    code: enterprise.code,
    address: enterprise.address,
    website: enterprise.website,
    isActive: enterprise.isActive,
    isDelete: enterprise.isDelete,
    createdAt: enterprise.createdAt,
    updatedAt: enterprise.updatedAt,
    addedBy: enterprise.addedBy,
    updatedBy: enterprise.updatedBy,
    isDeleted: enterprise.isDeleted,
  };

  // remove undefined values
  Object.keys(newEnterprise).forEach(key => newEnterprise[key] === undefined && delete newEnterprise[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newEnterprise) => {
   *   if (!newEnterprise.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newEnterprise) 
   */

  return Object.freeze(newEnterprise);
};
