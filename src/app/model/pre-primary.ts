
export interface PrePrimary {
    keywords: [];
    _id: string;
    pre_primary_school_admission_status: string,
    pre_primary_school_students_count: number,
    pre_primary_school_application_status: string,
    pre_primary_school_application_deadline: string,
    pre_primary_school_seats_count: number,
    pre_primary_school_seats_remaining_count: number,
    pre_primary_school_students_applied_count: number,
    pre_primary_school_students_accepted_count: number,
    pre_primary_school_males_count: number,
    pre_primary_school_females_count: number
  }
  
  export class PrePrimaryModel implements PrePrimary {
    constructor(public keywords: [],public _id: string,
        public pre_primary_school_admission_status: string,
        public pre_primary_school_students_count: number,
        public pre_primary_school_application_status: string,
        public pre_primary_school_application_deadline: string,
        public pre_primary_school_seats_count: number = 0,
        public pre_primary_school_seats_remaining_count: number,
        public pre_primary_school_students_applied_count: number,
        public pre_primary_school_students_accepted_count: number,
        public pre_primary_school_males_count: number,
        public pre_primary_school_females_count: number) {

          this.pre_primary_school_seats_count = pre_primary_school_seats_count;
    }
  
  } 
  
  