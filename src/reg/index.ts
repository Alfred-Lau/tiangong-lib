export const IS_MOBILE_REG = /\./g;
export const IS_EMAIL_REG = /\./g;
export const IS_CHINA_ID = /\./g;

// 18 位身份证
export const _IDReg18 =
  /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 15 位身份证
export const _IDReg15 =
  /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;