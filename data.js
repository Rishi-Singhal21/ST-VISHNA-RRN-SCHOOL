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
    about: ''
  },
  {
    name: 'Mr. Shashank Srivastava',
    designation: 'Co-ordinator (TGT)',
    subject: 'IT',
    photo: 'Faculty/Shashank Srivastava.jpeg',
    qualification: 'PGDCA, M.Sc (IT), B.Ed',
    experience: '1 Year',
    about: ''
  },
  {
    name: 'Mrs. Shazia Khanam',
    designation: 'Co-ordinator (PRT)',
    subject: 'English',
    photo: 'Faculty/Shazia Khanam.jpeg',
    qualification: 'BBA, B.Ed',
    experience: '1 Year',
    about: ''
  },
  {
    name: 'Mr. Anmol Shukla',
    designation: 'PGT',
    subject: 'Political Science',
    photo: '',
    qualification: 'M.Sc (Maths), B.Ed',
    experience: '7 Year',
    about: ''
  },
  {
    name: 'Mr. Mishul Verma',
    designation: 'PGT',
    subject: 'English',
    photo: 'Faculty/Mishul Verma.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '11 Years',
    about: ''
  },
  {
    name: 'Mr. Rajeev Kumar Mishra',
    designation: 'PGT',
    subject: 'English',
    photo: 'Faculty/',
    qualification: 'M.A, LT(B.Ed)',
    experience: '',
    about: ''
  },
  {
    name: 'Mrs. Sunita Patwa',
    designation: 'PGT',
    subject: 'Hindi',
    photo: 'Faculty/Sunita Patwa.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '18 Years',
    about: ''
  },
  {
    name: 'Mr. Anvit Arora',
    designation: 'PGT',
    subject: 'Economics',
    photo: 'Faculty/Anvit Arora.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '3 Years',
    about: ''
  },
  {
    name: 'Mr. Keshav Kumar Singh',
    designation: 'PGT',
    subject: 'Maths',
    photo: 'Faculty/Keshav Singh.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '',
    about: ''
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
    about: ''
  },
  {
    name: 'Mr. Yash Bhatia',
    designation: 'PGT',
    subject: 'Physics',
    photo: 'Faculty/Yash Bhatia.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '1 Month',
    about: ''
  },
  {
    name: 'Mr. Santosh Prajapati',
    designation: 'PGT',
    subject: 'Chemistry',
    photo: '',
    qualification: ' B.Ed',
    experience: '',
    about: ''
  },
  {
    name: 'Miss Suman Sharma',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Suman Sharma.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '10 Years',
    about: ''
  },
  {
    name: 'Mr. Prathivesh Singh',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/Prathivesh Singh.jpeg',
    qualification: 'B.Sc, B.Ed, D.El.Ed',
    experience: '4 Years',
    about: ''
  },
  {
    name: 'Mr. Himanshu Shukla',
    designation: 'TGT',
    subject: 'Science',
    photo: 'Faculty/Himanshu Shukla.jpeg',
    qualification: ' B.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Mrs. Ankur Singh',
    designation: 'TGT',
    subject: 'Hindi',
    photo: '',
    qualification: 'M.A, B.Ed',
    experience: '',
    about: ''
  },
  {
    name: 'Mr. Ramakant Tiwawi',
    designation: 'TGT',
    subject: 'English',
    photo: 'Faculty/Ramakant Tiwari.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '8 Years',
    about: ''
  },
  {
    name: 'Mrs. Meena Singh',
    designation: 'TGT',
    subject: 'Hindi',
    photo: 'Faculty/Meena Singh.jpeg',
    qualification: 'B.Ed',
    experience: '25 Years',
    about: ''
  },
  {
    name: 'Mr. Ankit Kumar Yadav',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Ankit Yadav.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '3 Years',
    about: ''
  },
  {
    name: 'Mr. Akash Gautam',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Akash Gautam.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '8 Month',
    about: ''
  },
  {
    name: 'Mr. Anil Kumar Singh',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/',
    qualification: 'B.Ed',
    experience: '10 Years',
    about: ''
  },
  {
    name: 'Miss Shristi Arora',
    designation: 'TGT',
    subject: 'Social Science',
    photo: 'Faculty/Shristi Arora.png',
    qualification: 'M.Com, B.Ed',
    experience: '4 Years',
    about: ''
  },
  {
    name: 'Miss Jyoti Singh',
    designation: 'TGT',
    subject: 'Science',
    photo: 'Faculty/Jyoti Singh.jpeg',
    qualification: 'M.Sc, B.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Miss Pooja',
    designation: 'TGT',
    subject: 'Hindi',
    photo: 'Faculty/',
    qualification: 'M.A, B.Ed',
    experience: '3 Years',
    about: ''
  },
  {
    name: 'Mr. Shubham Dubey',
    designation: 'TGT',
    subject: 'Maths',
    photo: 'Faculty/Shubham Dubey.jpeg',
    qualification: 'B.Sc, B.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Miss Kirti Yadav',
    designation: 'TGT',
    subject: 'English',
    photo: 'Faculty/Kirti Yadav.jpeg',
    qualification: 'M.A (Psychology), B.Ed',
    experience: '4 Years',
    about: ''
  },
  {
    name: 'Mr. Rishi Singhal',
    designation: 'TGT',
    subject: 'Computer Science',
    photo: 'Faculty/Rishi Singhal.png',
    qualification: 'B.Tech (CSE), B.Ed',
    experience: '11 Month',
    about: ''
  },
  {
    name: 'Miss Tanishka Gupta',
    designation: 'PRT',
    subject: 'Science & Computer',
    photo: 'Faculty/Tanishka Gupta.jpeg',
    qualification: 'B.Com, B.Ed',
    experience: '10 Months',
    about: 'Meet Tanishka Gupta — making science fun and computers easy for curious little minds. Brings fresh energy and modern teaching methods.'
  },
  {
    name: 'Miss Akanksha Bhatt',
    designation: 'PRT',
    subject: 'Science and Social Studies',
    photo: 'Faculty/Akanksha Bhatt.jpeg',
    qualification: 'BTC, B.Ed',
    experience: '1 Year',
    about: ''
  },
  {
    name: 'Mrs. Kawaljit Kaur',
    designation: 'PRT',
    subject: 'English',
    photo: '',
    qualification: 'B.A, B.Ed',
    experience: '8 Years',
    about: ''
  },
  {
    name: 'Miss Qudshiya Hasan',
    designation: 'PRT',
    subject: 'Maths',
    photo: '',
    qualification: 'BBA, B.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Mrs. Geeta Yadav',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: '',
    qualification: 'B.A, B.Ed',
    experience: '',
    about: ''
  },
  {
    name: 'Mrs. Shweta Gautam',
    designation: 'PRT',
    subject: 'English, Hindi, Social',
    photo: 'Faculty/Shweta Gautam.jpeg',
    qualification: 'M.Sc (Biotech), M.Ed',
    experience: '1 Month',
    about: ''
  },
  {
    name: 'Mrs. Seema Singh',
    designation: 'PRT',
    subject: 'Hindi',
    photo: 'Faculty/Seema Singh.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '4 Years',
    about: ''
  },
  {
    name: 'Mrs. Pratibha Rai',
    designation: 'PRT',
    subject: 'Hindi',
    photo: 'Faculty/Pratibha Rai.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '10 Years',
    about: ''
  },
  {
    name: 'Mr. Vinay Singh',
    designation: 'PRT',
    subject: 'Computer',
    photo: 'Faculty/Vinay Singh.jpeg',
    qualification: 'M.Ed',
    experience: '1 Month',
    about: ''
  },
  {
    name: 'Mr. Shantanu Singh',
    designation: 'PET',
    subject: 'Physical Education',
    photo: 'Faculty/Shantanu Singh.jpeg',
    qualification: 'BPEd, BPEs',
    experience: '1 Month',
    about: ''
  },
  {
    name: 'Mrs. Nirma Mahour',
    designation: 'Librarian',
    subject: 'Library',
    photo: 'faculty/Nirma Mahour.jpeg',
    qualification: 'Master of Library, B.Ed',
    experience: '3 Years',
    about: ''
  },
  {
    name: 'Miss Muzzamil Fatima',
    designation: 'PRT',
    subject: 'Science',
    photo: 'faculty/Muzzamil Fatima.jpeg',
    qualification: 'B.Sc, B.Ed',
    experience: '4 Years',
    about: ''
  },
  {
    name: 'Miss Anamika Vishwakarma',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'Faculty/Anamika Vishwakarma.jpeg',
    qualification: 'PG, D.El.Ed',
    experience: '15 Years',
    about: '.'
  },
  {
    name: 'Mr. Aman Gaur',
    designation: 'Dance Teacher',
    subject: 'Performing Arts',
    photo: 'Faculty/Aman Gaur.jpeg',
    qualification: 'ITI (Diploma), B.Ed',
    experience: '11 Months',
    about: 'Meet Aman Gaur — teaching little feet to dance, one happy step at a time. Choreographed the school\'s award-winning Annual Day performance.'
  },
  {
    name: 'Miss Unnati Gupta',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'Faculty/Unnati Gupta.png',
    qualification: 'Bachelors of Performing Arts',
    experience: '6 Months',
    about: 'Meet Unnati Gupta — turning tiny tears into giggles and ABCs into daily adventures. Specialises in early childhood development and play-based learning.'
  },
  {
    name: 'Miss Roopansi Singh',
    designation: 'PRT',
    subject: 'Social Science',
    photo: 'Faculty/Roopanshi Singh.jpeg',
    qualification: 'M.Com, B.Ed',
    experience: '3 Years',
    about: ''
  },
  {
    name: 'Miss Neetu Yadav',
    designation: 'PRT',
    subject: 'Maths',
    photo: 'Faculty/Neetu Yadav.jpeg',
    qualification: 'M.A, B.Ed, D.El.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Miss Radhna Kushwaha',
    designation: 'Art Teacher',
    subject: 'Art',
    photo: '',
    qualification: 'B.A, B.Ed',
    experience: '1 Month',
    about: ''
  },
  {
    name: 'Mrs. Poonam Khare',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/Poonam Khare.jpeg',
    qualification: 'M.A, B.Ed',
    experience: '',
    about: ''
  },
  {
    name: 'Mr. Deepak Kumar Singh',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/Deepak Singh.jpeg',
    qualification: 'MBA B.Ed',
    experience: '2 Years',
    about: ''
  },
  {
    name: 'Mr. Saumil Hitaishyi',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/',
    qualification: 'M.A, B.Ed',
    experience: '',
    about: ''
  },
  {
    name: 'Mr. Dharmendra',
    designation: 'Office Staff',
    subject: 'Administration',
    photo: 'Faculty/',
    qualification: ' B.Ed',
    experience: '',
    about: ''
  },
];

