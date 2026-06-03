/* ================================================================
   ST VISHNA RRN SCHOOL — Data File
   All school data stored here for easy editing
   ================================================================ */

'use strict';

/* ── FACULTY DATA ─────────────────────────────────────────────── */
const FACULTY = [
  {
    name: 'Mrs. Asha Tripathi',
    designation: 'Principal',
    subject: 'Administration',
    photo: 'Faculty/Asha Tripathi.jpeg',
    qualification: 'Double M.A, B.Ed',
    experience: '32 Years',
    about: 'Visionary leader dedicated to educational innovation and student success. Mrs. Asha has transformed the school into a center of excellence since joining.'
  },
  {
    name: 'Mr. Indar Mandhyan',
    designation: 'Vice Principal',
    subject: 'Accounts',
    photo: 'Faculty/Indar Mandhyan.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '22 Years',
    about: 'Experienced administrator ensuring smooth operations, financial efficiency, and institutional development.'
  },
  {
    name: 'Mr. Shashank Srivastava',
    designation: 'Co-ordinator (TGT)',
    subject: 'IT',
    photo: 'Faculty/Shashank Srivastava.jpeg',
    qualification: 'PGDCA, M.Sc (IT), B.Ed',
    experience: '20 Year',
    about: 'Technology educator committed to preparing students for a digitally connected future.'
  },
  {
    name: 'Mrs. Shazia Khanam',
    designation: 'Co-ordinator (PRT)',
    subject: 'English',
    photo: 'Faculty/Shazia Khanam.jpeg',
    qualification: 'BBA, B.Ed',
    experience: '10 Year',
    about: 'Passionate English teacher fostering communication skills, confidence, and lifelong learning.'
  },
  {
    name: 'Mr. Anmol Shukla',
    designation: 'PGT',
    subject: 'Maths',
    photo: 'Faculty/Anmol Shukla.jpeg',
    qualification: 'M.Sc (Maths), B.Ed',
    experience: '7 Year',
    about: 'Dedicated mathematics educator making complex concepts simple, logical, and engaging.'
  },
  {
    name: 'Mr. Mishul Verma',
    designation: 'PGT',
    subject: 'English',
    photo: 'Faculty/Mishul Verma.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '11 Years',
    about: 'Inspiring English teacher encouraging creativity, expression, and academic excellence.'
  },
  {
    name: 'Mr. Rajeev Kumar Mishra',
    designation: 'PGT',
    subject: 'English',
    photo: 'Faculty/Rajeev Mishra.jpeg',
    qualification: 'M.A, LT(B.Ed)',
    experience: '27 Years',
    about: 'Veteran educator enriching language skills through experience and student-centered teaching.'
  },
  {
    name: 'Mrs. Sunita Patwa',
    designation: 'PGT',
    subject: 'Hindi',
    photo: 'Faculty/Sunita Patwa.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '26 Years',
    about: 'Committed Hindi educator promoting language proficiency and appreciation of literature.'
  },
  {
    name: 'Mr. Anvit Arora',
    designation: 'PGT',
    subject: 'Economics',
    photo: 'Faculty/Anvit Arora.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '3 Years',
    about: 'Economics teacher connecting classroom learning with practical financial understanding.'
  },
  {
    name: 'Mr. Keshav Kumar Singh',
    designation: 'PGT',
    subject: 'Maths',
    photo: 'Faculty/Keshav Singh.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '',
    about: 'Mathematics mentor developing analytical thinking and problem-solving abilities.'
  },
  {
    name: 'Mrs. Shweta Singh',
    designation: 'PGT',
    subject: 'Biology',
    photo: 'Faculty/Shweta Singh.jpeg',
    qualification: 'M.Sc (Microbiology), B.Ed',
    experience: '3 Years',
    about: 'Biology is the only science where even multiplication means the same thing as division. It is the study of life\'s endless wonders, from a single cell to the entire biosphere.'
  },
  {
    name: 'Mr. Ashwani Shukla',
    designation: 'PGT',
    subject: 'Computer Science',
    photo: 'Faculty/Ashwani Shukla.jpeg',
    qualification: 'MCA, B.Ed',
    experience: '4 Years',
    about: 'Computer science teacher empowering students with modern technological skills.'
  },
  {
    name: 'Mr. Yash Bhatia',
    designation: 'PGT',
    subject: 'Physics',
    photo: 'Faculty/Yash Bhatia.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '2 Year',
    about: 'Physics educator making scientific principles accessible through practical understanding.'
  },
  {
    name: 'Mr. Santosh Prajapati',
    designation: 'PGT',
    subject: 'Chemistry',
    photo: 'Faculty/Santosh Prajapati.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '3 Years',
    about: 'Chemistry teacher encouraging scientific thinking through engaging classroom experiences.'
  },
  {
    name: 'Miss Suman Sharma',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Suman Sharma.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '10 Years',
    about: 'Social science educator fostering awareness of history, society, and citizenship.'
  },
  {
    name: 'Mr. Prathivesh Singh',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/Prathivesh Singh.jpeg',
    qualification: 'B.Sc, B.Ed, D.El.Ed',
    experience: '5 Years',
    about: 'Dedicated mathematics teacher building confidence through conceptual understanding.'
  },
  {
    name: 'Mr. Himanshu Shukla',
    designation: 'TGT',
    subject: 'Chemistry',
    photo: 'Faculty/Himanshu Shukla.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '4 Years',
    about: 'Science educator inspiring curiosity, exploration, and critical thinking.'
  },
  {
    name: 'Mrs. Ankur Singh',
    designation: 'TGT',
    subject: 'Hindi',
    photo: 'Faculty/Ankur Singh.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '13 Years',
    about: 'Passionate Hindi teacher nurturing language skills and cultural appreciation.'
  },
  {
    name: 'Mr. Ramakant Tiwari',
    designation: 'TGT',
    subject: 'English',
    photo: 'Faculty/Ramakant Tiwari.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '20 Years',
    about: 'Experienced English educator strengthening communication and literary understanding.'
  },
  {
    name: 'Mrs. Meena Singh',
    designation: 'TGT',
    subject: 'Hindi',
    photo: 'Faculty/Meena Singh.jpeg',
    qualification: 'B.Ed',
    experience: '25 Years',
    about: 'Dedicated Hindi teacher guiding students toward effective language mastery.'
  },
  {
    name: 'Mr. Ankit Kumar Yadav',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Ankit Yadav.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '3 Years',
    about: 'Social science teacher making learning relevant through real-world connections.'
  },
  {
    name: 'Mr. Akash Gautam',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Akash Gautam.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '6 Years',
    about: 'Educator committed to developing socially aware and informed learners.'
  },
  {
    name: 'Mr. Anil Kumar Singh',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/Anil Singh.jpeg',
    qualification: 'B.Ed',
    experience: '10 Years',
    about: 'Mathematics teacher focused on clarity, accuracy, and student achievement.'
  },
  {
    name: 'Miss Shristi Arora',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Shristi Arora.png',
    qualification: 'M.Com, B.Ed',
    experience: '6 Years',
    about: 'Social science educator encouraging curiosity about society and culture.'
  },
  {
    name: 'Miss Jyoti Singh',
    designation: 'TGT',
    subject: 'Science',
    photo: 'Faculty/Jyoti Singh.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '2 Years',
    about: 'Science teacher promoting discovery, experimentation, and scientific understanding.'
  },
  {
    name: 'Miss Pooja',
    designation: 'TGT',
    subject: 'Hindi',
    photo: 'Faculty/Pooja.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '3 Years',
    about: 'Hindi educator inspiring confident communication and appreciation of literature.'
  },
  {
    name: 'Mr. Shubham Dubey',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/Shubham Dubey.jpeg',
    qualification: 'B.Sc, B.Ed',
    experience: '4 Years',
    about: 'Mathematics teacher helping students achieve success through consistent guidance.'
  },
  {
    name: 'Miss Kirti Yadav',
    designation: 'TGT',
    subject: 'English',
    photo: 'Faculty/Kirti Yadav.jpeg',
    qualification: 'M.A (Psychology), B.Ed',
    experience: '8 Years',
    about: 'English teacher fostering communication skills, confidence, and personal growth.'
  },
  {
    name: 'Mr. Rishi Singhal',
    designation: 'TGT',
    subject: 'Computer Science',
    photo: 'Faculty/Rishi SInghal.png',
    qualification: 'B.Tech (CSE), B.Ed',
    experience: '1 Year',
    about: 'Computer science educator introducing students to technology and digital innovation.'
  },
  {
    name: 'Miss Tanishka Gupta',
    designation: 'PRT',
    subject: 'Science & Computer',
    photo: 'Faculty/Tanishka Gupta.jpeg',
    qualification: 'B.Com, B.Ed',
    experience: '3 Years',
    about: 'Science and computer teacher making learning enjoyable through modern teaching methods.'
  },
  {
    name: 'Miss Akanksha Bhatt',
    designation: 'PRT',
    subject: 'Science and Social Studies',
    photo: 'Faculty/Akanksha Bhatt.jpeg',
    qualification: 'BTC, B.Ed',
    experience: '1 Year',
    about: 'Dedicated educator nurturing curiosity in science and social studies.'
  },
  {
    name: 'Mrs. Kawaljit Kaur',
    designation: 'PRT',
    subject: 'English',
    photo: 'Faculty/Kawaljit Kaur.jpeg',
    qualification: 'B.A, B.Ed',
    experience: '10 Years',
    about: 'English teacher committed to developing strong language and communication skills.'
  },
  {
    name: 'Miss Qudshiya Hasan',
    designation: 'PRT',
    subject: 'Maths',
    photo: 'Faculty/Qudshiya Hasan.jpeg',
    qualification: 'BBA, B.Ed',
    experience: '2 Years',
    about: 'Mathematics educator helping students learn with confidence and enthusiasm.'
  },
  {
    name: 'Mrs. Geeta Yadav',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'Faculty/Geeta Yadav.jpeg',
    qualification: 'B.A, B.Ed',
    experience: '18 Years',
    about: 'Early childhood educator creating a strong foundation for lifelong learning.'
  },
  {
    name: 'Mrs. Shweta Gautam',
    designation: 'PRT',
    subject: 'English, Hindi, Social',
    photo: 'Faculty/Shweta Gautam.jpeg',
    qualification: 'M.Sc (Biotech), M.Ed',
    experience: '3 Years',
    about: 'Dedicated teacher guiding students through language and social understanding.'
  },
  {
    name: 'Mrs. Seema Singh',
    designation: 'PRT',
    subject: 'Hindi',
    photo: 'Faculty/Seema Singh.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '5 Years',
    about: 'Hindi educator encouraging creativity, expression, and language development.'
  },
  {
    name: 'Mrs. Pratibha Rai',
    designation: 'PRT',
    subject: 'Hindi',
    photo: 'Faculty/Pratibha Rai.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '10 Years',
    about: 'Experienced teacher fostering interest and excellence in Hindi learning.'
  },
  {
    name: 'Mr. Vinay Singh',
    designation: 'PRT',
    subject: 'Computer',
    photo: 'Faculty/Vinay Singh.jpeg',
    qualification: 'M.Ed',
    experience: '2 Years',
    about: 'Computer educator introducing young learners to essential digital skills.'
  },
  {
    name: 'Mr. Shantanu Singh',
    designation: 'PET',
    subject: 'Physical Education',
    photo: 'Faculty/Shantanu Singh.jpeg',
    qualification: 'BPEd, BPEs',
    experience: '2 Years',
    about: 'Physical education teacher promoting fitness, teamwork, and discipline.'
  },
  {
    name: 'Mrs. Nirma Mahour',
    designation: 'Librarian',
    subject: 'Library',
    photo: 'Faculty/Nirma Mahour.jpeg',
    qualification: 'Master of Library, B.Ed',
    experience: '5 Years',
    about: 'Librarian dedicated to cultivating reading habits and a love for knowledge.'
  },
  {
    name: 'Miss Muzzamil Fatima',
    designation: 'PRT',
    subject: 'Science',
    photo: 'faculty/Muzzamil Fatima.jpeg',
    qualification: 'B.Sc, B.Ed',
    experience: '4 Years',
    about: 'Science teacher inspiring young minds through engaging and practical learning.'
  },
  {
    name: 'Miss Anamika Vishwakarma',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'Faculty/Anamika Vishwakarma.jpeg',
    qualification: 'PG, D.El.Ed',
    experience: '15 Years',
    about: 'Early childhood educator nurturing young learners with care and creativity.'
  },
  {
    name: 'Mr. Aman Gaur',
    designation: 'Dance Teacher',
    subject: 'Performing Arts',
    photo: 'Faculty/Aman Gaur.jpeg',
    qualification: 'ITI (Diploma), B.Ed',
    experience: '1 Year',
    about: 'Performing arts educator encouraging confidence, creativity, and self-expression through dance.'
  },
  {
    name: 'Miss Unnati Gupta',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'Faculty/Unnati Gupta.png',
    qualification: 'Bachelors of Performing Arts',
    experience: '1 Year',
    about: 'Passionate educator creating joyful and meaningful learning experiences for children.'
  },
  {
    name: 'Miss Roopansi Singh',
    designation: 'PRT',
    subject: 'Social Science',
    photo: 'Faculty/Roopanshi Singh.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '4 Years',
    about: 'Social science teacher helping students understand the world around them.'
  },
  {
    name: 'Miss Neetu Yadav',
    designation: 'PRT',
    subject: 'Maths',
    photo: 'Faculty/Neetu Yadav.jpeg',
    qualification: 'M.A, B.Ed, D.El.Ed',
    experience: '8 Years',
    about: 'Mathematics educator building confidence through supportive and engaging instruction.'
  },
  {
    name: 'Miss Radhna Kushwaha',
    designation: 'Art Teacher',
    subject: 'Art',
    photo: 'Faculty/Radhna Kushwaha.jpeg',
    qualification: 'B.A, B.Ed',
    experience: '7 Years',
    about: 'Art teacher inspiring creativity, imagination, and artistic expression.'
  },
  {
    name: 'Mrs. Poonam Khare',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/Poonam Khare.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '',
    about: 'Administrative professional supporting efficient school management and operations.'
  },
  {
    name: 'Mr. Deepak Kumar Singh',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/Deepak Singh.jpeg',
    qualification: 'MBA B.Ed',
    experience: '5 Years',
    about: 'Dedicated staff member ensuring smooth coordination of administrative activities.'
  },
  {
    name: 'Mr. Saumil Hitaishyi',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/Saumil Hitaishy.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '3 Years',
    about: 'Committed administrator contributing to the school\'s efficient functioning.'
  },
  {
    name: 'Mr. Dharmendra',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/',
    qualification: ' B.Ed',
    experience: '',
    about: 'Supportive team member assisting in daily administrative responsibilities.'
  },
];

