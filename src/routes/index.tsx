import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowDownToLine, ArrowRight, BadgeCheck, CalendarDays, Check, CheckCircle2, ClipboardList, Clock, Globe, Heart, Laptop, Mail, MapPin, MessageCircle, Monitor, Send, ShieldCheck, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import officeImage from '@/assets/macdonald-office.jpg';
import coverImage from '@/assets/macdonald-cover.jpg';
import portraitImage from '@/assets/macdonald-portrait.jpg';
import coverPhoneImage from '@/assets/macdonald-cover-phone.jpg';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'MacDonald Louis | Your Virtual Assistant' },
  { name: 'description', content: 'Meet MacDonald Louis — your virtual assistant for administrative support, inbox management, scheduling, and social media.' },
  { property: 'og:title', content: 'MacDonald Louis | Your Virtual Assistant' },
  { property: 'og:description', content: 'A little less busy. A lot more productive. Discover personalized virtual support with MacDonald Louis.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Index,
});
const services = [
 { icon: Laptop, name: 'Administrative Support', description: 'From data entry to document organization, the little details are taken care of.', tasks: 'Data entry · Research · Documents' },
 { icon: Mail, name: 'Email & Calendar Management', description: 'A calmer inbox. A clearer calendar. Keep your day running smoothly.', tasks: 'Inbox organization · Scheduling' },
 { icon: Users, name: 'Social Media Support', description: 'Show up consistently and stay connected with the people who matter.', tasks: 'Content scheduling · Community support' },
 { icon: MessageCircle, name: 'Customer Support', description: 'Thoughtful, friendly responses that make your customers feel heard.', tasks: 'Customer inquiries · Follow-ups' },
];
const coreServices = [
 { icon: CalendarDays, name: 'Scheduling & Calendar', short: 'scheduling', tone: 'tone-cal', description: 'Your week, planned without the endless back-and-forth. I find the time, send the invite, and make sure nothing lands on top of something else.', tasks: ['Book and confirm meetings', 'Reschedules handled calmly', 'Time-zone friendly reminders', 'A gentle preview of what’s coming'], commitment: 'Meetings usually sorted the same day' },
 { icon: Mail, name: 'Email & Inbox', short: 'email', tone: 'tone-mail', description: 'A calmer inbox where the important things rise to the top and the noise never reaches you. Replies drafted in your voice, ready for your nod.', tasks: ['Sort, flag and archive', 'Draft replies in your voice', 'Follow-ups tracked to the end', 'Newsletters and noise filtered'], commitment: 'Inbox tidied every weekday' },
 { icon: ClipboardList, name: 'Everyday Admin', short: 'admin', tone: 'tone-admin', description: 'The small, necessary jobs that quietly eat your day. Data entry, prep, paperwork and research — done properly and out of your way.', tasks: ['Data entry and record updates', 'Travel and appointment prep', 'Documents named and filed', 'Research and quick summaries'], commitment: 'Weekly batch, or as it comes' },
];
function Index() {
 const [tab, setTab] = useState('Overview');
 const [contactOpen, setContactOpen] = useState(false);
 const [selectedService, setSelectedService] = useState('General support');
 const [downloaded, setDownloaded] = useState(false);
 function contact(service = 'General support') { setSelectedService(service); setDownloaded(false); setContactOpen(true); }
 function saveInquiry(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const brief = `Inquiry for MacDonald Louis\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}\n\nDraft only — this inquiry has not been sent.`;
  const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain' }));
  const link = document.createElement('a'); link.href = url; link.download = 'macdonald-louis-inquiry.txt'; link.click(); URL.revokeObjectURL(url); setDownloaded(true);
 }
 return <>
  <header className="site-nav"><div className="nav-inner">
   <a className="brand" href="#"><span className="brand-mark">ml<span className="sr-only">MacDonald Louis</span></span>MacDonald Louis</a>
   <nav className="top-links" aria-label="Main navigation"><a href="#profile" onClick={() => setTab('Overview')}>Home</a><a href="#content" onClick={() => setTab('About')}>About me</a><a href="#services" onClick={() => setTab('Services')}>Services</a><Button onClick={() => contact()}><MessageCircle /> Let’s connect</Button></nav>
  </div></header>
  <main className="page-shell">
   <section className="cover" aria-label="Meet MacDonald Louis">
     <img className="cover-wide" src={coverImage} width={1536} height={512} alt="MacDonald Louis, virtual assistant, in front of a colourful mural" />
     <img className="cover-phone" src={coverPhoneImage} width={1024} height={880} alt="MacDonald Louis, virtual assistant, in front of a colourful mural" />
    <div className="cover-copy"><div className="cover-eyebrow"><Sparkles size={14}/> Your day, made easier</div><h1>MacDonald Louis<span>Your virtual right-hand person.</span></h1><p>A little less busy. A lot more productive.<br/>Let’s make room for what you do best.</p></div>
    <div className="cover-tag"><Monitor size={14} className="text-primary"/> Real support. Wherever you are.</div>
   </section>
   <section className="profile-band" id="profile">
    <div className="profile-main"><img className="avatar" src={portraitImage} width={1024} height={1024} alt="Portrait of MacDonald Louis"/>
     <div><div className="profile-name">MacDonald Louis <BadgeCheck size={21} className="text-primary"/></div><p className="profile-title">Virtual Assistant · Your partner in productivity</p><div className="profile-detail"><Globe size={13}/> Working remotely. Connecting globally.</div></div>
     <div className="profile-actions"><Button onClick={() => contact()}><Send/> Message me</Button><Button variant="secondary" onClick={() => { setTab('Services'); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}><Laptop/> View services</Button></div>
    </div>
    <div className="tabs" role="tablist" aria-label="Profile sections">{['Overview', 'About', 'Services', 'My approach'].map(item => <Button key={item} variant="ghost" className={`tab ${tab === item ? 'active' : ''}`} role="tab" aria-selected={tab === item} aria-controls="content" onClick={() => setTab(item)}>{item}</Button>)}</div>
   </section>
   <div className="content-grid" id="content" role="tabpanel" aria-label={tab}>
    <aside className="info-card"><h2>A little introduction 👋</h2><p className="intro-copy">Hi, I’m MacDonald. I help busy people turn overwhelming to-do lists into well-organized days — with a human touch.</p><div className="intro-list"><div><Laptop/> Virtual Assistant</div><div><MapPin/> Remote · Wherever you work</div><div><ShieldCheck/> Careful with the details</div><div><Heart/> People-first, always</div></div><div className="personal-note">“You focus on the big picture.<br/>I’ll take care of the moving parts.”</div><Button variant="secondary" className="w-full mt-5" onClick={() => contact()}><MessageCircle/> Let’s talk about your goals</Button><div className="availability"><CheckCircle2 size={13}/> Let’s explore working together</div></aside>
    <section>
     <div className="section-heading"><div><h2>{tab === 'About' ? 'The person behind the support' : tab === 'My approach' ? 'Good work starts with connection' : 'A helping hand, where you need it'}</h2><p>{tab === 'About' ? 'Thoughtful support. A genuine partnership.' : tab === 'My approach' ? 'Simple, collaborative, and centered on you.' : 'Less on your plate. More space for your next big thing.'}</p></div>{(tab === 'Overview' || tab === 'Services') && <Sparkles size={20} className="text-primary"/>}</div>
     {tab === 'About' ? <div className="about-content"><h3>Hello, I’m MacDonald.</h3><p>Behind every busy day is a long list of little things. My goal as a virtual assistant is to make those things feel lighter — bringing organization, care, and a friendly voice to your everyday work.</p><p>Whether you need help with your inbox, your schedule, or your customers, I’m here to understand your priorities and support the way you work.</p><h3>A human touch in a digital world.</h3><p>I believe in clear communication, thoughtful follow-through, and treating your business with care. Not just another task completed — a little more peace of mind.</p><Button onClick={() => contact()}>Start a conversation <ArrowRight/></Button></div> : tab === 'My approach' ? <div className="about-content"><img className="work-image" src={officeImage} width={1536} height={1024} loading="lazy" alt="An illustrative virtual-assistant workspace with a laptop and notebook"/>{[{ name: '01 · First, we connect', text: 'We talk about your goals, your workload, and where a helping hand would make the biggest difference.' }, { name: '02 · A plan that fits you', text: 'Together, we agree on priorities, communication, and a workflow that feels right for your business.' }, { name: '03 · Make progress, together', text: 'I handle the details while we stay in touch, check in, and fine-tune as your needs evolve.' }].map(step => <div key={step.name}><h3>{step.name}</h3><p>{step.text}</p></div>)}</div> : <div className="service-grid">{services.map(service => <article className="service-card" key={service.name}><div className="service-icon"><service.icon/></div><Button variant="ghost" size="icon" className="service-arrow" aria-label={`Discuss ${service.name}`} onClick={() => contact(service.name)}><ArrowRight/></Button><h3>{service.name}</h3><p>{service.description}</p>{tab === 'Services' && <p className="mt-3 text-primary">{service.tasks}</p>}</article>)}</div>}
     <div className="connection-strip"><div><h3>Your next chapter could use a helping hand.</h3><p>Let’s start with a conversation, not a commitment.</p></div><Button variant="outline" onClick={() => contact()}>Let’s connect <ArrowRight/></Button></div>
     <div className="flex items-center gap-5 pt-5 text-muted-foreground text-[11px]"><span className="flex items-center gap-2"><Check size={13}/> Thoughtful communication</span><span className="flex items-center gap-2"><Zap size={13}/> Personal support</span></div>
    </section>
   </div>
   <section className="services-section" id="services" aria-labelledby="services-title">
    <div className="services-intro"><span className="services-eyebrow"><CalendarDays size={14}/> What I can take off your plate</span><h2 id="services-title">Scheduling, email, and everyday admin — handled.</h2><p>Every busy day has the same handful of jobs that never seem to end. These are the three places I can step in right away, so your week feels a little lighter.</p></div>
    <div className="services-list">
     {coreServices.map(offer => <article className="service-offer" key={offer.name}>
      <div className="offer-head"><span className={`offer-icon ${offer.tone}`}><offer.icon/></span><h3>{offer.name}</h3></div>
      <p className="offer-copy">{offer.description}</p>
      <ul className="offer-tasks">{offer.tasks.map(task => <li key={task}><Check size={13}/>{task}</li>)}</ul>
      <p className="offer-time"><Clock size={13}/> {offer.commitment}</p>
      <Button variant="secondary" className="w-full" onClick={() => contact(offer.name)}>Ask about {offer.short} <ArrowRight/></Button>
     </article>)}
    </div>
    <div className="services-foot"><div><h3>Not sure where to start?</h3><p>Tell me what keeps landing on your desk, and we’ll shape a support plan that fits — one task, one day a week, or simply as you need it.</p></div><Button variant="outline" onClick={() => contact()}>Start the conversation <ArrowRight/></Button></div>
   </section>
  </main>
  <footer className="footer"><span>© 2026 MacDonald Louis. Made for meaningful connections.</span><span>Independent portfolio <Heart size={11}/></span></footer>
  <Dialog open={contactOpen} onOpenChange={setContactOpen}><DialogContent className="max-w-md"><DialogHeader><DialogTitle>Let’s make your day a little lighter.</DialogTitle><DialogDescription>Tell MacDonald what you have in mind.</DialogDescription></DialogHeader><form className="inquiry-form" onSubmit={saveInquiry}><label className="form-field">Your name<input name="name" placeholder="Full name" required/></label><label className="form-field">Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label className="form-field">How can I help?<select name="service" value={selectedService} onChange={event => setSelectedService(event.target.value)}><option>General support</option>{[...new Set([...coreServices.map(offer => offer.name), ...services.map(service => service.name)])].map(name => <option key={name}>{name}</option>)}</select></label><label className="form-field">A little about your project<textarea name="message" rows={3} placeholder="What would you like a helping hand with?" required/></label><p className="dialog-note">Contact details are coming soon. For now, save your inquiry as a draft — it won’t be sent.</p><Button type="submit"><ArrowDownToLine/>{downloaded ? 'Download draft again' : 'Save inquiry draft'}</Button>{downloaded && <p className="text-success text-xs flex items-center gap-2" role="status"><CheckCircle2 size={15}/> Your inquiry draft has been downloaded. Nothing was sent.</p>}</form></DialogContent></Dialog>
 </>;
}
