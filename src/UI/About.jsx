import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Jerald Joyson" },
  { icon: <PhoneCall size={20} />, text: "+91 7592963353" },
  { icon: <MailIcon size={20} />, text: "Jeraldjoyson20@gmail.com" },
  { icon: <Calendar size={20} />, text: "Born on 29 May, 2002" },
  {
    icon: <GraduationCap size={20} />,
    text: "Currently Studying at Bachelor of Technology in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Nerinjampilly house Inchakundu P.O,Kalkuzhy,Thrissur,680312",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "GHSS Mupliyam",
        qualification: "SSLC",
        years: "2016 - 2017",
      },
      {
        university: "GHSS Mupliyam",
        qualification: "PLUS TWO",
        years: "2018 - 2020",
      },
      {
        university: "Maharaja's Technological Institute, Thrissur",
        qualification: "DIPLOMA",
        years: "2020-2022",
      },
      {
        university: "Govt. Engineering College Sreekrishnapuram, Palakkad",
        qualification: "B-TECH",
        years: "2022-2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: " ",
        role: " ",
        years: " ",
      },
      {
        company: " ",
        role: " ",
        years: " ",
      },
      {
        company: " ",
        role: " ",
        years: " ",
      },
      {
        company: " ",
        role: " ",
        years: " ",
      },
    ],
  },
];



const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] py-12 xl:py-24">
      <div className="flex mb-5 xl:hidden justify-center items-center relative">
        <img
          src="/profile.png"
          alt="profile picture"
          width={450}
          height={300}
        />
      </div>
      <div className="container mx-auto">
        <h2 className="section-title mb-4 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* images */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative">
              <img src="/about/developer.png" alt="Developer" />
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="text-muted-foreground">
                              {item.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Malayalam, Tamil, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education */}
                    <div className="flex">
                      {/* experiences */}
                      {/* <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="group-hover:translate-y-[84px] transition-all duration-500">
                                      <div className="flex items-center gap-x-2 text-xl font-semibold capitalize mb-2">
                                        <div>{company}</div>
                                        <div>({years})</div>
                                      </div>
                                      <div className="text-lg mb-4 capitalize">
                                        {role}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div> */}
                      {/* education */}
                      <div className="flex flex-col gap-y-6 w-full">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="group-hover:translate-y-[84px] transition-all duration-500">
                                      <div className="flex items-center gap-x-2 text-xl font-semibold capitalize mb-2">
                                        <div>{university}</div>
                                        <div>({years})</div>
                                      </div>
                                      <div className="text-lg mb-4 capitalize">
                                        {qualification}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
