import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {


  dataSet = {
    mainData : [
    ],
    
    MTCBride8Veedu: [
      {
        mid:'',
        name:'24MTC Bride 8 Veedu Details will display soon',
        dob: '',
        Gender: 'Female', 
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 8,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],

MTCGroom8Veedu: [
      {
        mid:'',
        name:'24MTC Groom 8 Veedu Details will display soon',
        dob: '',
        Gender: 'Male',
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu :8 ,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTCBride16Veedu : [
      {
        mid:'',
        name:'24MTC Bride 16 Veedu Details will display soon',
        dob: '',
        Gender: 'Female',
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu :16 ,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTCGroom16Veedu: [
      {
        mid:'',
        name:'24MTC Groom 16 Veedu Details will display soon',
        dob: '',
        Gender: 'Male',
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 16,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTC16VeeduDoctor: [
      {
        mid:'',
        name:'24MTC 16 Veedu Doctor Details will display soon',
        dob: '',
        Gender: '',
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 16 ,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTC8VeeduDoctor: [
      {
        mid:'',
        name:'24MTC 8 Veedu Doctor Details will display soon',
        dob: '',
        Gender: '',
        Maritalstatus: 'Unmarried',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 8 ,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTC16VeeduRemarriage: [
      {
        mid:'',
        name:'24MTC 16 Veedu Remarriage Details will display soon',
        dob: '',
        Gender: '',
        Maritalstatus: 'Divorce/Widow',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 16,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],
MTC8VeeduRemarriage: [
      {
        mid:'',
        name:'24MTC 8 Veedu Remarriage Details will display soon',
        dob: '',
        Gender: '',
        Maritalstatus: 'Divorce/Widow',
        fathersOccupation: '',
        mothersOccupation: '',
        education: '',
        occupation:'',
        company:'',
        class: '',
        salary: ' (Take home)',
        veedu : 8 ,
        siblings : '',
        native: '',
        livingLocation: ''

      },
      
    ],

    
  


  }

  data = this.dataSet.mainData;

  constructor() { }

  ngOnInit(): void {
  }

  optionChange(event) {
    this.data = this.dataSet[event.target.value];
  }

}
