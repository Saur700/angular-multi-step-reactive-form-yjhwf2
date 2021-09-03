const Recognition_level = [
  { name: 'United States of America', code: 'us' },
  { name: 'United Kingdoms', code: 'gb' },
  { name: 'India', code: 'in' }
];
const Affilition = [
  { name: 'United States of America', code: 'us' },
  { name: 'United Kingdoms', code: 'gb' },
  { name: 'India', code: 'in' }
];
const Authorised_person = [
  { name: 'United States of America', code: 'us' },
  { name: 'United Kingdoms', code: 'gb' },
  { name: 'India', code: 'in' }
];
const DATA_STEP_1 = {
  Schoolname: {
    type: 'text',
    validations: {
      required: true,
      pattern: '^[a-z]*'
    },
    errors: {
      pattern: 'Please enter a Schoolname',
      required: 'please enter a Schoolname'
    },
    placeholder: ''
  },
  Address: {
    type: 'text',
    validations: {
      required: true
    },
    errors: {},
    placeholder: 'Address'
  },
  Nameoftrust: {
    type: 'text',
    validations: {
      required: true,
      pattern: /^[a-z0-9]*/
    },
    errors: {
      pattern: 'please enter a trustname',
      required: 'please enter a trustnmar'
    },
    placeholder: ''
  },
  contact_No: {
    type: 'text',
    validations: {
      required: true,
      pattern: '^((\\+91-?)|0)?[0-9]{10}$'
    },
    errors: {
      pattern: 'please enter a contactNo',
      required: 'please enter a contactno'
    },
    placeholder: ''
  },
  contact_Email: {
    type: 'email',
    validations: {
      required: true,
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
    },
    errors: {
      pattern: 'please enter a contactEmail',
      required: 'please enter a contactEmail'
    },
    placeholder: ''
  }
};

const DATA_STEP_2 = {
  Estblishment_year: {
    type: 'date',
    validations: {
      required: true
    },
    errors: {
      pattern: 'Establishment year',
      required: 'please enter a Establishment year'
    }
  },
  Affiliation: {
    type: 'select',
    options: Affilition,
    validations: {
      required: true
    },
    errors: {
      pattern: 'Affiliation',
      required: 'please enter Affiliation'
    }
  },

  Recognition_level: {
    type: 'select',
    options: Recognition_level,
    validations: {},
    errors: {},
    placeholder: ''
  },
  Trustname: {
    type: 'text',
    validations: {
      required: true,
      pattern: '^[a-z]*'
    },
    errors: {},
    placeholder: ''
  },
  Authorised_person: {
    type: 'select',
    options: Authorised_person,
    validations: {
      required: true
    },
    errors: {},
    placeholder: ''
  },
  School_ownership: {
    type: 'text',
    validations: {
      required: true,
      pattern: '^[a-z]*'
    },
    errors: {
      pattern: 'please enter School_ownership',
      required: 'please enter School_ownership'
    },
    placeholder: ''
  }
};

const DATA_STEP_3 = {
  Average_monthly_fees: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a Average_montly'
    },
    placeholder: ''
  },
  No_of_student: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a No_of_student',
      required: 'Please enter a No_of_student'
    },
    placeholder: ''
  },
  fee_Collected_Amount_in_last_acadamic_year: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a fee_Collected_Amount_in_last_acadamic_year',
      required: 'fee_Collected_Amount_in_last_acadamic_year'
    },
    placeholder: ''
  },
  fee_Collected_Amount_in_last_acadamic_year: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a fee_Collected_Amount_in_last_acadamic_year',
      required: 'fee_Collected_Amount_in_last_acadamic_year'
    },
    placeholder: ''
  },
  Average_montly: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a  Average_montly',
      required: 'Please enter  Average_montly'
    },
    placeholder: ''
  },
  No_of_teacher: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a  No_of_teacher',
      required: 'Please enter  No_of_teacher'
    },
    placeholder: ''
  },
  Average_monthly_expense: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a  Average_monthly_expense',
      required: 'Please enter  Average_monthly_expense'
    },
    placeholder: ''
  },
  Total_loans_running_including_ISFC: {
    type: 'number',
    validations: {
      required: true,
      pattern: /'[0-9][1-9.]*[0-9]+[1-9]*'/
    },
    errors: {
      pattern: 'Please enter a  Total_loans_running_including_ISFC',
      required: 'Please enter  Total_loans_running_including_ISFC'
    },
    placeholder: ''
  },

  otp: {
    type: 'number',
    validations: {
      required: true,
      minLength: 4
    },
    errors: {
      required: 'This field can not be left blank',
      minlength: 'Minimum length should be 4 characters'
    },
    placeholder: 'One Time Password'
  }
};

const STEP_ITEMS = [
  { label: 'Step 1', data: DATA_STEP_1 },
  { label: 'Step 2', data: DATA_STEP_2 },
  { label: 'Step 3', data: DATA_STEP_3 },
  { label: 'Review & Submit', data: {} }
];

export { STEP_ITEMS };
