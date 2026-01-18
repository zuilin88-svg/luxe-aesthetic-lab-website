import { Service, Review, FAQItem } from './types';
import { Instagram, Facebook, Video, MapPin, Mail, Phone, Clock } from 'lucide-react';

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/luxeaestheticlab",
  tiktok: "https://www.tiktok.com/@luxeaestheticlab",
  facebook: "https://www.facebook.com/profile.php?id=100054359885549",
  vagaro: "https://www.vagaro.com/luxeaestheticlab",
};

export const CONTACT_INFO = {
  address: "1959 Front St Suite 206, East Meadow, Long Island, NY 11554",
  phone: "+1 (929) 272-5500",
  email: "luxeaestheticlab@gmail.com",
  hours: [
    { day: "Monday", time: "10:00am – 6:00pm" },
    { day: "Tuesday", time: "10:00am – 6:00pm" },
    { day: "Wednesday", time: "10:00am – 6:00pm" },
    { day: "Thursday", time: "10:00am – 6:00pm" },
    { day: "Friday", time: "10:00am – 6:00pm" },
    { day: "Saturday", time: "10:00am – 6:00pm" },
    { day: "Sunday", time: "Closed" },
  ]
};

export const SERVICES: Service[] = [
  {
    id: "gold-hydro-facial",
    title: "24k Gold Hydro Facial",
    price: "$265",
    category: "facial",
    // Gold mask / hydro facial treatment image
    // Using an image that shows a golden/yellow mask texture or application
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    shortDescription: "The ultimate hydration experience combining exfoliation, extraction, and 24k gold infusion.",
    details: {
      duration: "75 Minutes",
      fullDescription: [
        "The Hydro Facial is a 75-minute advanced treatment that combines cleansing, exfoliation, extraction, hydration, and protection for your skin.",
        "Using customized serums, this facial delivers immediate and long-lasting results, ensuring your skin feels revitalized and rejuvenated.",
        "It effectively addresses various skin concerns while providing a refreshing experience. This treatment is perfect for anyone looking to enhance their skincare routine with a focus on hydration and nourishment.",
        "At Luxe Aesthetic Lab, we prioritize your skincare goals, ensuring you leave with a luminous and healthy complexion."
      ]
    }
  },
  {
    id: "custom-facial",
    title: "Custom Facial",
    price: "$185",
    category: "facial",
    // Micro current / device image
    // Using an image showing facial device application
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    shortDescription: "A tailored treatment targeting your individual skin concerns with personalized care.",
    details: {
      duration: "60 Minutes",
      fullDescription: [
        "Experience a Custom Facial that targets your individual skin concerns. This tailored treatment includes LED therapy, microcurrent, or electroporation infusion, ensuring that your specific needs are met.",
        "A thorough extraction process is incorporated as needed to enhance the results.",
        "This facial is designed to rejuvenate and revitalize your skin, leaving it looking fresh and radiant. With a focus on personalized care, this treatment offers a luxurious experience that reflects your unique skincare goals."
      ]
    }
  },
  {
    id: "glow-detox-facial",
    title: "Glow Detox Facial",
    price: "$150",
    category: "facial",
    // Facial extraction/cleansing image
    // Using an image showing pore cleansing/extraction context
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Deep cleansing and balancing treatment to clear congestion and restore radiance.",
    details: {
      duration: "70 Minutes",
      fullDescription: [
        "The Glow Detox Facial is a 70-minute rejuvenating experience designed for all skin types.",
        "This treatment includes deep cleansing, gentle exfoliation, and targeted extractions or a soothing facial massage. It effectively clears congestion, calms impurities, and restores balance to the skin.",
        "You will leave with refreshed and radiant skin, feeling revitalized and glowing. This facial is perfect for anyone looking to enhance their skincare routine and achieve a healthy complexion."
      ]
    }
  },
  {
    id: "dmk-skin-revision",
    title: "DMK Skin Revision",
    price: "From $265",
    category: "specialty",
    // Enzyme texture image
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Paramedical skin revision therapy that works with your body's natural chemistry.",
    details: {
      fullDescription: ["DMK Enzyme Therapy restores skin to its peak condition."],
    }
  },
  {
    id: "brows",
    title: "Ombré Brow & Microblading",
    price: "$550",
    category: "brows",
    // Brows image - fixed link
    image: "https://images.unsplash.com/photo-1588510904349-f06b9b1836a0?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Semi-permanent makeup solutions for perfectly defined and natural-looking brows.",
    details: {
      fullDescription: ["Enhance your natural beauty with our semi-permanent brow services."],
    }
  },
  {
    id: "addons",
    title: "Add-On Services",
    price: "Various",
    category: "addon",
    // LED Mask / Advanced tool image - fixed link
    image: "https://images.unsplash.com/photo-1629344456329-dc046e280da7?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Enhance your treatment with LED, Microcurrent, or Dermaplaning.",
    details: {
      fullDescription: ["Customize your facial with these powerful add-ons."],
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Jaclyn Hugh",
    rating: 5,
    source: "Google",
    date: "2 weeks ago",
    text: "Sophia was a pleasure to work with! She thoroughly explained each treatment option and used her judgement to help me determine what was best for my skin. It was so relaxing and the day of and after, I could see improvements just from one session. My skin texture, color and overall feel look and feel so much better."
  },
  {
    id: 2,
    author: "Marica Sim",
    rating: 5,
    source: "Google",
    date: "1 month ago",
    text: "The best facial I have ever had. The attention to detail and the peaceful atmosphere made it a truly luxury experience. The Hydro Facial left my skin glowing for days."
  },
  {
    id: 3,
    author: "Edward Alexander",
    rating: 5,
    source: "Google",
    date: "3 months ago",
    text: "Been working with Luxe Aesthetic Lab for a number of years now with a variety of different treatments. They have my recommendation. They are a great team."
  },
   {
    id: 4,
    author: "Sarah Jenkins",
    rating: 5,
    source: "Google",
    date: "2 months ago",
    text: "I did the DMK enzyme therapy and it completely changed my skin. The clinic is beautiful and clean, and the staff is incredibly knowledgeable."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your cancellation policy?",
    answer: "We kindly ask for at least 24 hours notice for cancellations. Late cancellations may be subject to a fee."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our Vagaro link or by clicking the 'Book A Visit' button in the menu."
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes! We believe every skin journey starts with a conversation. We offer consultations to determine the best treatment plan for your skin type."
  },
  {
    question: "Is there downtime after DMK Skin Revision?",
    answer: "There can be some 'plasmatic effect' (veiny appearance) immediately after, which subsides quickly. Some stronger treatments may result in mild peeling, but your esthetician will guide you through post-care."
  }
];