/* ── TOPPERS DATA ─────────────────────────────────────────────── */
const TOPPERS = [
  { name: 'Aarav Sharma',  percent: '98.6%', class: 'Class XII (Science)',  year: '2024', photo: 'assets/images/toppers/aarav-sharma.jpg',   rank: 1 },
  { name: 'Riya Patel',    percent: '97.8%', class: 'Class XII (Commerce)', year: '2024', photo: 'assets/images/toppers/riya-patel.jpg',  rank: 2 },
  { name: 'Ansh Verma',    percent: '97.2%', class: 'Class X',              year: '2024', photo: 'assets/images/toppers/ansh-verma.jpg',    rank: 3 },
  { name: 'Sana Khan',     percent: '96.8%', class: 'Class XII (Science)',  year: '2023', photo: 'assets/images/toppers/sana-khan.jpg',  rank: 4 },
  { name: 'Vikram Joshi',  percent: '96.4%', class: 'Class X',              year: '2023', photo: 'assets/images/toppers/vikram-joshi.jpg',    rank: 5 },
  { name: 'Prisha Nair',   percent: '95.9%', class: 'Class XII (Commerce)', year: '2023', photo: 'assets/images/toppers/prisha-nair.jpg', rank: 6 },
];

/* ── NOTICES DATA ─────────────────────────────────────────────── */
const NOTICES = [
  {
    title: 'Admission Open for Session 2025–26',
    body: 'Registrations are now open for all classes from Nursery to Class XI. Visit the office or call 9876543210 for details.',
    date: '15 April 2025',
    type: 'urgent',
    tag: 'Admissions'
  },
  {
    title: 'Half-Yearly Examination Schedule',
    body: 'Half-yearly exams for classes VI–XII will commence from 10 October 2025. Time-tables have been distributed. Students are advised to prepare accordingly.',
    date: '02 April 2025',
    type: 'important',
    tag: 'Exams'
  },
  {
    title: 'Annual Sports Day – 25 November 2025',
    body: 'All students are invited to participate in the Annual Sports Day. Registration forms available with respective class teachers.',
    date: '28 March 2025',
    type: 'normal',
    tag: 'Events'
  },
  {
    title: 'National Science Olympiad 2025',
    body: 'ST VISHNA RRN SCHOOL is participating in NSO 2025. Interested students (Class IV–XII) may register before 30 April 2025.',
    date: '20 March 2025',
    type: 'normal',
    tag: 'Academic'
  },
  {
    title: 'Parent–Teacher Meeting – 25 September 2025',
    body: 'PTM for classes I–X scheduled on 25 Sept (9 AM – 1 PM). Attendance of parents is compulsory. Report cards will be distributed.',
    date: '15 March 2025',
    type: 'important',
    tag: 'PTM'
  },
];

