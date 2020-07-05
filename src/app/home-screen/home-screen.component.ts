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
                name: 'HARSHITHA T',
                id: '1',
                dob: '12.09.1993',
                Gender:  'Female',
                Maritalstatus: 'Unmarried',
                dhosam:  'No',
                fathersname: 'Thangavelu A',
                fathersOccupation: 'Business',
                 mothersname: 'Meeradevi S',
                mothersOccupation: 'Homemaker',
                education: 'B.E',
                occupation: 'IT',
                company: 'Cognizant Technology Solutions',
                class: 'MIDDLE CLASS',
                salary: '40000',
                veedu : '8',
                siblings : 'Brother studying B.E',
                native: 'Hosur',
                livingLocation: 'Hosur',
                         


      },

      {

                name: 'Apsara S',
        id: '27',
        dob: '9.2.1991',
        Gender:  'Female',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not sure',
        fathersname: 'Srinivasan N(late)',
        fathersOccupation: 'NA',
         mothersname: ' Jeyalakshmi S',
        mothersOccupation: 'Home Maker',
        education: 'BE',
        occupation: 'Not Received',
        company: 'Not Received',
        class: 'Middle class ',
        salary: 'Not Received',
        veedu : '8',
        siblings : '1',
        native: 'Dindigul ',
        livingLocation: 'Chennai',

      },

      {

                name: 'Vimala M',
        id: '28',
        dob: '08.10.1994',
        Gender:  'Female',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'Not Received',
        fathersOccupation: 'Business',
         mothersname: 'Not Received',
        mothersOccupation: 'Home Maker',
        education: 'BBA, MBA, PGDHRM ',
        occupation: 'Not Received',
        company: 'HSBC Electronic Data Processing pvt Ltd , Bangalore',
        class: 'Not Received',
        salary: 'Not Received',
        veedu : '8',
        siblings : 'Not Received',
        native: 'Not Received',
        livingLocation: 'Not Received',

      },

      {
                name: 'Hemalatha',
                id: '23',
                dob: '17-10-1995',
                Gender:  'Female',
                Maritalstatus: 'Unmarried',
                dhosam:  'No',
                fathersname: 'K.Sundararaj',
                fathersOccupation: 'D.Sc Agricultural- Now (Farmer)',
                 mothersname: 'S.Lakshmi',
                mothersOccupation: 'Home Maker',
                education: 'BE -ECE',
                occupation: 'Not Received',
                company: 'MNC- Core',
                class: 'Middle Class',
                salary: '20000( Now Preparing government exam)',
                veedu : '8',
                siblings : '2 ( 1 younger sister, 1 younger brother)',
                native: 'Theni',
                livingLocation: 'Theni',
        


      },

      {
                name: 'C. Parimaladevi ',
                id: '25',
                dob: '18.04.1989',
                Gender:  'Female',
                Maritalstatus: 'Unmarried',
                dhosam:  'Raghu Kadhu ',
                fathersname: 'R. chokkalingam (late)',
                fathersOccupation: 'NA',
                 mothersname: 'C. Subbulakshmi ',
                mothersOccupation: 'Floor mills ',
                education: 'B.sc.,M. SC.,  M. Phil',
                occupation: 'Assistant Professor ',
                company: 'Engineering College',
                class: 'Middle Class',
                salary: '20000',
                veedu : '8',
                siblings : '1 sister',
                native: 'Udumalaipetti',
                livingLocation: 'Erisinampatti,Udumalpet',
        
      },

      {
                name: ' K.KAVITHA',
        id: '21',
        dob: '03.10.1994',
        Gender:  'Female',
        Maritalstatus: 'Unmarried',
        dhosam:  'RAGHU KEDHU DHOSAM',
        fathersname: 'S.KARUPPAN',
        fathersOccupation: 'IT.professional ',
         mothersname: 'K.Muthumari',
        mothersOccupation: 'Home Maker',
        education: 'B.Tech IT MBA.',
        occupation: 'IT..software ',
        company: 'TCS ',
        class: 'Upper middle class ',
        salary: '40000',
        veedu : '8',
        siblings : '1 YOUNGER BROTHER /B.E software ',
        native: 'Chennai',
        livingLocation: 'Chennai',

      },

     
      {
                name: ' H. Gnana priya ',
                id: '12',
                dob: '15/12/1996',
                Gender:  'Female',
                Maritalstatus: 'Unmarried',
                dhosam:  'No',
                fathersname: 'm. HariKrishnan (late)',
                fathersOccupation: 'NA',
                 mothersname: 'H. Rukumani',
                mothersOccupation: 'business ',
                education: 'B. Com',
                occupation: 'Not Received',
                company: 'Not Received',
                class: 'Middle Class',
                salary: 'Not Received',
                veedu : '8',
                siblings : '2 younger brother ',
                native: 'Salem ',
                livingLocation: 'Salem ',
        

      },
      
    ],

