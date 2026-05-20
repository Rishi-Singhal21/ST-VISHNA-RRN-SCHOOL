/* ================================================================
   ST VISHNA RRN SCHOOL — Data File
   All school data stored here for easy editing
   ================================================================ */

'use strict';

/* ── FACULTY DATA ─────────────────────────────────────────────── */
const FACULTY = [
  {
    name: 'Dr. Anita Sharma',
    designation: 'Principal',
    subject: 'Administration',
    photo: 'assets/images/faculty/anita-sharma.jpg',
    qualification: 'M.Ed, Ph.D (Education)',
    experience: '25+ Years',
    about: 'Visionary leader dedicated to educational innovation and student success. Dr. Sharma has transformed the school into a center of excellence since joining in 2012.'
  },
  {
    name: 'Mr. Rajesh Verma',
    designation: 'Senior Teacher',
    subject: 'Mathematics',
    photo: 'assets/images/faculty/rajesh-verma.jpg',
    qualification: 'M.Sc (Maths), B.Ed',
    experience: '18 Years',
    about: 'Makes complex maths simple and enjoyable for every student. Known for his unique problem-solving techniques and patient teaching style.'
  },
  {
    name: 'Ms. Priya Mehta',
    designation: 'Head of Department',
    subject: 'Science',
    photo: 'assets/images/faculty/priya-mehta.jpg',
    qualification: 'M.Sc (Physics), B.Ed',
    experience: '15 Years',
    about: 'Passionate about lab-based, hands-on science education. Has guided numerous students to national science olympiad victories.'
  },
  {
    name: 'Miss Tanishka Gupta',
    designation: 'PRT',
    subject: 'Science & Computer',
    photo: 'assets/images/faculty/tanishka-gupta.jpg',
    qualification: 'M.Comm',
    experience: '8 Months',
    about: 'Meet Tanishka Gupta — making science fun and computers easy for curious little minds. Brings fresh energy and modern teaching methods.'
  },
  {
    name: 'Ms. Kavitha Rao',
    designation: 'Teacher',
    subject: 'Hindi',
    photo: 'assets/images/faculty/kavitha-rao.jpg',
    qualification: 'M.A (Hindi), B.Ed',
    experience: '12 Years',
    about: 'Fosters love for Indian literature and language heritage. Her storytelling sessions are a student favourite.'
  },
  {
    name: 'Mr. Arun Kumar',
    designation: 'Teacher',
    subject: 'Social Science',
    photo: 'assets/images/faculty/arun-kumar.jpg',
    qualification: 'M.A (History), B.Ed',
    experience: '14 Years',
    about: 'Brings history and geography alive through storytelling and maps. Organises annual educational tours for students.'
  },
  {
    name: 'Mr. Aman Gaur',
    designation: 'Dance Teacher',
    subject: 'Performing Arts',
    photo: 'assets/images/faculty/aman-gaur.jpg',
    qualification: 'ITI (Diploma)',
    experience: '1 Year',
    about: 'Meet Aman Gaur — teaching little feet to dance, one happy step at a time. Choreographed the school\'s award-winning Annual Day performance.'
  },
  {
    name: 'Miss Unnati Gupta',
    designation: 'PRT',
    subject: 'Early Childhood',
    photo: 'assets/images/faculty/unnati-gupta.jpg',
    qualification: 'Bachelors of Performing Arts',
    experience: '8 Months',
    about: 'Meet Unnati Gupta — turning tiny tears into giggles and ABCs into daily adventures. Specialises in early childhood development and play-based learning.'
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