/* ── EVENTS DATA ──────────────────────────────────────────────── */
const EVENTS = [
  {
    id: 1,
    title: 'Annual Sports Day 2025',
    date: '25 November 2025',
    time: '8:00 AM – 4:00 PM',
    category: 'Sports',
    image: 'Faculty/Indar Mandhyan.jpeg',
    shortDesc: 'A grand celebration of athletic talent with track events, team games, and prize distribution.',
    fullDesc: 'The Annual Sports Day is one of the most anticipated events of the school calendar. Students from all classes participate in a variety of athletic events including 100m sprint, relay races, long jump, shot put, and team sports. The event concludes with a prize distribution ceremony attended by distinguished guests.',
    organizer: 'Physical Education Department',
    venue: 'School Sports Ground'
  },
  {
    id: 2,
    title: 'Science Exhibition 2025',
    date: '18 October 2025',
    time: '10:00 AM – 3:00 PM',
    category: 'Academic',
    image: 'assets/images/gallery/science-lab.jpg',
    shortDesc: 'Students showcase innovative science projects and working models to judges and parents.',
    fullDesc: 'The annual Science Exhibition invites students from Class VI to XII to design and present innovative science projects. Topics range from renewable energy models to environmental science experiments. Expert judges evaluate projects on creativity, scientific accuracy, and presentation skills. Top projects are sent to district-level competitions.',
    organizer: 'Science Department',
    venue: 'School Hall & Science Labs'
  },
  {
    id: 3,
    title: 'Annual Day & Cultural Festival',
    date: '15 November 2025',
    time: '5:00 PM – 9:00 PM',
    category: 'Cultural',
    image: 'assets/images/gallery/annual-day.jpg',
    shortDesc: 'An evening of music, dance, drama, and award presentations celebrating student talent.',
    fullDesc: 'Annual Day is the flagship cultural event of ST VISHNA RRN SCHOOL. The evening features spectacular dance performances, nukkad nataks, musical recitals, and a grand drama production directed by students. Awards are presented to toppers, best athletes, and outstanding contributors to school activities.',
    organizer: 'Cultural Committee',
    venue: 'School Auditorium'
  },
  {
    id: 4,
    title: 'Parent–Teacher Meeting',
    date: '25 September 2025',
    time: '9:00 AM – 1:00 PM',
    category: 'Academic',
    image: 'assets/images/gallery/classroom.jpg',
    shortDesc: 'Half-yearly report cards distributed. Parents meet teachers for academic progress discussion.',
    fullDesc: 'The half-yearly PTM is a crucial event where parents meet class teachers and subject teachers to discuss academic progress, behaviour, and areas of improvement. Report cards for the first half of the academic year are distributed. The Principal also addresses parents regarding upcoming academic goals.',
    organizer: 'School Administration',
    venue: 'Respective Classrooms'
  },
  {
    id: 5,
    title: 'National Science Olympiad',
    date: '10 November 2025',
    time: '9:00 AM – 12:00 PM',
    category: 'Academic',
    image: 'assets/images/gallery/science-fair.jpg',
    shortDesc: 'School-level NSO test for students of Classes IV–XII. Top scorers represent school at district level.',
    fullDesc: 'The National Science Olympiad is a prestigious national-level exam that tests students on concepts beyond the regular syllabus. Our school consistently produces district and state level toppers. Participation is open to students of Classes IV–XII. Preparatory classes are conducted by the Science Department every Saturday.',
    organizer: 'Science Foundation of India',
    venue: 'School Classrooms'
  },
  {
    id: 6,
    title: 'Yoga & Wellness Day',
    date: '21 June 2025',
    time: '7:00 AM – 9:00 AM',
    category: 'Health',
    image: 'assets/images/gallery/yoga-day.jpg',
    shortDesc: 'Celebrating International Yoga Day with guided yoga sessions for students, teachers, and parents.',
    fullDesc: 'On the occasion of International Yoga Day, the school organises a special morning session of guided yoga and meditation for the entire school community — students, teachers, and parents are all invited. A certified yoga instructor leads the session. The event emphasises the importance of physical and mental well-being.',
    organizer: 'Wellness Committee',
    venue: 'School Ground'
  },
];

