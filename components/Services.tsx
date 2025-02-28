'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Bot, Users, Notebook as Robot, Mic, Megaphone, ShoppingBag, Globe, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const careerPathways = [
  {
    title: "PUBLISH A BOOK",
    icon: Book,
    details: [
      "1-on-1 Mentorship with Experienced Author",
      "Structured Writing Process",
      "Publishing Support & Guidance",
      "Professional Editing & Proofreading"
    ],
    outcomes: [
      "📖 A fully written & formatted book",
      "📖 A launch plan & publishing roadmap",
      "📖 A writing portfolio & author brand"
    ],
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "BUILD AN AI CHATBOT",
    icon: Bot,
    details: [
      "AI Development Fundamentals",
      "NLP & Machine Learning Training",
      "Chatbot Architecture Design",
      "Integration & Deployment Support"
    ],
    outcomes: [
      "🤖 Fully functional AI chatbot",
      "🤖 Technical documentation",
      "🤖 Deployment portfolio"
    ],
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "BECOME AN INFLUENCER",
    icon: Users,
    details: [
      "Content Strategy Development",
      "Personal Brand Building",
      "Audience Engagement Techniques",
      "Monetization Strategies"
    ],
    outcomes: [
      "🌟 Strong social media presence",
      "🌟 Engaged follower community",
      "🌟 Brand collaboration portfolio"
    ],
    gradient: "from-pink-400 to-purple-500"
  },
  {
    title: "BUILD A ROBOT",
    icon: Robot,
    details: [
      "Robotics Engineering Basics",
      "Hardware & Software Integration",
      "Sensor Programming",
      "Testing & Optimization"
    ],
    outcomes: [
      "🤖 Working robot prototype",
      "🤖 Technical documentation",
      "🤖 Engineering portfolio"
    ],
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "START A PODCAST",
    icon: Mic,
    details: [
      "Audio Production Training",
      "Content Planning & Scripting",
      "Interview Techniques",
      "Distribution Strategy"
    ],
    outcomes: [
      "🎙️ Live podcast show",
      "🎙️ Production portfolio",
      "🎙️ Audience growth strategy"
    ],
    gradient: "from-red-400 to-pink-500"
  },
  {
    title: "MARKETING AGENCY",
    icon: Megaphone,
    details: [
      "Agency Business Model",
      "Client Acquisition Strategy",
      "Service Portfolio Development",
      "Team Management"
    ],
    outcomes: [
      "🚀 Operational agency",
      "🚀 Client portfolio",
      "🚀 Growth roadmap"
    ],
    gradient: "from-violet-400 to-purple-500"
  },
  {
    title: "ONLINE BUSINESS",
    icon: ShoppingBag,
    details: [
      "Business Model Development",
      "E-commerce Platform Setup",
      "Supply Chain Management",
      "Digital Marketing Strategy"
    ],
    outcomes: [
      "💼 Active online store",
      "💼 Sales framework",
      "💼 Business portfolio"
    ],
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "DIGITAL WEBSITE",
    icon: Globe,
    details: [
      "Web Development Training",
      "UI/UX Design Principles",
      "Content Management",
      "SEO Optimization"
    ],
    outcomes: [
      "🌐 Live website",
      "🌐 Design portfolio",
      "🌐 Technical documentation"
    ],
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "LAUNCH NPO",
    icon: Heart,
    details: [
      "Non-Profit Registration",
      "Mission & Vision Planning",
      "Fundraising Strategy",
      "Community Engagement"
    ],
    outcomes: [
      "💝 Registered NPO",
      "💝 Impact portfolio",
      "💝 Sustainability plan"
    ],
    gradient: "from-emerald-400 to-green-500"
  }
]

const CareerCard = ({ career, isMobile }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`relative w-full ${isMobile ? 'h-[400px]' : 'h-[320px]'} cursor-pointer perspective`}
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`}>
          <div>
            <career.icon className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">{career.title}</h3>
            <ul className="text-sm text-white">
              {career.details.map((detail, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View outcomes
            </button>
          )}
        </div>

        {/* Back of card */}
        <div 
          className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`} 
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">What You'll Achieve</h3>
            <ul className="text-lg mb-4 text-white space-y-4">
              {career.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View details
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

const CarouselProgress = ({ current, total }) => (
  <div className="flex items-center gap-4">
    <div className="text-sm font-medium text-gray-500">
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
    <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  </div>
)

const Services = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          badge="Career Pathways"
          title="Explore Your Future"
          highlightedWord="Outcomes"
          subtitle="Discover diverse opportunities and their potential outcomes tailored to your interests and abilities"
        />
        
        <div className="relative max-w-7xl mx-auto mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {careerPathways.map((career, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CareerCard career={career} isMobile={false} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 md:mt-12">
              <button
                onClick={() => api?.scrollPrev()}
                className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="hidden md:inline">Previous</span>
              </button>
              
              <CarouselProgress 
                current={current} 
                total={careerPathways.length} 
              />
              
              <button
                onClick={() => api?.scrollNext()}
                className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <span className="hidden md:inline">Next</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            Explore All Pathways
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services