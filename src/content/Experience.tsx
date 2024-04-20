import { ResumeItem } from '../components/ResumeItem'
import { H6, ListItem, Paragraph, YStack } from 'tamagui'
export function Experience() {
  return (
    <>
      <H6 fontWeight="bold">Experience</H6>

      <YStack gap="$10">
        <ResumeItem
          dates="Feburary 2019 to present"
          title="Co-Founder & Design Development Director"
          organization="Planet Nacho"
          location="Dallas, TX - Remote"
          description="Co-founded a design and development studio providing freelance services for a variety
              of clients, including:
"
          // description="Co-founded the design and development studio that provides freelance services to a variety of clients, directing design to optimize product solutions spanning web and native apps and deliver enhanced user experiences (UX)."
        >
          <YStack>
            <Paragraph>
              {/*Co-founded a design and development studio providing freelance services for a variety*/}
              {/*of clients, including:*/}
              <ListItem>
                • Tamagui: Design System Designer – organized Figma UI kit with 30+ components, 3
                utility variables, and 4 color variants.
              </ListItem>
              <ListItem>
                • Scoutflix: UX Director – established user flows, information architecture,
                sitemap, low-fidelity wireframes, and prototypes.
              </ListItem>
              <ListItem>
                • GGWP: UI/UX Designer – created admin dashboard, user profile, and in-game overlay
                design mockups for 3+ video games.
              </ListItem>
              <ListItem>
                • Net Consensus: React Developer & UI Designer – modernized first-time user
                experience and implemented color themes.
              </ListItem>
              <ListItem>
                • RFID Interlock: UI/UX Designer – overhauled admin dashboard experience and reduced
                time to task completion by 80%.
              </ListItem>
            </Paragraph>

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Strategic design leadership: </Paragraph>*/}
            {/*  Shape and communicate design vision, strategy, and objectives for clients' projects,*/}
            {/*  ensuring alignment with all business goals. Conduct stakeholder interviews with vested*/}
            {/*  groups to determine the optimal design process.*/}
            {/*</Paragraph>*/}

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Pitching and business development: </Paragraph>*/}
            {/*  Participate in client meetings and business development activities, showcasing the*/}
            {/*  agency's design expertise to attract new clients and projects.*/}
            {/*</Paragraph>*/}

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Client presentations: </Paragraph>*/}
            {/*  Deliver high-impact design presentations to clients, communicating design concepts,*/}
            {/*  strategies, and outcomes effectively. Assist sales team in showcasing product concepts*/}
            {/*  for fundraising and investment efforts.*/}
            {/*</Paragraph>*/}

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">React.js front-end development: </Paragraph>*/}
            {/*  Utilize existing styles and implement minimalist concepts to reorganize the front page*/}
            {/*  layouts for clients like Upquest, a Reddit alternative, in React.js and Axios with*/}
            {/*  fully responsive web design.*/}
            {/*</Paragraph>*/}

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Client management: </Paragraph>*/}
            {/*  Act as a primary point of contact for clients. Understands needs and provides*/}
            {/*  high-level design consultation and recommendations. Manage design jobs for clients,*/}
            {/*  including GGWP, RFID Interlock, ScoutFlix, and more.*/}
            {/*</Paragraph>*/}
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="July 2022 to June 2023"
          location="Dallas, TX - Hybrid"
          organization="Insite"
          title="UX Strategist"
          description="Specialized in UX strategy, UX design, and information architecture for a variety of clients, including:"
        >
          <YStack>
            <Paragraph>
              <ListItem>
                • TopGolf: UX Researcher – administered 30+ user interviews and provided actionable
                data to optimize online booking.
              </ListItem>
              <ListItem>
                • Fossil Group: Email Developer – translated Adobe XD design files into HTML and CSS
                code for 7 watch brands.
              </ListItem>
              <ListItem>
                • Bimbo Bakeries USA: Front end developer – resolved bugs and improved functionality
                for Django/Bootstrap web app.
              </ListItem>
              <ListItem>
                • UT Southwestern: Front-End Developer – migrated CMS platform from Alfresco to
                Drupal and updated new landing page.
              </ListItem>
              <ListItem>
                • PawzPurr: UX Strategist – developed new business model canvas, mapped process
                flow, and ideated wireframes.
              </ListItem>{' '}
              <ListItem>
                • Njevity: UX Auditor – scoped new project requirements, identified bottlenecks, and
                synthesized swim lane diagrams.
              </ListItem>
            </Paragraph>

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">User research synthesis: </Paragraph>*/}
            {/*  Oversaw user research initiatives, ensuring they were effectively conducted and*/}
            {/*  integrated into the design process to inform user-centric design decisions.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Responsive web design: </Paragraph>*/}
            {/*  Championed responsive web design principles, ensuring user interfaces (UI) were*/}
            {/*  adaptable to various screen sizes and devices. Technologies included Bootstrap,*/}
            {/*  Drupal, Django, and more.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Innovation and thought leadership: </Paragraph>*/}
            {/*  Stayed up-to-date with industry trends and emerging design technologies, and applied*/}
            {/*  innovative thinking to clients' projects. Shared trending design principles, to stay*/}
            {/*  on top of bleeding-edge technologies.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Front-end frameworks: </Paragraph>*/}
            {/*  Made decisions about the use of front-end frameworks (e.g., React, Angular, Vue.js)*/}
            {/*  and guided the client and development team in their implementation. Other technologies*/}
            {/*  included WordPress, SquareSpace, Webflow, and more.*/}
            {/*</Paragraph>*/}
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2021 to June 2022"
          location="London, UK - Remote"
          organization="Photon"
          title="UX/UI Designer"
          description="Provided UX and product consultation for a variety of clients, including:"
        >
          <YStack>
            <Paragraph>
              <ListItem>
                • Baker & Taylor: UI/UX Designer – created mobile, tablet, and web designs and
                transitioned team from Adobe XD to Figma.
              </ListItem>
              <ListItem>
                • Banfield Pet Hospital: UI/UX Designer – upgraded existing admin dashboard with new
                feature requirements.
              </ListItem>
              <ListItem>
                • Waltz Health: UI/UX Designer – designed static website mockup for mobile and
                desktop and directed motion graphics.
              </ListItem>
            </Paragraph>

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Design standards and best practices: </Paragraph>*/}
            {/*  Established and maintained UX/UI design standards and best practices within the*/}
            {/*  agency, ensuring the quality and consistency of design deliverables.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Project direction: </Paragraph>*/}
            {/*  Provided creative direction to junior UX designers and design teams, offering*/}
            {/*  guidance, feedback, and mentoring to help them produce outstanding work. Helped to*/}
            {/*  understand the process, establish goals, and develop skills.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Design strategy development: </Paragraph>*/}
            {/*  Developed comprehensive design strategies that incorporated user experience (UX), user*/}
            {/*  interface (UI), and overall product design considerations. Ensured all objectives were*/}
            {/*  achieved with design solutions presented during a 2-week sprint.*/}
            {/*</Paragraph>*/}
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2019 to July 2021"
          location="Dallas, TX - On-Site"
          organization="Zimperium"
          title="UX/UI Designer"
          description="Led product design initiative cybersecurity agency specializing in mobile threat detection."
        >
          <YStack>
            <Paragraph>
              <ListItem>
                • Collaborated with 3 engineering teams and 2 SVPs of Product Management and
                provided optimal design solutions.
              </ListItem>
              <ListItem>
                • Balanced new features for both current and next-gen admin dashboards, while
                prioritizing consistent design patterns.
              </ListItem>
              <ListItem>
                • Organized and maintained design files for 5+ SaaS products, a mobile app with 8+
                cobrands, and a Chrome extension.
              </ListItem>
            </Paragraph>

            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Design oversight: </Paragraph> Supervised design journey*/}
            {/*  for product/engineering teams, from concept to production to refinement to handoff.*/}
            {/*  Managed mobile, tablet, and desktop designs for over 12 cobrands, including Cylance,*/}
            {/*  LA Secure, Nexi, and more.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Process and procedures: </Paragraph> Established,*/}
            {/*  developed, and implemented standardized design systems to create consistent and*/}
            {/*  cohesive user experiences (UX) across all products and platforms. Designed admin and*/}
            {/*  dashboard screens for business units z3A, zScan, and more.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph lh="$5">*/}
            {/*  <Paragraph fontWeight="bold">Quality assurance: </Paragraph> Reviewed and assessed*/}
            {/*  design work to ensure it meets the agency's high-quality standards and expectations.*/}
            {/*  Created end-to-end product design solutions and features in alignment with the company*/}
            {/*  product roadmap.*/}
            {/*</Paragraph>*/}
          </YStack>
        </ResumeItem>
      </YStack>
    </>
  )
}