/* ── GALLERY DATA ─────────────────────────────────────────────── */
const GALLERY_ITEMS = [
  { src: 'Faculty/Indar Mandhyan.jpeg', label: 'Campus', category: 'campus', caption: 'Our beautiful main campus building' },
  { src: 'assets/images/gallery/library.jpg', label: 'Library', category: 'campus', caption: 'Modern library with 10,000+ books' },
  { src: 'assets/images/gallery/science-lab.jpg', label: 'Science Lab', category: 'academics', caption: 'State-of-the-art science laboratories' },
  { src: 'assets/images/gallery/sports-day.jpg', label: 'Sports', category: 'sports', caption: 'Annual Sports Day celebrations' },
  { src: 'assets/images/gallery/art-room.jpg', label: 'Art Room', category: 'activities', caption: 'Creative arts and craft sessions' },
  { src: 'assets/images/gallery/annual-day.jpg', label: 'Annual Day', category: 'events', caption: 'Annual Day cultural performance' },
  { src: 'assets/images/gallery/computer-lab.jpg', label: 'Computer Lab', category: 'academics', caption: 'Modern computer laboratory' },
  { src: 'assets/images/gallery/yoga-day.jpg', label: 'Yoga Day', category: 'events', caption: 'International Yoga Day celebration' },
  { src: 'assets/images/gallery/classroom.jpg', label: 'Academics', category: 'academics', caption: 'Engaging classroom sessions' },
  { src: 'assets/images/gallery/science-fair.jpg', label: 'Science Fair', category: 'events', caption: 'Science exhibition 2024' },
  { src: 'assets/images/gallery/smart-class.jpg', label: 'Classroom', category: 'academics', caption: 'Smart classroom technology' },
  { src: 'assets/images/gallery/playground.jpg', label: 'Playground', category: 'sports', caption: 'Spacious playground and sports facilities' },
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
    answer: 'The admission process involves collecting the prospectus, submitting the application form with required documents, appearing for an entrance assessment (Class III onwards), and completing fee payment upon selection. Admissions are open from January to March each year.'
  },
  {
    question: 'Is the school affiliated to CBSE?',
    answer: 'Yes, ST VISHNA RRN SCHOOL is fully affiliated to the Central Board of Secondary Education (CBSE), New Delhi. We follow the CBSE curriculum and NEP 2020 guidelines from Nursery to Class XII.'
  },
  {
    question: 'What streams are available in Senior Secondary (Class XI–XII)?',
    answer: 'We offer Science (PCM & PCB), Commerce, and Humanities streams in Class XI–XII. Science students receive specialised coaching for JEE and NEET competitive examinations alongside the regular CBSE curriculum.'
  },
  {
    question: 'Are there scholarships available for students?',
    answer: 'Yes, we offer merit-based scholarships for students who secure 90%+ in board examinations. Need-based fee concessions are also available for economically weaker students. Contact the admissions office for details.'
  },
  {
    question: 'What extracurricular activities does the school offer?',
    answer: 'We offer a wide range of activities including dance, music, drama, fine arts, robotics, debate, yoga, various sports, and participation in national olympiads. Co-curricular development is a core part of our educational philosophy.'
  },
  {
    question: 'What are the school timings?',
    answer: 'School timings are Monday to Saturday, 7:30 AM to 2:00 PM for students. The administrative office is open from 9:00 AM to 4:30 PM. The library remains open till 5:00 PM.'
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
