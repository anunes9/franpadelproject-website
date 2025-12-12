import React from 'react'
import { Globe, Users, Award, Briefcase, Zap, Trophy, Heart } from 'lucide-react'
import { ServiceItem } from './types'

export const NAV_LINKS = [
  { name: 'Academy', href: 'https://app.franpadelproject.com/', target: '_blank' },
  { name: 'Founder', href: '#bio' },
  { name: 'Clinics', href: '#clinics' },
  { name: 'World Wide', href: '#world' },
]

export const CLINICS: ServiceItem[] = [
  {
    title: 'IBERIAN PADEL EXPERIENCE',
    description:
      'If you would like to have an intensive padel experience in Spain, in an academy that works as a complement to the method applied in the training center, then get 8 to 16 people together to embark on this adventure.',
    features: ['Intensive experience in Spain', 'Groups of 8 to 16 people', 'Complementary methodology'],
    icon: <Globe className="w-10 h-10" />,
  },
  {
    title: 'TRAIN AS A PRO',
    description:
      'A product aimed at all social players who want to live a five-day experience, with padel training routines, physical training, games and coaching sessions focusing on technical, tactical and technical-tactical analysis, identical to a professional player.',
    features: ['5-Day Experience', 'Training Routines', 'Physical Training', 'Tech/Tac Analysis'],
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: 'MASTER CLINIC EVOLUTION',
    description:
      'An international segment training product that brings together players, coaches and physical trainers, both foreign and national, in the application of the method applied in the training center in the transmission of technical, tactical and physical knowledge.',
    features: ['International Segment', 'Coaches & Trainers', 'Knowledge Transmission'],
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: 'PADEL WONDERLAND',
    description:
      'An event that recreates an environment characteristic of professional padel within a host club with the reception of national and international players, coaches and physical trainers. Technical and tactical talks, autograph sessions, padel games and training sessions.',
    features: ['Pro Environment', 'Talks & Autographs', 'Social & Pro Segments'],
    icon: <Award className="w-10 h-10" />,
  },
  {
    title: 'MASTER CLINIC',
    description:
      'Training product of national segment that seeks to make known the method applied in the training center with elements belonging to the technical team of Fran Padel Project to clubs with the ambition of knowing our perspective on padel.',
    features: ['National Segment', 'Technical Team', 'Club Partnerships'],
    icon: <Trophy className="w-10 h-10" />,
  },
  {
    title: 'PADEL COMPANY BIG DAY',
    description:
      'A training activity aimed at companies with an interest in promoting team building activities among their employees with padel playing a prominent role in promoting skills related to working in groups, effective communication, and managing emotions.',
    features: ['Team Building', 'Communication Skills', 'Emotional Management'],
    icon: <Briefcase className="w-10 h-10" />,
  },
  {
    title: 'PLAY LIKE A PRO',
    description:
      'A product that promotes an experience for those interested in sharing a padel court as an opponent and partner of a professional player during a 1-hour game with a 20-minute rotation in each role.',
    features: ['Play with Pros', '1-Hour Game', 'Rotation System'],
    icon: <Heart className="w-10 h-10" />,
  },
]

export const BIO_DATA = {
  name: 'FRANCISCO FREITAS',
  titles: ['Founder FRAN Padel Project', 'Founder FRAN Methodology', 'Head Coach'],
  experience: [
    'Horácio Alvarez Clementi ("HAC") Ambassador (2019 - 2022)',
    'Technical Coach & Sparring in Horácio Alvarez Clementi "WPT" Team 2015-2021',
    'Worked with: Augustin Tapia, Lucas Bergamini, Lucas Campagnolo, Matiaz Diaz, Carolina Navarro',
    '+ 50 Clinics and Courses: Portugal, Spain, Angola, Sweden, Netherlands',
  ],
  education: ['Psychology Degree in ISPA University', 'Grade I & II from IPDJ'],
  coached: [
    'Afonso Fazendeiro (2022-2023)',
    'Constança Gorito (2022-2024)',
    'Bernardo Monteiro (2021-2023)',
    'Martim Silva (2022-2023)',
    'Plínio Ferrão (2021-2023)',
    'Sofia Formigal (2023-2024)',
  ],
}

export const WORLD_LOCATIONS = [
  { name: 'Valencia', country: 'Spain', products: ['Master Clinic'] },
  { name: 'Madrid', country: 'Spain', products: ['Iberian Padel Experience'] },
  { name: 'Vaspy', country: 'Sweden', products: ['Master Clinic'] },
  { name: 'Amsterdam', country: 'Netherlands', products: ['Master Clinic'] },
  { name: 'Talatona', country: 'Angola', products: ['Master Clinic', 'Fran Methodology'] },
  { name: 'Lisbon', country: 'Portugal', products: ['Padel Wonderland', 'Master Clinic', 'Master Clinic Evolution'] },
  { name: 'Azores', country: 'Portugal', products: ['Fran Methodology'] },
]
