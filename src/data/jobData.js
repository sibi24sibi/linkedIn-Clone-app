
import {jobLogoPic} from '../assets/assets'

const jobData = [
  {
    id: 1,
    logo: jobLogoPic,
    job_role: 'Software Developer',
    company: 'XYZ Consultancy Services',
    location: 'Noida, Uttar Pradesh',
    description: 'Job details for Software Developer.',
    type: 'Full-time',
    role: 'Fresher',
    experience: '0-1 Year',
    eligibility: 'Graduate',
    responsibilities: [
      'Develop user interface components using Vue.js',
      'Build reusable components and front-end libraries',
    ],
    requirements: [
      'Bachelor\'s degree in computer science or related field',
      '2 years of experience in Vue.js development',
      'Proficient in HTML, CSS, and JavaScript',
      'Strong understanding of Vue.js concepts',
    ],
  },
  {
    id: 2,
    logo: jobLogoPic,
    job_role: 'Java Developer',
    company: 'ABC Consultancy Services',
    location: 'Delhi, India',
    description: 'Job details for Java Developer.',
    type: 'Full-time',
    role: 'Fresher',
    experience: '0-1 Year',
    eligibility: 'Graduate',
    responsibilities: [
      'Develop back-end services using Java',
      'Collaborate with front-end developers',
    ],
    requirements: [
      'Bachelor\'s degree in computer science or related field',
      '1-2 years of experience in Java development',
      'Proficient in Spring framework',
    ],
  },
  {
    id: 3,
    logo: jobLogoPic,
    job_role: 'Data Scientist',
    company: 'Data Solutions Inc.',
    location: 'Bangalore, Karnataka',
    description: 'Join our team as a Data Scientist to analyze complex data.',
    type: 'Full-time',
    role: 'Mid-level',
    experience: '2-4 Years',
    eligibility: 'Postgraduate',
    responsibilities: [
      'Analyze large datasets to derive actionable insights.',
      'Develop machine learning models.',
    ],
    requirements: [
      'Master\'s degree in Data Science or related field',
      'Experience with Python and R',
      'Knowledge of SQL and NoSQL databases',
    ],
  },
  {
    id: 4,
    logo: jobLogoPic,
    job_role: 'Product Manager',
    company: 'Innovative Tech',
    location: 'Hyderabad, Telangana',
    description: 'Lead product development and strategy.',
    type: 'Full-time',
    role: 'Senior',
    experience: '5+ Years',
    eligibility: 'Graduate',
    responsibilities: [
      'Define product vision and roadmap.',
      'Collaborate with cross-functional teams to deliver features.',
    ],
    requirements: [
      'Bachelor\'s degree in Business or Engineering',
      'Proven experience in product management',
      'Excellent communication skills',
    ],
  },
  {
    id: 5,
    logo: jobLogoPic,
    job_role: 'UX/UI Designer',
    company: 'Creative Studio',
    location: 'Mumbai, Maharashtra',
    description: 'Design user-friendly interfaces and experiences.',
    type: 'Part-time',
    role: 'Junior',
    experience: '0-2 Years',
    eligibility: 'Graduate',
    responsibilities: [
      'Create wireframes and prototypes.',
      'Conduct user research and usability testing.',
    ],
    requirements: [
      'Bachelor\'s degree in Design or related field',
      'Familiarity with design tools like Sketch or Figma',
      'Basic understanding of HTML/CSS',
    ],
  },
  {
    id: 6,
    logo: jobLogoPic,
    job_role: 'Network Engineer',
    company: 'Tech Networks',
    location: 'Chennai, Tamil Nadu',
    description: 'Maintain and optimize network systems.',
    type: 'Full-time',
    role: 'Mid-level',
    experience: '2-3 Years',
    eligibility: 'Graduate',
    responsibilities: [
      'Monitor network performance.',
      'Troubleshoot and resolve issues.',
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'Experience with network security',
      'Certifications like CCNA preferred',
    ],
  },
];

export default jobData;