MTCGroom8Veedu: [
      {
         name: 'R. Vigneshkumar',
        id: '2',
        dob: '09.03.1990',
        Gender:  'Male',
        Maritalstatus: 'Unmarried ',
        dhosam:  'Not Received',
        fathersname: 'Rajendran',
        fathersOccupation: 'Self employed',
         mothersname: 'Ms.  Maheswari',
        mothersOccupation: 'Self employed',
        education: 'M. B. A(logistics)',
        occupation: 'Materialsmanager',
        company: 'Auro lab ( Aravind eye hospitals  Madurai)',
        class: 'Middle',
        salary: '32000  pm',
        veedu : '8',
        siblings : 'No',
        native: 'B. K. Patty   THENI',
        livingLocation: 'Madurai.',

      },

      {
                name: 'Sivakumar.G',
                id: '29',
                dob: '24.1.1988',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'chevvai or sutha jathagam',
                fathersname: 'Gurunathan(late)',
                fathersOccupation: 'NA',
                 mothersname: 'Radha',
                mothersOccupation: 'Grocer',
                education: 'M.A., M.Phil., ',
                occupation: 'Journalist ',
                company: 'Daily newspaper',
                class: 'Middle class ',
                salary: '38000',
                veedu : '8',
                siblings : '1 Brother',
                native: 'Salem ',
                livingLocation: 'Neikkaarappatty',
        
      },

      {
                name: 'S. ANGURAJ',
                id: '26',
                dob: '32547',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'Raghu Kadhu ',
                fathersname: 'Subramaniam ',
                fathersOccupation: 'Business',
                 mothersname: 'Bhagayalakshmi',
                mothersOccupation: 'Home Maker',
                education: 'BE -EEE',
                occupation: 'Private sector Business ',
                company: 'private sector',
                class: 'Middle Class',
                salary: 'Not Received',
                veedu : '8',
                siblings : '1 sister -married',
                native: 'udumalpet',
                livingLocation: 'udumalpet',
        

      },

      {
                name: 'Janarthanan',
                id: '24',
                dob: '16/10/1991',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'Ragu Keethu ',
                fathersname: 'R.Thangaraj',
                fathersOccupation: 'Not Received',
                 mothersname: 'Dhanalakshmi ',
                mothersOccupation: 'Not Received',
                education: 'Diploma catering',
                occupation: 'Own Business',
                company: 'Own Business',
                class: 'Not Received',
                salary: '30000',
                veedu : '8',
                siblings : '1 Brother',
                native: 'Trichy ',
                livingLocation: 'Not Received',
        
      },

      {
                name: 'sanjeevan ',
        id: '17',
        dob: '10.05.1972',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'No',
        fathersname: 'Not Received',
        fathersOccupation: 'Not Received',
         mothersname: 'Not Received',
        mothersOccupation: 'Not Received',
        education: 'B sc., agricultural science',
        occupation: 'Sanjeevan agro service',
        company: 'Sanjeevan agro service',
        class: 'Not Received',
        salary: 'Not Received',
        veedu : '8',
        siblings : 'Not Received',
        native: 'Not Received',
        livingLocation: 'Not Received',

      },
      {        name: 'Kamlesh',
              id: '19',
              dob: '28189',
              Gender:  'Male',
              Maritalstatus: 'Not Received',
              dhosam:  'Not Received',
              fathersname: 'Not Received',
              fathersOccupation: 'Not Received',
               mothersname: 'Not Received',
              mothersOccupation: 'Not Received',
              education: 'M.tech(Business)',
              occupation: 'Not Received',
              company: 'Not Received',
              class: 'Not Received',
              salary: '50000(Rent)',
              veedu : '8',
              siblings : 'Not Received',
              native: 'Not Received',
              livingLocation: 'Not Received',
      },
      {
                name: 'Vignesh',
                id: '9',
                dob: '16.09.1991',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'Ragu Kethu',
                fathersname: 'Raja',
                fathersOccupation: 'Accounts in metal shop',
                 mothersname: 'Malarkodi',
                mothersOccupation: 'Home Maker',
                education: '12th',
                occupation: 'Album design ( own business )',
                company: 'Album design ( own business )',
                class: 'Middle Class',
                salary: '25000rs',
                veedu : '8',
                siblings : '1 elder brother married 2 younger brother',
                native: 'athappanpatti ( ottanchathram )',
                livingLocation: 'Coimbatore',
        

      },
     
     {
              name: 'Anandha Kumar',
              id: '11',
              dob: '18.04.1988',
              Gender:  'Male',
              Maritalstatus: 'Unmarried',
              dhosam:  'No',
              fathersname: 'Ramakrishnan.k',
              fathersOccupation: 'Flower ',
               mothersname: 'palaniammal',
              mothersOccupation: 'Home maker/occupation ',
              education: 'B.B.M',
              occupation: 'Business ',
              company: 'RP Digital Lights&Sounds& Decors Event management',
              class: 'Middle Class',
              salary: '60000',
              veedu : '8',
              siblings : 'one sister married',
              native: 'Theni',
              livingLocation: 'TIRUPUR',
      

     },

     {        name: 'K GEETHAPRIYAN ',
             id: '13',
             dob: '27-12-1979 ',
             Gender:  'Male',
             Maritalstatus: 'Unmarried',
             dhosam:  'Doesnt matter',
             fathersname: 'K KRISHNASWAMY (RAJU)',
             fathersOccupation: 'Passed away',
              mothersname: 'INDRANI KRISHNASWAMY ',
             mothersOccupation: 'Home maker ',
             education: 'Bsc',
             occupation: 'Business(Long Leave from Government Job)',
             company: 'GD Deals(Reclaimed Wood Business)',
             class: 'Middle Class',
             salary: '100000',
             veedu : '8',
             siblings : '02 Brothers 01 Married',
             native: 'Palakkad Kerala',
             livingLocation: 'Palakkad Kerala',
     },
{        name: 'pradeepkumar',
        id: '15',
        dob: '25/10/1989',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Rahu ketu',
        fathersname: 'Rathinam',
        fathersOccupation: 'ret- Tnstc',
         mothersname: 'vasanthi',
        mothersOccupation: 'Home Maker',
        education: 'BE-ECE',
        occupation: 'Not Received',
        company: 'hdfc bank',
        class: 'Middle Class',
        salary: '22000',
        veedu : '8',
        siblings : '1',
        native: 'Mettur',
        livingLocation: 'Mettur',
},

{
          name: 'R.Vignesh kumar',
        id: '16',
        dob: '33119',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'No',
        fathersname: 'K.Rajendran',
        fathersOccupation: 'Business',
         mothersname: 'R.Maheswari',
        mothersOccupation: 'Home Maker',
        education: 'B.com CA MBA',
        occupation: 'Logistics aurolab (Aravind eye hospital) Madurai',
        company: 'Not Received',
        class: 'Middle Class',
        salary: '30000',
        veedu : '8',
        siblings : 'Not Received',
        native: 'BK.patti,Theni ',
        livingLocation: 'BK.patti,Theni ',

},
      
    ],
