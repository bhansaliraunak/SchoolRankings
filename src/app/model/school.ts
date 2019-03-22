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
              school_ranking,  v ) {

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