/* ── TOPPERS DATA ─────────────────────────────────────────────── */
const TOPPERS = [
  { name: 'Joyna Singh',  percent: '97.0%', class: 'Class XII',  year: '2026', photo: 'Toppers/Joyna Singh.jpeg',   rank: 1 },
  { name: 'Amishi Mishra',    percent: '95.0%', class: 'Class XII', year: '2026', photo: 'assets/images/toppers/riya-patel.jpg',  rank: 2 },
  { name: 'Shambhavi Singh',    percent: '93.4%', class: 'Class XII',              year: '2026', photo: 'assets/images/toppers/ansh-verma.jpg',    rank: 3 },
  { name: 'Aditya Ghosh',     percent: '93.2%', class: 'Class XII ',  year: '2026', photo: 'assets/images/toppers/sana-khan.jpg',  rank: 4 },
  { name: 'Shaurya Singh',  percent: '92.2%', class: 'Class XII',              year: '2026', photo: 'assets/images/toppers/vikram-joshi.jpg',    rank: 5 },
  { name: 'Prisha Nair',   percent: '90.9%', class: 'Class XII', year: '2026', photo: 'assets/images/toppers/prisha-nair.jpg', rank: 6 },
];

/* ── NOTICES DATA ─────────────────────────────────────────────── */
const NOTICES = [
  {
    title: 'Admission Open for Session 2026–27',
    body: 'Registrations are now open for all classes from Nursery to Class XI. Visit the office or call 9307961748 for details.',
    date: '15 January 2026',
    type: 'urgent',
    tag: 'Admissions'
  },
  {
    title: 'Periodic Examination 1',
    body: 'Periodic examination 1 for classes I–IX will commence from 03 may 2026. Time-tables have been distributed. Students are advised to prepare accordingly.',
    date: '25 April 2026',
    type: 'important',
    tag: 'Exams'
  },
  {
    title: 'Mother\'s Day Celebration',
    body: 'Students from class Nur-UKG are invited for the Mother\'s Day celebration. Students must come along with their mother only.',
    date: '08 May 2026',
    type: 'normal',
    tag: 'Events'
  },
  // {
  //   title: 'National Science Olympiad 2025',
  //   body: 'ST VISHNA RRN SCHOOL is participating in NSO 2025. Interested students (Class IV–XII) may register before 30 April 2025.',
  //   date: '20 March 2025',
  //   type: 'normal',
  //   tag: 'Academic'
  // },
  {
    title: 'Parent–Teacher Meeting – 15 May 2026',
    body: 'PTM for classes I–IX & XII scheduled on 15 May (8:30 AM – 12 PM). Attendance of parents is compulsory. Answer sheets will be shown to the parents.',
    date: '11 May 2026',
    type: 'important',
    tag: 'PTM'
  },
];

