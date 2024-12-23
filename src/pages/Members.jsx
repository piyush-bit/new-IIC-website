import React from 'react';
import CardSection from '../Cardsection';


export const Members = () => {
  const items = [
    { id: 1, title: "Bodhisattwa Sanghapriya", description: "FORMER TEAM CAPTAIN", image: "/images/BodhisattwaSanghapriya.jpg", year: 'Founding Year'},
    { id: 2, title: "Om Prakash Das", description: "FORMER CHIEF COMMUNICATION OFFICER", image: "/images/OmPrakashDas.jpg", year:'Founding Year' },
    { id: 3, title: "Anurag Behera", description: "FORMER AVIONICS ARCHITECT", image: "/images/AnuragBehera.jpg", year: 'Founding Year' },
    { id: 4, title: "Anshuman Dikshit", description: "FORMER ELECTRONICS ARCHITECT", image: "/images/AnshumanDikshit.jpg", year: 'Founding Year' },
    { id: 5, title: "Dinesh Kumar Mohanty", description: "FORMER APP DEVELOPER", image: "/images/DineshKumarMohanty.jpg", year: 'Founding Year' },
    { id: 6, title: "Chandan Mandal", description: "FORMER WEB DEVELOPER", image: "/images/ChandanMandal.jpg", year: 'Founding Year' },
    { id: 7, title: "Joshit Mohanty", description: "FORMER MECHATRONICS LEAD", image: "/images/JoshitMohanty.jpg", year: 'Founding Year' },
    { id: 8, title: "Anil Pradhan", description: "FORMER DESIGN LEAD", image: "/images/AnilPradhan.jpg", year: 'Founding Year' },
    { id: 9, title: "Tapas Mahanta", description: "FORMER ELECTRONICS LEAD", image: "/images/TapasMahanta.jpg", year: 'Founding Year' },
    { id: 10, title: "Jaswasi Sahoo", description: "Team Captain HEAD OF PROPULSION", image: "/images/JaswasiSahoo.jpg", year: 2019 },
    { id: 11, title: "Apurwa Masook", description: "PUBLIC RELATION OFFICER (P.R.O.) GEOMATICS ANALYST", image: "/images/ApurwaMasook.jpg", year: 2019 },
    { id: 12, title: "Sudarshan Samal", description: "CHIEF TECHNOLOGY OFFICER (CTO) HEAD OF MECHATRONICS", image: "/images/SudarshanSamal.jpg", year: 2019 },
    { id: 13, title: "Sovan Panda", description: "CHIEF TECHNOLOGY OFFICER (CTO) HEAD OF MECHANICAL DESIGNS", image: "/images/SovanPanda.jpg", year: 2019 },
    { id: 14, title: "Ranjan Panda", description: "CHIEF DESIGN OFFICER HEAD OF INTERNAL AFFAIRS.", image: "/images/RanjanPanda.jpg", year: 2019 },
    { id: 15, title: "Tatwam Siddha Nanda", description: "CHIEF R&D MAVEN SCHOLAR", image: "/images/TatwamSiddhaNanda.jpg", year: 2019 },
    { id: 16, title: "Sahasransu Purohit", description: "CHIEF HR MANAGER STRUCTURAL REMOTE SENSING ANALYST", image: "/images/SahasransuPurohit.jpg", year: 2019 },
    { id: 17, title: "Sumit Kumar Sahu", description: "GENERAL MANAGER MODELLING EXPERT.", image: "/images/SumitKumarSahu.jpg", year: 2019 },
    { id: 18, title: "Pranaya Panda", description: "AERODYNAMIC ANALYST SIMULATION EXPERT", image: "/images/PranayaPanda.jpg", year: 2019 },
    { id: 19, title: "Rounak Agrawal", description: "PROGRAMMER", image: "/images/RounakAgrawal.jpg", year: 2019 },
    { id: 20, title: "Kunal Mittal", description: "HEAD OF COMMERCE DESIGN ANALYST.", image: "/images/KunalMittal.jpg", year: 2019 },
    { id: 21, title: "Rahul Nayak", description: "LEAD FLIGHT REGULATION", image: "/images/RahulNayak.jpg", year: 2019 },
    { id: 22, title: "Satyabrat Nath", description: "IGNITION EXPERT PYROTECHNIC ANALYST", image: "/images/SatyabratNath.jpg", year: 2019 },
    { id: 23, title: "Satyam Kumar", description: "LEAD FLIGHT CONTROL", image: "/images/SatyamKumar.jpg", year: 2019 },
    { id: 24, title: "Aditya Narayan Ojha", description: "LEAD AVIONICS ARCHITECT", image: "/images/AdityaNarayanOjha.jpg", year: 2019 },
    { id: 25, title: "Biswajeet Sahoo", description: "LEAD ELECTRONICS ARCHITECT", image: "/images/BiswajeetSahoo.jpg", year: 2019 },
    { id: 26, title: "Marshal Sahu", description: "LEAD PROGRAMMER", image: "/images/MarshalSahu.jpg", year: 2019 },
    { id: 27, title: "Subhasmita Panda", description: "Core Management Team Member at IIC", image: "/images/SUBHASMITAPANDA.jpg", year: 2019 },
    { id: 28, title: "SUKRITI KHANDELWAL", description: "Core Management Member", image: "/images/SUKRITIKHANDELWAL.jpg", year: 2019 },
    { id: 29, title: "SALONI DHAL", description: "Chief Content Officer", image: "/images/SALONIDHAL.jpg", year: 2019 },
    { id: 30, title: "MAMTA GUPTA", description: "Chief Workforce Manager", image: "/images/MAMTAGUPTA.jpg", year: 2019 },
    { id: 31, title: "SAILEY BALODIA", description: "Core Management Team Member at IIC.", image: "/images/SAILEYBALODIA.jpg", year: 2019 },
    { id: 32, title: "MAHIMA CHACHRA", description: "Core Management Team Member at IIC", image: "/images/MAHIMACHACHRA.jpg", year: 2019 },
    { id: 33, title: "Anshuman Pattanaik", description: "Secretary", image: "/images/Anshuman.jpg", year: 2020 },
    { id: 34, title: "Bibhudatta Panda", description: "Head of Mechanical Design", image: "/images/bibhudatta.jpg", year: 2020 },
    { id: 35, title: "Soumyajeet Mahapatra", description: "Head of Avionics.", image: "/images/soumyajeet.jpg", year: 2020 },
    { id: 36, title: "Amartya Mohanty", description: "Modeling Expert", image: "/images/Amartya.jpg", year: 2020 },
    { id: 37, title: "Markandeya Mohapatra", description: "Public Relation Officer & Head of Rocket Propulsion", image: "/images/markandeya.jpg", year: 2020 },
    { id: 38, title: "Prasant Kumar Sahoo", description: "Head Of Electronics", image: "/images/prasant.jpg", year: 2020 },
    { id: 39, title: "Sourav Kumar Sahoo", description: "Chief R&D", image: "/images/sourav.jpg", year: 2020 },
    { id: 40, title: "Lakshya Agrawal", description: "Head Programmer", image: "/images/lakshya.jpg", year: 2020 },
    { id: 41, title: "Rohit Tekriwal", description: "Management Associate", image: "/images/member41.jpeg", year: 2020 },
    { id: 42, title: "Rashmi Ranjan Pattnaik", description: "Head Of Structural Design", image: "/images/rashmi.jpg", year: 2020 },
    { id: 43, title: "Sritam Jena", description: "Core Management", image: "/images/sritam.jpg", year: 2020 },
    { id: 44, title: "Bhabya Mohanty", description: "Mechatronics Lead", image: "/images/bhabya.jpg", year: 2020 },
    { id: 45, title: "Saswat Nanda", description: "Web Development Head", image: "/images/saswat.jpg", year: 2020 },
    { id: 46, title: "Suchita Toppo", description: "Core Management", image: "/images/Suchita.jpg", year: 2020 },
    { id: 47, title: "Siwani Gupta", description: "Core Management", image: "/images/Shiwani.jpg", year: 2020 },
    { id: 48, title: "Pratikshya Das", description: "Core Management", image: "/images/pratikhya.jpg", year: 2020 },
    { id: 49, title: "Sweekriti Singh", description: "Core Management", image: "/images/sweekirti.jpg", year: 2020 },
    { id: 50, title: "Sunita Nanda", description: "Core Management", image: "/images/sunita.jpg", year: 2020 },
    { id: 51, title: "Subhashree Nayak", description: "Core Management", image: "/images/subhshree.jpg", year: 2020 },
    { id: 52, title: "Pullavarti Sumadhuri", description: "Core Management", image: "/images/IMG-20200613-WA0046.jpg", year: 2020 },
    { id: 53, title: "Mukesh Nayak", description: "Secretary", image: "/images/mukeshnayak.jpg", year: 2021 },
    { id: 54, title: "Yashraj Panda", description: "Public Relations Officer", image: "/images/yash2.jpg", year: 2021 },
    { id: 55, title: "Snehal Saurav", description: "VSLV Team Captain", image: "/images/snehal.jpg", year: 2021 },
    { id: 56, title: "Gyana Ranjan Sahoo", description: "Chief Technology Officer", image: "/images/gyana.jpg", year: 2021 },
    { id: 57, title: "Subrat Samantaraya", description: "Chief Design Officer", image: "/images/subratsamant.jpg", year: 2021 },
    { id: 58, title: "Biswajit Beuria", description: "Team Manager", image: "/images/biswajit.jpg", year: 2021 },
    { id: 59, title: "Anas Ahmed Khan", description: "Head of Avionics", image: "/images/anas(2).jpg", year: 2021 },
    { id: 60, title: "Ayush Pandey", description: "Head of Telemetry Architect", image: "/images/ayush2.jpg", year: 2021 },
    { id: 61, title: "Sovit Acharya", description: "Chief Workforce Manager", image: "/images/sovit.jpg", year: 2021 },
    { id: 62, title: "Pratik Pankaj Pattanayak", description: "Design & Recovery", image: "/images/pratikpankaj.jpg", year: 2021 },
    { id: 63, title: "M.D Zisan", description: "Chief R&D", image: "/images/zisan.jpg", year: 2021 },
    { id: 64, title: "Tusharkant Behera", description: "Core Mechanical", image: "/images/tusharkanta.jpg", year: 2021 },
    { id: 65, title: "Devraj Patra", description: "Propulsion Head", image: "/images/debraj.jpg", year: 2021 },
    { id: 66, title: "Nitesh Kabi", description: "Ignition Expert", image: "/images/nitesh.jpg", year: 2021 },
    { id: 67, title: "Soumyaranjan Das", description: "Electronics Architect", image: "/images/soumyaranjan.jpg", year: 2021 },
    { id: 68, title: "Bijay Bhaskar Hota", description: "Aerodynamic Simulation Lead", image: "/images/bijay.jpg", year: 2021 },
    { id: 69, title: "Sourav Singh", description: "Design & Simulation.", image: "/images/sourav.jpg", year: 2021 },
    { id: 70, title: "Rohit Kumar Das", description: "Lead Flight Controller", image: "/images/rohit.jpg", year: 2021 },
    { id: 71, title: "Subrajit Nayak", description: "Core Mechanical", image: "/images/flat-faces-icons-circle-man-6.png", year: 2021 },
    { id: 72, title: "Sakalabaktula Prem Chand", description: "Core Management & Propulsion", image: "/images/premchand.png", year: 2021 },
    { id: 73, title: "Soumyaranjan Jena", description: "Core Electronics", image: "/images/soumyaranjanjena.jpg", year: 2021 },
    { id: 74, title: "Suraj Gupta", description: "Programmer", image: "/images/SURAJK.jpg", year: 2021 },
    { id: 75, title: "Swati Rout", description: "Project Integration Manager", image: "/images/swati.jpg", year: 2021 },
    { id: 76, title: "Soumya Sucharita Nayak", description: "Project Integration Manager", image: "/images/soumya1.jpg", year: 2021 },
    { id: 77, title: "Rupali Rout", description: "Modeling Expert", image: "/images/rupali.jpg", year: 2021 },
    { id: 78, title: "Sasmita Mohanty", description: "Programmer", image: "/images/sasmita.jpg", year: 2021 },
    { id: 79, title: "Neha Gupta", description: "Chief Content Writer", image: "/images/neha.jpg", year: 2021 },
    { id: 80, title: "Swetaparna Maharana", description: "Core Management", image: "/images/swetaparna.jpg", year: 2021 },
    { id: 81, title: "Priyatii Panigrahy", description: "Core Electronics", image: "/images/flat-faces-icons-circle-man-6.png", year: 2021 },
    { id: 82, title: "Smrutishree Dhir", description: "Algorithm Analyst", image: "/images/smrutishree.jpg", year: 2021 },
    { id: 83, title: "Shweta Patel", description: "Core Management", image: "/images/swetaparna.jpg", year: 2021 },

    { id: 84, title: "Debankar Shubhram", description: "Coordinator", image: "/Image2024/img2.jpg", year: 2025 },
  { id: 85, title: "Famiya Tasneem", description: "Management lead", image: "/Image2024/img8.jpg", year: 2025 },
  { id: 86, title: "Aditya Singh Rai", description: "Graphic designer lead", image: "/Image2024/img18.jpg", year: 2025 },
  { id: 87, title: "Swagat Shekhar Panda", description: "Video production Lead", image: "/Image2024/img16.jpg", year: 2025 },
  { id: 88, title: "B Ashish Kumar Patro", description: "Content Lead", image: "/Image2024/img17.jpg", year: 2025 },
  { id: 89, title: "Rajiv Mishra", description: "Content Lead", image: "/Image2024/img13.jpg", year: 2025 },
  { id: 90, title: "Jyoti Prakash Jena", description: "Mechanical lead", image: "/Image2024/img11.jpg", year: 2025 },
  { id: 91, title: "Faizur Rahman", description: "Mechanical lead", image: "/Image2024/img14.jpg", year: 2025 },
  { id: 92, title: "Milan Ram", description: "Chemical lead", image: "/Image2024/img7.jpg", year: 2025 },
  { id: 93, title: "Ananya Pradhan", description: "Chemical lead", image: "/images/chemco.jpg", year: 2025 },
  { id: 94, title: "Inayatulla Khan", description: "Electronics lead", image: "/Image2024/img1.jpg", year: 2025 },
  { id: 95, title: "Pallabi Parimita Nayak", description: "Electronics lead", image: "/Image2024/img5.jpg", year: 2025 },
  { id: 96, title: "Tushar Panigrahi", description: "Coding lead", image: "/Image2024/img12.jpg", year: 2025 },
  { id: 97, title: "Sibasis Badatya", description: "Coding lead", image: "", year: 2025 },
  { id: 98, title: "Aniket Pradhan", description: "Web Dev. Lead", image: "/Image2024/img3.jpg", year: 2025 },
  { id: 99, title: "Subhankara Nayak", description: "Rover captain", image: "/Image2024/img15.jpg", year: 2025 },
  { id: 100, title: "Pritam Jena", description: "Project Designing Lead", image: "/Image2024/img4.jpg", year: 2025 },
  { id: 101, title: "Abhijeet Rath", description: "Head of Public Relations", image: "/Image2024/img10.jpg", year: 2025 },

    //2023-batch
    { id: 102, title: "Punyaslok Swain", description: "Student Coordinator", image: "", year: 2023 },
  { id: 103, title: "Amlan Mishra", description: "Chief Technical Officer", image: "", year: 2023 },
  { id: 104, title: "Subham Behera", description: "Public Relation Officer", image: "", year: 2023 },
  { id: 105, title: "Rishav Nanda", description: "Lead Flight Controller", image: "", year: 2023 },
  { id: 106, title: "Narattom Jena", description: "Head of Avionics and Recovery Division", image: "", year: 2023 },
  { id: 107, title: "Rakesh Mahapatra", description: "Head of Telemetry", image: "", year: 2023 },
  { id: 108, title: "Sidhant Kumar Raut", description: "Head of Structure Design and Stimulation", image: "", year: 2023 },
  { id: 109, title: "Satyajit Sahu", description: "Head of Engine Design and Manufacturing", image: "", year: 2023 },
  { id: 110, title: "Shuvashish Naik", description: "Head of Geomatics", image: "", year: 2023 },
  { id: 111, title: "Debashis Behera", description: "Head of System Integration", image: "", year: 2023 },
  { id: 112, title: "Sudhansu Panigrahi", description: "Head of R&D", image: "", year: 2023 },
  { id: 113, title: "Sanjeeb Sah", description: "Head of Propulsion", image: "", year: 2023 },
  { id: 114, title: "Bibek Behura", description: "Chief Material Designer", image: "", year: 2023 },
  { id: 115, title: "Jyotiprakash Sahoo", description: "Chief of Electrical Systems", image: "", year: 2023 },
  { id: 116, title: "Jyotsana Kumari Gupta", description: "Head of Algorithm and Data Analysis", image: "", year: 2023 },
  { id: 117, title: "Smruti Samantray", description: "Head of Project Integration", image: "", year: 2023 },
  { id: 118, title: "Pritam Das", description: "Core Structural", image: "", year: 2023 },
  { id: 119, title: "Sanket Das", description: "Core Electronics", image: "", year: 2023 },
  { id: 120, title: "Gargi Patnaik", description: "Core Electronics", image: "", year: 2023 },
  { id: 121, title: "Asmita Meher", description: "Core Electronics", image: "", year: 2023 },
  { id: 122, title: "Subhashree Dash", description: "Core Propulsion", image: "", year: 2023 },
  
  //2022-batch
  { id: 123, title: "Subhashree Dash", description: "", image: "/Image2024/default.png", year: 2022 },
  { id: 124, title: "Ritesh Nanda", description: "", image: "", year: 2022 },
  { id: 125, title: "Prasenjit Ghose", description: "", image: "", year: 2022 },
  { id: 126, title: "Tushar Ranjan Das", description: "", image: "", year: 2022 },
  { id: 127, title: "Manasis Das", description: "", image: "", year: 2022 },
  { id: 128, title: "Tushar Sharma", description: "", image: "", year: 2022 },
  { id: 129, title: "Partha Sarathi Dash", description: "", image: "", year: 2022 },
  { id: 130, title: "Swayashi Sthitapragyan", description: "", image: "", year: 2022 },
  { id: 131, title: "Raj Das", description: "", image: "", year: 2022 },
  { id: 132, title: "Suparna Biswal", description: "", image: "", year: 2022 },
  { id: 133, title: "Harekrishna Pradhan", description: "", image: "", year: 2022 },
  { id: 134, title: "Arpit Jain", description: "", image: "", year: 2022 },
  { id: 135, title: "Kedarnath Sahu", description: "", image: "", year: 2022 },
  { id: 136, title: "Nishant Kumar Ray", description: "", image: "", year: 2022 },
  { id: 137, title: "Vivek Kumar", description: "", image: "", year: 2022 },
  { id: 138, title: "Mrutyunjay Kumar", description: "", image: "", year: 2022 },
  { id: 139, title: "Kumar Harsh", description: "", image: "", year: 2022 },
  { id: 140, title: "Ananya Panigrahi", description: "", image: "", year: 2022 },
  { id: 141, title: "Prakriti Aloo", description: "", image: "", year: 2022 },
  { id: 142, title: "Nirlipta Parida", description: "", image: "", year: 2022 },
  { id: 143, title: "Ritika Kar", description: "", image: "", year: 2022 },


  ];

  return (
    <div className="flex justify-center items-center bg-primary min-h-screen">
      <CardSection items={items} />
    </div>
  );
};

