
export interface School {
  keywords: [];
  _id: string;
  school_name: string,
  school_address_1: string,
  school_address_2: string,
  school_state: string,
  school_city: string,
  school_areacity: string,
  school_admission_status: string,
  school_ranking: number,
  school_imageUrl_157_157_jpg: string,
  school_imageUrl_1600_456_jpg: string,
  school_official_url: string,
  school_overview_1: string,
  school_overview_2: string,
  school_pre_primary_school_ref_id: string,
  school_primary_school_ref_id: string,
  school_middle_school_ref_id: string,
  school_secondary_school_ref_id: string,
  school_senior_secondary_school_ref_id: string,
  school_total_students_count: number,
  school_application_status: string,
  school_application_deadline: string,
  school_total_seats_count: number,
  school_students_applied_count: number,
  school_students_accepted_count: number,
  school_seats_remaining_count: number,
  school_males_count: number,
  school_females_count: number
}



export class SchoolModel implements School {
  constructor(public keywords: [],public _id: string,
    public school_name: string,
    public school_address_1: string,
    public school_address_2: string,
    public school_state: string,
    public school_city: string,
    public school_areacity: string,
    public school_admission_status: string,
    public school_ranking: number,
    public school_imageUrl_157_157_jpg: string,
    public school_imageUrl_1600_456_jpg: string,
    public school_official_url: string,
    public school_overview_1: string,
    public school_overview_2: string,
    public school_pre_primary_school_ref_id: string,
    public school_primary_school_ref_id: string,
    public school_middle_school_ref_id: string,
    public school_secondary_school_ref_id: string,
    public school_senior_secondary_school_ref_id: string,
    public school_total_students_count: number,
    public school_application_status: string,
    public school_application_deadline: string,
    public school_total_seats_count: number,
    public school_students_applied_count: number,
    public school_students_accepted_count: number,
    public school_seats_remaining_count: number,
    public school_males_count: number,
    public school_females_count: number) {
  }

} 



/*
Sample School data received from api/v1/schools/search/:term
    {
        "keywords": [],
        "_id": "5c31d0e1d1a2fa4678af8a1f",
        "school_name": "St Anne's School",
        "school_state": "Rajasthan",
        "school_city": "Jodhpur",
        "school_cityarea": "Bhagat ki Kothi",
        "school_admission_status": "Open",
        "school_ranking": 1,
        "__v": 0,
        "score": 2.2
    },
*/