/* ── EVENTS DATA ──────────────────────────────────────────────── */
const EVENTS = [
  {
    id: 1,
    title: 'Mother\'s Day Celebration',
    date: '08 May 2026',
    time: '10:00 AM – 12:00 PM',
    category: 'events',
    image: 'Events/Mothers Day/poster.jpeg',
    shortDesc: 'A joyful Mother’s Day celebration with fun activities, snacks, and awards for mothers.',
    fullDesc: 'The Mother’s Day celebration was organized by the PRT teachers to make mothers feel happy and special. The event included different fun activities, games, snacks, and award distribution. Mothers enjoyed participating in the activities with great excitement. The program created a cheerful and memorable atmosphere for everyone present.',
    organizer: 'PRT Teachers',
    venue: 'Assembly Hall'
  },
  {
    id: 2,
    title: 'Jal Pakhwada',
    date: '18 April 2026',
    time: '7:30 AM - 12:00 PM',
    category: 'Academic',
    image: 'Events/Jal Pakhwada/1A1.jpeg',
    shortDesc: 'Jal Pakhwada was celebrated to spread awareness about saving water and protecting nature.',
    fullDesc: 'The Jal Pakhwada event was organized to teach students about the importance of water and natural resources on Earth. Students participated by making posters and giving presentations on water conservation and environmental protection. The event helped students understand the value of saving water and keeping the Earth safe for the future.',
    organizer: 'Social Studies Teachers',
    venue: 'School Campus'
  },
  {
    id: 3,
    title: 'Annual Function',
    date: '24 & 25 February 2026',
    time: '5:00 PM – 8:00 PM',
    category: 'Cultural',
    image: 'Events/AnnualFunction/Padmavat2.jpeg',
    shortDesc: 'The Annual Function celebrated culture, talent, social awareness, and student achievements through performances and awards.',
    fullDesc: 'The Annual Function was celebrated with great excitement and joy. Students from different classes performed dances, acts, and cultural programs based on Lavani, puppet dance, Rajasthani folk, classical music, pop, disco, and many more themes. Some performances also highlighted social issues like dowry, the Aravali Hills case, and phone addiction. The event also included award distribution for winning houses, outstanding students, and sports achievements.',
    organizer: 'School Faculty',
    venue: 'Assembly Hall'
  },
  // {
  //   id: 4,
  //   title: 'Parent–Teacher Meeting',
  //   date: '25 September 2025',
  //   time: '9:00 AM – 1:00 PM',
  //   category: 'Academic',
  //   image: 'assets/images/gallery/classroom.jpg',
  //   shortDesc: 'Half-yearly report cards distributed. Parents meet teachers for academic progress discussion.',
  //   fullDesc: 'The half-yearly PTM is a crucial event where parents meet class teachers and subject teachers to discuss academic progress, behaviour, and areas of improvement. Report cards for the first half of the academic year are distributed. The Principal also addresses parents regarding upcoming academic goals.',
  //   organizer: 'School Administration',
  //   venue: 'Respective Classrooms'
  // },
  // {
  //   id: 5,
  //   title: 'National Science Olympiad',
  //   date: '10 November 2025',
  //   time: '9:00 AM – 12:00 PM',
  //   category: 'Academic',
  //   image: 'assets/images/gallery/science-fair.jpg',
  //   shortDesc: 'School-level NSO test for students of Classes IV–XII. Top scorers represent school at district level.',
  //   fullDesc: 'The National Science Olympiad is a prestigious national-level exam that tests students on concepts beyond the regular syllabus. Our school consistently produces district and state level toppers. Participation is open to students of Classes IV–XII. Preparatory classes are conducted by the Science Department every Saturday.',
  //   organizer: 'Science Foundation of India',
  //   venue: 'School Classrooms'
  // },
  // {
  //   id: 6,
  //   title: 'Yoga & Wellness Day',
  //   date: '21 June 2025',
  //   time: '7:00 AM – 9:00 AM',
  //   category: 'Health',
  //   image: 'assets/images/gallery/yoga-day.jpg',
  //   shortDesc: 'Celebrating International Yoga Day with guided yoga sessions for students, teachers, and parents.',
  //   fullDesc: 'On the occasion of International Yoga Day, the school organises a special morning session of guided yoga and meditation for the entire school community — students, teachers, and parents are all invited. A certified yoga instructor leads the session. The event emphasises the importance of physical and mental well-being.',
  //   organizer: 'Wellness Committee',
  //   venue: 'School Ground'
  // },
];

