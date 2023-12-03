// Features
import FeatureImg1 from '../src/assets/images/Features/Feature1.webp';
import FeatureImg2 from '../src/assets/images/Features/Feature2.webp';
import FeatureImg3 from '../src/assets/images/Features/Feature3.webp';
import FeatureImg4 from '../src/assets/images/Features/Feature4.webp';

// Emojis
import emojiUser1 from '../src/assets/images/EmojiUser/emojiUser1.webp';
import emojiUser2 from '../src/assets/images/EmojiUser/emojiUser2.webp';
import emojiUser3 from '../src/assets/images/EmojiUser/emojiUser3.webp';
import emojiUser4 from '../src/assets/images/EmojiUser/emojiUser4.webp';

// More Features
import moreFeatures1 from '../src/assets/images/MoreFeatures/MoreFeatures1.svg';
import moreFeatures2 from '../src/assets/images/MoreFeatures/MoreFeatures2.svg';
import moreFeatures3 from '../src/assets/images/MoreFeatures/MoreFeatures3.svg';
import moreFeatures4 from '../src/assets/images/MoreFeatures/MoreFeatures4.webp';
import moreFeatures5 from '../src/assets/images/MoreFeatures/MoreFeatures5.webp';
import moreFeatures6 from '../src/assets/images/MoreFeatures/MoreFeatures6.webp';

export const data = {
  websiteName: 'Milton',
  navbar: {
    links: ['Features', 'Testimonials', 'Pricing', 'FAQs', 'Blog']
  },
  hero: {
    heroUpperText: 'An other way to manage time',
    heroTitle: 'Your new favorite calendar 🗓️ app',
    heroSubText:
      'Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. ',
    ctaText: `Get Started, It's Free`,
    buttonSubText: 'Free 14 days trials, no credit card needed'
  },
  features: {
    featuresUpperText: 'Our main features 🦸🏼',
    featuresTitles: 'Discover your new superpowers',
    chipsText: [
      'Seamless Scheduling',
      'Smart Reminders & Task',
      'Seamless Scheduling',
      'Smart Reminders & Task'
    ],
    titles: [
      'Focus on what matters most for you',
      'Never miss an important deadline or event again',
      'Focus on what matters most for you',
      'Never miss an important deadline or event again'
    ],
    subText: [
      'Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.',
      "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      'Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.',
      "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free."
    ],
    emojiText: [
      'I tested many calendar apps. This app is the best of all! It saves me hours of time.',
      "I love how user-friendly this app is! It's so easy to add events and set reminders!",
      "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.",
      "I've recommended this app to all my friends and colleagues!"
    ],
    emojiUsername: [
      'Carla, Head of Finance',
      'Adam, entrepreneur',
      'Annie, Designer',
      'Karl, CTO of a cool startup'
    ],
    featureImages: [FeatureImg1, FeatureImg2, FeatureImg3, FeatureImg4],
    emojiUsersImages: [emojiUser1, emojiUser2, emojiUser3, emojiUser4]
  },
  moreFeatures: {
    moreFeaturesUpperText: 'And so much more... 💼',
    moreFeaturesTitle: 'Our features to make your life easier',
    featureCard: [
      {
        title: 'Cross-Device Sync',
        subText:
          'Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.',
        image: moreFeatures1
      },
      {
        title: 'Auto Event Import',
        subText:
          'Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.',
        image: moreFeatures2
      },
      {
        title: 'Task Delegation',
        subText:
          'Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.',
        image: moreFeatures3
      },
      {
        title: 'Voice Command Integration',
        subText:
          'Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.',
        image: moreFeatures4
      },
      {
        title: 'Customizable Alerts',
        subText:
          'Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.',
        image: moreFeatures5
      },
      {
        title: 'Privacy Protection',
        subText:
          'Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.',
        image: moreFeatures6
      }
    ]
  },
  pricing: {
    upperText: 'Pricing and plans 💰',
    title: 'Find the best plan for your needs',
    timeChoice: ['Monthly', 'Yearly'],
    cardConfig: [
      {
        plan: 'Free',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '0',
        yearlyPrice: '0',
        bestDeal: false,
        features: [
          'A cool feature',
          'A basic feature',
          'A top feature with limitations',
          'An incredible feature so useful',
          'A top feature'
        ]
      },
      {
        plan: 'Starter',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '19',
        yearlyPrice: '15',
        totalYearly: '180',
        bestDeal: true,
        features: [
          'A cool feature',
          'A basic feature',
          'A top feature with limitations',
          'An incredible feature so useful',
          'A top feature'
        ]
      },
      {
        plan: 'Pro',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '49',
        yearlyPrice: '45',
        totalYearly: '540',
        bestDeal: false,
        features: [
          'A cool feature',
          'A basic feature',
          'A top feature with limitations',
          'An incredible feature so useful',
          'A top feature',
          'You need this feature'
        ]
      }
    ]
  },
  cta: {
    upperText: 'Last go Baby! 🚀',
    title: 'Ready to start?',
    subText:
      'Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. ',
    userText:
      'I never missed a call again, the AI-driven feature is a game changer for me!',
    userName: 'Adam, Solo founder'
  },
  footer: {
    col1: {
      col1SubText: 'A short text explaining why my startup is so cool',
      col2SubText: '© My super start-up'
    },
    col2: {
      title: 'Products',
      links: ['Features', 'Testimonials', 'Pricing', 'FAQs']
    },
    col3: {
      title: 'Resources',
      links: ['Change log', 'Help center', 'Blog', 'Contact']
    },
    col4: {
      title: 'Others',
      links: ['Privacy', 'Terms', 'Affiliation', , 'Press']
    },
    col5: {
      title: 'From the blog',
      links: [
        'Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life',

        'Organizing Your Calendar for Enhanced Productivity and Focus',

        'The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks',
        'Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar'
      ]
    }
  }
};