MTCBride16Veedu : [
      {

                name: 'BAAVANA',
        id: '18',
        dob: '21/10/1995',
        Gender:  'Female',
        Maritalstatus: 'Unmarried',
        dhosam:  'RAGHU KETHU',
        fathersname: 'V N Karunakaran',
        fathersOccupation: 'Business',
         mothersname: 'Nirmala',
        mothersOccupation: 'occupation ',
        education: 'B.com., MBA (Finance)',
        occupation: 'Not Received',
        company: 'Accenture - Chennai',
        class: 'Upper middle class ',
        salary: 'on request',
        veedu : '16',
        siblings : '1 younger brother',
        native: 'Chennai',
        livingLocation: 'Chennai',

       
      },

      {        name: 'P.M.ANITHA',
              id: '20',
              dob: '06.03.1990',
              Gender:  'Female',
              Maritalstatus: 'Unmarried',
              dhosam:  'NO DHOSAM',
              fathersname: 'P.G.MURALIKUMAR',
              fathersOccupation: 'Business',
               mothersname: 'P.M.LATHA',
              mothersOccupation: 'BUSINESS',
              education: ' B.E',
              occupation: 'IT',
              company: 'HCL TECHNOLOGY',
              class: 'Upper class ',
              salary: '60000',
              veedu : '16',
              siblings : '1 YOUNGER SISTER',
              native: 'Chennai',
              livingLocation: 'Chennai',
      },
      
    ],