/* ── GALLERY DATA ─────────────────────────────────────────────── */
const GALLERY_ITEMS = [
  { src: 'Assets/campus.jpeg', label: 'Campus', category: 'campus', caption: 'Our beautiful main campus building' },
  { src: 'Events/Special Workshops/img2.jpeg', label: 'workshop', category: 'activities', caption: '' },
  { src: 'Events/Special Workshops/img4.jpeg', label: 'workshop', category: 'activities', caption: '' },
  { src: 'Events/Jal Pakhwada/1A1.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Diwali/img4.jpeg', label: 'Diwali', category: 'activities', caption: '' },
  { src: 'Events/Articles/Article1.jpeg', label: 'Article', category: 'activities', caption: '' },
  { src: 'Events/Special Workshops/img1.jpeg', label: 'workshop', category: 'activities', caption: '' },
  { src: 'Events/Lab/img10.jpeg', label: 'Science Lab', category: 'academics', caption: '' },
  { src: 'Events/Lab/img18.jpeg', label: 'Science Lab', category: 'academics', caption: '' },
  { src: 'Events/Lab/img3.jpeg', label: 'Science Lab', category: 'academics', caption: '' },
  { src: 'Events/Lab/img6.jpeg', label: 'Computer Lab', category: 'campus', caption: '' },
  { src: 'Events/Lab/img5.jpeg', label: 'Science Lab', category: 'campus', caption: '' },
  { src: 'Events/Enviornment/img2.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Enviornment/img11.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Prerna Diwas/img2.jpeg', label: 'Prerna Diwas', category: 'events', caption: '' },
  { src: 'Events/Enviornment/img23.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Sports/img2.jpeg', label: 'Sports', category: 'sports', caption: 'Taekwondo Team' },
  { src: 'Events/Enviornment/img26.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Sports/img7.jpeg', label: 'Sports', category: 'sports', caption: 'Taekwondo Match' },
  { src: 'Events/Enviornment/img7.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Enviornment/img22.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Sports/Trophy.jpeg', label: 'Sports', category: 'sports', caption: 'St Vishna Team with Trophy' },
  { src: 'Events/Enviornment/img13.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Enviornment/IMG-20260501-WA0024.jpg.jpeg', label: 'enviornment', category: 'activities', caption: '' },
  { src: 'Events/Diwali/img2.jpeg', label: 'Diwali', category: 'activities', caption: '' },
  { src: 'Events/Sports/Tagore Badminton.jpeg', label: 'Sports', category: 'sports', caption: 'Tagore House' },
  { src: 'Events/Farewell/img2.jpeg', label: 'Farewell', category: 'events', caption: 'Farewell 2025' },
  { src: 'Events/Sports/img6.jpeg', label: 'Sports', category: 'sports', caption: '' },
  { src: 'Events/Sports/Ashoka.jpeg', label: 'Sports', category: 'sports', caption: 'Ashoka House' },
  { src: 'Events/Sports/raman.jpeg', label: 'Sports', category: 'sports', caption: 'Raman House' },
  { src: 'Events/Farewell/img4.jpeg', label: 'Farewell', category: 'events', caption: 'Farewell 2025' },
  { src: 'Events/Jal Pakhwada/19.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Sports/img1.jpeg', label: 'Sports', category: 'sports', caption: '' },
  { src: 'Events/Sports/Annual Sports Meet.jpeg', label: 'Sports', category: 'sports', caption: 'Annual Sports Meet' },
  { src: 'Events/Sports/Shivaji.jpeg', label: 'Sports', category: 'sports', caption: 'Shivaji House' },
  { src: 'Events/Farewell/img1.jpeg', label: 'Farewell', category: 'events', caption: 'Farewell 2025' },
  { src: 'Events/Trips/img4.jpeg', label: 'Trips', category: 'activities', caption: 'Lucknow Trip' },
  { src: 'Events/Trips/img5.jpeg', label: 'Trips', category: 'activities', caption: 'Lucknow Trip' },
  { src: 'Events/Trips/img3.jpeg', label: 'Trips', category: 'activities', caption: 'Mangarh Trip' },
  { src: 'Events/Republic and Independence Day/img7.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Mothers Day/img3.jpeg', label: 'Mothers Day', category: 'events', caption: 'Mother\'s Day Celebration 2026' },
  { src: 'Events/AnnualFunction/5A2.jpeg', label: 'Annual Function', category: 'events', caption: 'Annual Function Dance Performance of class 5A2 2025' },
  { src: 'Events/Jal Pakhwada/11.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/AnnualFunction/butterfly.jpeg', label: 'Annual function', category: 'events', caption: 'Padmavat Dance & Act' },
  { src: 'Events/AnnualFunction/Lawani.jpeg', label: 'Annual function', category: 'events', caption: 'Annual Function Dance Performance of class 6A3 2025' },
  { src: 'Events/Jal Pakhwada/20.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Republic and Independence Day/img11.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Mothers Day/img2.jpeg', label: 'Mothers Day', category: 'events', caption: 'Mother\'s Day Celebration 2026' },
  { src: 'Events/Jal Pakhwada/21.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/AnnualFunction/Puppet.jpeg', label: 'Annual function', category: 'events', caption: 'Puppet Dance' },
  { src: 'Events/Republic and Independence Day/img10.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Teachers day/img2.jpeg', label: 'Teachers day', category: 'events', caption: 'Teacher\'s Day' },
  { src: 'Events/Jal Pakhwada/18.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Republic and Independence Day/img3.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Prerna Diwas/img4.jpeg', label: 'Prerna Diwas', category: 'events', caption: '' },
  { src: 'Events/Republic and Independence Day/img14.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Jal Pakhwada/4.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/AnnualFunction/Padmavat1.jpeg', label: 'Annual function', category: 'events', caption: 'Padmavat Dance & Act' },
  { src: 'Events/Republic and Independence Day/img1.jpeg', label: 'Republic Day 2025', category: 'events', caption: '' },
  { src: 'Events/AnnualFunction/Padmavat3.jpeg', label: 'Annual function', category: 'events', caption: 'Padmavat Dance & Act Characters' },
  { src: 'Events/Prerna Diwas/img1.jpeg', label: 'Prerna Diwas', category: 'events', caption: '' },
  { src: 'Events/Jal Pakhwada/13.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Republic and Independence Day/img2.jpeg', label: 'Republic Day 2025', category: 'events', caption: '' },
  { src: 'Events/Jal Pakhwada/6.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Republic and Independence Day/img8.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Republic and Independence Day/img4.jpeg', label: 'Independence Day 2025', category: 'events', caption: '' },
  { src: 'Events/Jal Pakhwada/1.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Jal Pakhwada/2.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Jal Pakhwada/5.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
  { src: 'Events/Jal Pakhwada/9.jpeg', label: 'Jal Pakhwada', category: 'academics', caption: '' },
];

/* ── TESTIMONIALS DATA ────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    text: 'ST VISHNA RRN SCHOOL has been a life-changing experience for my son. The teachers are incredibly dedicated and the environment fosters both academic excellence and personal growth.',
    name: 'Mrs. Sunita Agarwal',
    role: 'Parent, Class X',
    photo: 'assets/images/faculty/anita-sharma.jpg'
  },
  {
    text: 'I scored 98% in my boards and I owe it entirely to the faculty here. The personal attention and motivation I received made all the difference in my preparation.',
    name: 'Aarav Sharma',
    role: 'Class XII Topper 2024',
    photo: 'assets/images/toppers/aarav-sharma.jpg'
  },
  {
    text: 'The holistic approach to education here is remarkable. My daughter has grown not just academically but as a confident, compassionate individual. Truly a premier institution.',
    name: 'Mr. Vikash Pandey',
    role: 'Parent, Class VII',
    photo: 'assets/images/faculty/arun-kumar.jpg'
  },
];

/* ── FAQ DATA ─────────────────────────────────────────────────── */
const FAQS = [
  {
    question: 'What is the admission process for new students?',
    answer: 'The admission process involves collecting the application form, submitting the application form with required documents, appearing for an entrance assessment, and completing fee payment upon selection. Admissions are open from January each year.'
  },
  {
    question: 'Is the school affiliated to CBSE?',
    answer: 'Yes, ST VISHNA RRN SCHOOL is fully affiliated to the Central Board of Secondary Education (CBSE), New Delhi. We follow the CBSE curriculum and NEP 2020 guidelines from Nursery to Class XII.'
  },
  {
    question: 'What streams are available in Senior Secondary (Class XI–XII)?',
    answer: 'We offer Science (PCM & PCB), Commerce, and Arts streams in Class XI–XII. Science students receive specialised coaching for JEE and NEET competitive examinations alongside the regular CBSE curriculum.'
  },
  {
    question: 'Are there scholarships available for students?',
    answer: 'No, currently we not providing any scholarships.'
  },
  {
    question: 'What extracurricular activities does the school offer?',
    answer: 'We offer a wide range of activities including dance, fine arts, robotics, debate, yoga, various sports, and participation in national olympiads. Co-curricular development is a core part of our educational philosophy.'
  },
  {
    question: 'What are the school timings?',
    answer: 'School timings are Monday to Saturday, 7:30 AM to 12:30 PM for students. The administrative office is open from 8:00 AM to 2:00 PM.'
  },
];

/* ── QUOTES DATA ──────────────────────────────────────────────── */
const QUOTES = [
  { text: 'Education is the most powerful weapon which you can use to change the world.', author: '— Nelson Mandela' },
  { text: 'The beautiful thing about learning is that no one can take it away from you.', author: '— B.B. King' },
  { text: 'In learning you will teach, and in teaching you will learn.', author: '— Phil Collins' },
  { text: 'The roots of education are bitter, but the fruit is sweet.', author: '— Aristotle' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: '— Confucius' },
  { text: 'Success is no accident. It is hard work, perseverance, learning, and sacrifice.', author: '— Pelé' },
  { text: 'The expert in anything was once a beginner.', author: '— Helen Hayes' },
  { text: 'Strive for progress, not perfection.', author: '— Unknown' },
  { text: 'Dream big, work hard, stay focused, and surround yourself with good people.', author: '— Unknown' },
  { text: 'Your only limit is your mind.', author: '— Unknown' },
];
