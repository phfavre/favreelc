import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Users, Lightbulb, ChatCircle, Chalkboard, GraduationCap, Certificate, Envelope } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { toast } from 'sonner'
import logoImage from '@/assets/images/logo.png'
import instructorImage from '@/assets/images/instructor.jpg'

interface Workshop {
  id: number
  title: string
  icon: React.ElementType
  description: string
  details: string[]
  alignment?: string
}

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Understanding Children's Behavior: Foundations for Positive Guidance",
    icon: Users,
    description: "",
    details: [
      "Explain the purpose of children's behavior and how it communicates needs",
      "Identify key factors that influence behavior, including environment and development",
      "Use observation techniques to better understand and analyze challenging behaviors",
      "Apply practical strategies to respond to and guide children's behavior in a positive, supportive way"
    ],
    alignment: "1 hour in Child Growth & Development, 1 hour in Interactions"
  },
  {
    id: 2,
    title: "From Observation to Action: Using the Observation–Assessment–Teaching Cycle in Early Childhood",
    icon: Book,
    description: "",
    details: [
      "Identify and apply a range of observation strategies to document children's learning and development in an objective and meaningful way",
      "Analyze observation data to recognize children's strengths, interests, and areas for growth",
      "Use assessment insights to plan intentional, developmentally appropriate learning experiences",
      "Implement the observation–assessment–teaching cycle to support ongoing, responsive, and individualized instruction"
    ],
    alignment: "1 hour in Ongoing Measurement of Child Progress, 1 hour in Curriculum and Learning Environment"
  },
  {
    id: 3,
    title: "AI in Early Childhood Education: Supporting Intentional Teaching and Planning",
    icon: Lightbulb,
    description: "",
    details: [
      "Explain basic concepts of artificial intelligence and its role in early childhood education",
      "Identify ways AI can support intentional teaching, curriculum planning, and documentation",
      "Use AI tools to generate developmentally appropriate learning experiences and teaching ideas",
      "Apply ethical and professional considerations when using AI in early learning settings"
    ],
    alignment: "1 hour in Curriculum & Learning Environment, 1 hour in Professional Development & Leadership"
  },
  {
    id: 4,
    title: "Communicating with Families with Confidence and Sensitivity",
    icon: ChatCircle,
    description: "",
    details: [
      "Identify strategies for building respectful and trusting relationships with families",
      "Demonstrate effective communication techniques for everyday interactions and difficult conversations",
      "Use culturally responsive and family-centered approaches when communicating with families",
      "Share observations, concerns, and developmental information with sensitivity and professionalism",
      "Apply reflective practices to strengthen collaboration and partnerships with families"
    ],
    alignment: "1 hour in Families and Community Partnerships, 1 hour in Professional Development & Leadership"
  },
  {
    id: 5,
    title: "Creating Calm, Engaging, and Well-Managed Classrooms",
    icon: Chalkboard,
    description: "",
    details: [
      "Identify key components of calm, engaging, and developmentally appropriate classroom environments",
      "Apply effective classroom management strategies that support positive behavior and active engagement",
      "Use routines, transitions, and environmental design to promote children's self-regulation and participation",
      "Implement responsive interaction techniques that foster emotional safety and positive relationships",
      "Reflect on classroom practices and make intentional adjustments to support children's learning and well-being"
    ],
    alignment: "1 hour in Curriculum & Learning Environment, 1 hour in Interactions"
  }
]



interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What are STARS hours and why do they matter?",
    answer: "STARS (State Training and Registry System) hours are Washington State's professional development training credits for early childhood educators. These hours count toward your annual training requirements and help you maintain and advance your professional standing in the field."
  },
  {
    question: "How many STARS hours will I earn from a workshop?",
    answer: "Each 2–3 hour workshop provides equivalent STARS hours that count toward your Washington State training requirements."
  },
  {
    question: "Can workshops be customized for my team's specific needs?",
    answer: "Absolutely! I work closely with you to understand your team's unique challenges, goals, and learning preferences. Every workshop can be tailored to address your specific context and incorporate examples relevant to your program."
  },
  {
    question: "What format are the workshops offered in?",
    answer: "Workshops can be delivered in-person on-site at your location or virtually, depending on your team's needs and preferences. Both formats are interactive and include opportunities for discussion, reflection, and practical application. Evening and weekend options are available to accommodate your team's schedule."
  },
  {
    question: "How many participants can attend a workshop?",
    answer: "Workshop size can be flexible to meet your needs. Smaller groups (8-15 participants) allow for more intimate discussion and personalized attention, while larger groups can be accommodated with adjusted activities to maintain engagement."
  },
  {
    question: "What's the best way to schedule a workshop for my team?",
    answer: "Simply use the 'Get in Touch' button to send me a message with your preferred workshop topic, approximate team size, and any scheduling preferences. I'll work with you to find a date and format that works best for your program."
  },
  {
    question: "Are these workshops appropriate for all experience levels?",
    answer: "Yes! The workshops are designed to be valuable for both new and experienced educators. Content is presented in a way that builds foundational understanding while offering deeper insights and advanced strategies for seasoned professionals."
  },
  {
    question: "Will I receive materials or resources after the workshop?",
    answer: "Participants receive relevant handouts, resources, and tools that can be immediately applied in their classrooms. You'll also receive documentation of your STARS hours for your professional records."
  }
]

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    workshop: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you for your interest! I will be in touch soon.')
    setIsContactOpen(false)
    setFormData({ name: '', email: '', organization: '', workshop: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Favre Early Learning Consulting" className="h-24 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Workshops</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Get in Touch
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Let's Connect</DialogTitle>
                    <DialogDescription>
                      Interested in professional development for your team? Fill out this form and I'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Your school or center"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workshop">Workshop of Interest</Label>
                      <Select value={formData.workshop} onValueChange={(value) => setFormData({ ...formData, workshop: value })}>
                        <SelectTrigger id="workshop">
                          <SelectValue placeholder="Select a workshop" />
                        </SelectTrigger>
                        <SelectContent>
                          {workshops.map((workshop) => (
                            <SelectItem key={workshop.id} value={workshop.title}>
                              {workshop.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Custom Training Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your training needs..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, oklch(0.55 0.08 180 / 0.03) 35px, oklch(0.55 0.08 180 / 0.03) 70px)`
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Certificate size={16} className="mr-1" />
              Washington State-Approved Trainer
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>Empowering Early Childhood Educators Through Meaningful Professional Development</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Thoughtfully designed team workshops that bridge theory and practice, offering practical tools and STARS hours for Washington State educators working together.</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
                onClick={() => setIsContactOpen(true)}
              >
                <Envelope size={20} className="mr-2" />
                Schedule Team Training
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Workshops
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="about" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={instructorImage} 
                  alt="Professional instructor" 
                  className="rounded-2xl shadow-lg w-full object-cover aspect-square"
                />
              </div>
              <div className="md:w-2/3 space-y-6 text-lg leading-relaxed">
                <p>
                  I believe that <strong>education empowers individuals and opens doors</strong>. My approach to professional development is grounded in authenticity, practical application, and meaningful reflection. I value creating learning environments where educators can share their experiences, think critically about their practice, and grow.
                </p>
                <p>
                  My training is intentionally designed for teams to provide early childhood educators with <strong>concrete tools and strategies</strong> that can be applied immediately in their classrooms. I work closely with you to tailor each training to your specific needs and learning culture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <GraduationCap size={40} className="text-primary mb-4" weight="fill" />
                  <CardTitle className="text-xl">Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Master's degree in Child Development and Family Studies from Seoul National University
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Users size={40} className="text-primary mb-4" weight="fill" />
                  <CardTitle className="text-xl">Global Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Worked with children and educators across Switzerland, Singapore, South Korea, China, and the United States
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Certificate size={40} className="text-primary mb-4" weight="fill" />
                  <CardTitle className="text-xl">State-Approved Trainer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Workshops offer STARS hours that count toward Washington State's annual training requirements
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      <Separator />
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Development Workshops for Teams</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                2–3 Hour Team Sessions | STARS Hours Eligible | Designed for Whole Programs
              </p>
            </div>

            <div className="grid gap-6 mb-12">
              {workshops.map((workshop, index) => {
                const Icon = workshop.icon
                const isExpanded = expandedWorkshop === workshop.id
                
                return (
                  <motion.div
                    key={workshop.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Collapsible
                      open={isExpanded}
                      onOpenChange={() => setExpandedWorkshop(isExpanded ? null : workshop.id)}
                    >
                      <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                        <CollapsibleTrigger className="w-full text-left">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                <Icon size={32} weight="fill" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                  <CardTitle className="text-2xl mb-2">{workshop.title}</CardTitle>
                                  <Badge variant="secondary" className="shrink-0">
                                    <Certificate size={16} className="mr-1" />
                                    STARS Hours
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <Separator className="mb-6" />
                            {workshop.id === 1 && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Description:</h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  This interactive workshop supports early learning professionals in developing a deeper understanding of children's behavior in child care settings. Participants will explore what behavior communicates, why it occurs, and how environmental and developmental factors influence children's actions. Through practical examples and reflective activities, educators will learn how to observe, interpret, and respond to challenging behaviors using supportive, relationship-based strategies. This training is designed to help providers create more responsive classrooms that promote positive behavior and social-emotional growth.
                                </p>
                              </>
                            )}
                            {workshop.id === 2 && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Description:</h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  This interactive workshop supports early childhood educators in strengthening their ability to observe, assess, and plan with intention. Participants will explore a range of observation strategies and practice capturing meaningful, objective information about children's learning and development. Building on these observations, educators will learn how to interpret and analyze documentation to identify children's strengths, interests, and areas for growth. The workshop emphasizes how to move beyond observation toward purposeful assessment that informs teaching decisions. Participants will then apply this knowledge to plan intentional, responsive learning experiences that support each child's development. Through guided reflection and collaborative discussion, educators will deepen their understanding of how the observation–assessment–teaching cycle enhances everyday practice and leads to more meaningful learning outcomes. This session is designed to be practical, reflective, and immediately applicable, equipping educators with tools and strategies they can use in their classrooms right away.
                                </p>
                              </>
                            )}
                            {workshop.id === 3 && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Description:</h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  Artificial Intelligence (AI) is becoming an increasingly common tool in education, including early learning environments. This practical and engaging workshop explores how AI can support intentional teaching, curriculum planning, documentation, and reflective practice in early childhood settings. Participants will learn how AI tools can help generate learning ideas, support observation and planning, improve family communication, and reduce administrative workload while maintaining developmentally appropriate and relationship-based practices. Through demonstrations and hands-on activities, educators will explore responsible and meaningful ways to integrate AI into their professional practice.
                                </p>
                              </>
                            )}
                            {workshop.id === 4 && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Description:</h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  Positive partnerships with families are essential to supporting children's development and creating inclusive early learning environments. This interactive workshop helps early childhood educators strengthen their communication skills when working with families from diverse backgrounds and experiences. Participants will explore strategies for building trust, having respectful and responsive conversations, sharing observations and concerns with sensitivity, and navigating challenging situations professionally. Through discussion, reflection, and practical examples, educators will develop greater confidence in creating meaningful family partnerships that support children's learning and well-being.
                                </p>
                              </>
                            )}
                            {workshop.id === 5 && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Description:</h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  A well-managed classroom creates the foundation for children's learning, emotional well-being, and positive behavior. In this interactive workshop, early childhood educators will explore practical strategies for creating calm, engaging, and responsive classroom environments that support children's development and reduce challenging behaviors. Participants will examine the role of routines, transitions, classroom design, teacher interactions, and intentional planning in promoting a positive learning atmosphere. Through discussion, reflection, and real-world examples, educators will gain tools to strengthen classroom management practices while fostering a sense of safety, belonging, and engagement for all children.
                                </p>
                              </>
                            )}
                            <h4 className="font-semibold mb-3 text-lg">Learning Outcomes:</h4>
                            <ul className="space-y-2 mb-6">
                              {workshop.details.map((detail, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-primary mt-1.5 shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            {workshop.alignment && (
                              <>
                                <h4 className="font-semibold mb-3 text-lg">Alignment with Washington State Core Competencies:</h4>
                                <p className="text-muted-foreground mb-6">{workshop.alignment}</p>
                              </>
                            )}
                            <div className="flex justify-center pt-4">
                              <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={() => {
                                  setFormData({ ...formData, workshop: workshop.title })
                                  setIsContactOpen(true)
                                }}
                              >
                                Book this Workshop
                              </Button>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  </motion.div>
                )
              })}
            </div>

            <Card className="bg-secondary/20 border-secondary">
              <CardContent className="py-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Custom Training Solutions for Your Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Every team has unique needs. I work closely with your entire staff to design workshops that address your program's specific challenges and goals, fostering shared understanding and collaborative growth.
                  </p>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => {
                      setFormData({ ...formData, workshop: 'custom' })
                      setIsContactOpen(true)
                    }}
                  >
                    Discuss Team Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <section id="faq" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about workshops and STARS hours
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-2 rounded-lg px-6 bg-background hover:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Have another question? I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setIsContactOpen(true)}
              >
                <Envelope size={20} className="mr-2" />
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Favre Early Learning Consulting" className="h-32 w-auto" />
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>Washington State-Approved Trainer</p>
              <p>Providing STARS-eligible professional development</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App