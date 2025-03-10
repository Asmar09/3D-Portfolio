import {skills, experiences } from "../constant";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

export const About = () => {
  return (
    <section className="max-container">
           <h1 className="head-text">
            Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">
              Asmar
            </span>
           </h1>
            <p className='text-slate-500 mt-2 leading-relaxed'>
            Dedicated and results-driven Full Stack Developer with 4 years of experience in creating dynamic and
scalable web applications. Proficient in a wide range of technologies including React, Angular, Node,
MongoDB, and more. Adept at collaborating with cross-functional teams to drive project success.
Seeking to leverage expertise to deliver innovative solutions and drive business growth.
            </p>
           <div className="py-10 flex flex-col">
            <h3 className="subhead-text">My Skills</h3>
            <div className="mt-16 flex flex-wrap gap-12">
               {skills.map((skill) => (
                <div className="block-container h-20 w-20">
                  <div className="btn-back rounded-xl"/>
                  <div className="btn-font rounded-xl flex justify-center items-center">
                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
               ))}
            </div>
           </div>

           <div className="py-16">
           <h3 className="subhead-text">My Work Experience</h3>
           <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p className="">
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
            </p>
           </div>
           <div className="mt-12 flex">
       <VerticalTimeline>
        {experiences.map((experience) =>(
             <VerticalTimelineElement 
              key={experience.company_name}
              date={experience.date}
              icon={<div className="w-full h-full flex justify-center items-center">
                <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
              </div>}
              iconStyle={{
                background: experience.iconBg
              }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
              }}
             >
              <div><h3 className="text-black text-xl font-poppins font-semibold">
                {experiences.title}
                </h3>
                <p className="text-black-500 font-medium font-base" style={{margin: '0'}}>{experience.company_name}</p>
                </div>
                <ul className="my-5 ml-5 list-disc space-y-2">
                  {experience.points.map((point,index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
             </VerticalTimelineElement>
        ))}
       </VerticalTimeline>
           </div> 
           </div>
           <hr  className="border-slate-200"/>
           <CTA />
    </section>
  )
}