MTCGroom16Veedu: [
      {
                name: 'V.Karthik',
        id: '3',
        dob: '10-Jan-1989',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'Vadivel',
        fathersOccupation: 'Late',
         mothersname: 'Rani',
        mothersOccupation: 'Home Maker',
        education: 'B.tech',
        occupation: 'IT',
        company: 'TCS',
        class: 'MIDDLE CLASS',
        salary: '50000 take home',
        veedu : '16',
        siblings : '2 elder sister(got Married)',
        native: 'Thanjur',
        livingLocation: 'Chennai',


      },

      {
                name: 'Kamaraj',
                id: '10',
                dob: '20-11-90',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'Not Received',
                fathersname: 'Not Received',
                fathersOccupation: 'Business man',
                 mothersname: 'Not Received',
                mothersOccupation: 'Home Maker',
                education: 'BE',
                occupation: 'Design Estimator - Cochin',
                company: 'Not Received',
                class: 'Not Received',
                salary: '40000',
                veedu : '16',
                siblings : '1 sister -married && 1 Brother - Working in private sector',
                native: 'Not Received',
                livingLocation: 'Not Received',
        
      },
{
                name: 'Devendran',
                id: '22',
                dob: '27.5.1991',
                Gender:  'Male',
                Maritalstatus: 'Unmarried',
                dhosam:  'Ragu gethu dosam',
                fathersname: 'Gangadurai',
                fathersOccupation: 'Mechanic ',
                 mothersname: 'Rathina',
                mothersOccupation: 'Home Maker',
                education: '12th std',
                occupation: 'Agent in RTO office',
                company: 'Agent in RTO office',
                class: 'Middle',
                salary: '40000',
                veedu : '16',
                siblings : '1',
                native: 'Pollachi',
                livingLocation: 'Coimbatore',
        

},

      {
                name: 'K.Kalidhas',
        id: '4',
        dob: '28.06 1994',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'K.Kandasamy(Late)',
        fathersOccupation: 'NA',
         mothersname: 'K.Ayyammal',
        mothersOccupation: 'Home Maker',
        education: 'BE',
        occupation: 'Not Received',
        company: 'HCL Technologies Ltd , chennai',
        class: 'MIDDLE CLASS',
        salary: '40000',
        veedu : '16',
        siblings : '1 younger brother',
        native: 'Pollachi',
        livingLocation: 'Pollachi',

        

      },
      {
                name: 'logu j.m',
        id: '5',
        dob: '19-06-1990',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'murali .a',
        fathersOccupation: 'Business (Bakery consultancy)',
         mothersname: 'jayanthi.m',
        mothersOccupation: 'Home Maker',
        education: 'B.sc hotel managment ',
        occupation: 'Business (mens wear shop)',
        company: 'Vee fashion,5roads, salem',
        class: 'Upper middle class ',
        salary: '50-60k per month ',
        veedu : '16',
        siblings : '1 elder brother(married)and 1 younger sister(engaged)',
        native: 'salem',
        livingLocation: 'salem',


      },
      {
                name: 'R.Gowtham',
        id: '6',
        dob: '35067',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'T.Ramakrishnan',
        fathersOccupation: 'Business',
         mothersname: 'R.Sumathi',
        mothersOccupation: 'Home Maker',
        education: 'D.EEE',
        occupation: 'Business ',
        company: 'Sri Sakthi Foods',
        class: 'MIDDLE CLASS',
        salary: '30, 000-40, 000',
        veedu : '16',
        siblings : '1 Elder Sister Married',
        native: 'Pollachi Kottur',
        livingLocation: 'Palladam Tiruppur',

        

      },
      {
                name: 'VIGNESH KUMAR',
        id: '7',
        dob: '24/04/1991',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'RAGHU KETHU',
        fathersname: 'P.MURUGANATHAM',
        fathersOccupation: 'TRAVELS',
         mothersname: 'REVATHI',
        mothersOccupation: 'BUSSINES',
        education: 'BE. EEE',
        occupation: 'ENGINEERING',
        company: 'MALAYSIA',
        class: 'MIDDLE CLASS',
        salary: '75000',
        veedu : '16',
        siblings : '1 younger brother',
        native: 'Pollachi',
        livingLocation: 'KUALA LUMPUR, MALAYSIA',

        

      },
      {
                name: 'Harinarendraprasath',
        id: '8',
        dob: '34678',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'No',
        fathersname: 'Sivalingam',
        fathersOccupation: 'TIIC govt retired',
         mothersname: 'Sabareeswari',
        mothersOccupation: 'Home Maker',
        education: 'BE',
        occupation: 'IT',
        company: 'Cognizant Technology Solutions,CBE',
        class: 'Upper',
        salary: '45000',
        veedu : '16',
        siblings : 'elder sister- Married',
        native: 'Vettaikkaranpudur, Pollachi',
        livingLocation: 'Vettaikkaranpudur',


      },

      {
         name: 'vivek. J',
        id: '14',
        dob: '33487',
        Gender:  'Male',
        Maritalstatus: 'Unmarried',
        dhosam:  'Not Received',
        fathersname: 'JAISANKAR. T',
        fathersOccupation: 'bussiness',
         mothersname: 'kalanidhi. J',
        mothersOccupation: 'house wife',
        education: ' B.E',
        occupation: 'IT',
        company: 'Innopal',
        class: 'Middle Class',
        salary: 'yearly 5L',
        veedu : '16',
        siblings : 'one brother ',
        native: 'Chennai',
        livingLocation: 'Chennai',

      },
      
    ],
MTC16VeeduDoctor: [
      {
        

      },
      
    ],
MTC8VeeduDoctor: [
      {
       

      },
      
    ],
MTC16VeeduRemarriage: [
      {
        

      },
      
    ],
MTC8VeeduRemarriage: [
      {
        

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
