export class SchoolData {

  public _id: any;
  public school_admission_status: any;
  public school_city: any;
  public school_cityarea: any;
  public school_name: any;
  public school_ranking: any;
  public school_state: any;
  public _v: any;

  constructor(id, school_name, school_state, school_city,
    school_cityarea, school_admission_status,
    school_ranking, v) {

    this._id = id;
    this.school_admission_status = school_admission_status;
    this.school_city = school_city;
    this.school_cityarea = school_cityarea;
    this.school_name = school_name;
    this.school_ranking = school_ranking;
    this.school_state = school_state;
    this._v = v;
  }
}


export interface School {
  keywords: [];
  _id: string;
  school_name: string;
  school_city: string;
  school_cityarea: string;
  school_admission_status: string;
  school_ranking: number;
  score: number;
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
