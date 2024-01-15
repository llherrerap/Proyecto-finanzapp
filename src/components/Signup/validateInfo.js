export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } 
    if (!values.password) {
      errors.password = 'Password is required';
    } 
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } 
    return errors;
  }