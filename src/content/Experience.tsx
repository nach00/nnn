import { ResumeItem } from '../components/ResumeItem'
import { H6, Paragraph, YStack } from 'tamagui'
export function Experience() {
  return (
    <>
      <H6 fontWeight="bold">Experience</H6>

      <YStack gap="$10">
        <ResumeItem
          dates="Feburary 2019 to present"
          title="UX Director"
          organization="Planet Nacho"
          location="Dallas, TX - Remote"
          description="Co-founder of digital design and development studio"
        >
          <YStack gap="$6">
            <Paragraph>
              <Paragraph fontWeight="bold">Strategic design leadership:</Paragraph> Shape and
              communicate design vision, strategy, and objectives for clients' projects, ensuring
              alignment with all business goals. Conduct stakeholder interviews with vested groups
              to determine optimial design process.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Pitching and business development:</Paragraph>{' '}
              Participate in client meetings and business development activities, showcasing the
              agency's design expertise to attract new clients and projects.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Client presentations:</Paragraph> Deliver high-impact
              design presentations to clients, communicating design concepts, strategies, and
              outcomes effectively. Assist sales team in showcasing product concepts for fundraising
              and investment efforts.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">React.js front-end development:</Paragraph> Utilize
              existing style and implemented minimalist concepts to reorganize front page layout for
              client Upquest, a Reddit alternative, in React.js and Axios with fully responsive web
              design.
            </Paragraph>{' '}
            <Paragraph>
              <Paragraph fontWeight="bold">Client management:</Paragraph> Act as a primary point of
              contact for clients. Understands needs and provides high-level design consultation and
              recommendations. Manage design jobs for clients, including GGWP, RFID Interlock,
              ScoutFlix, and more.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="July 2022 to June 2023"
          location="Dallas, TX - Hybrid"
          organization="Insite"
          title="UX Specialist"
          description="Jack-of-all-trades for local web development agency"
        >
          <YStack gap="$6">
            <Paragraph>
              <Paragraph fontWeight="bold">Strategic design leadership:</Paragraph> User research
              synthesis: Oversee user research initiatives, ensuring they are effectively conducted
              and integrated into the design process to inform user-centric design decisions.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Responsive web design:</Paragraph> Champion responsive
              web design principles, ensuring that user interfaces are adaptable to various screen
              sizes and devices. Technoligies include Bootstrap, Drupal, Django, and more.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Innovation and thought leadership:</Paragraph> Stay
              up-to-date with industry trends and emerging design technologies, and apply innovative
              thinking to clients' projects. Share trending design principles, to stay on top of
              bleeding edge technologies..
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Front-end frameworks:</Paragraph> Make decisions about
              the use of front-end frameworks (e.g., React, Angular, Vue.js) and guide the client
              and development team in their implementation. Other technologies include WordPress,
              SquareSpace, Webflow, and more.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2021 to June 2022"
          location="London, UK - Remote"
          organization="Photon"
          title="UX/UI Designer"
          description="Hybrid designer for global IT agency"
        >
          <YStack gap="$6">
            <Paragraph>
              <Paragraph fontWeight="bold">Design standards and best practices:</Paragraph>{' '}
              Establish and maintain design standards and best practices within the agency, ensuring
              the quality and consistency of design deliverables.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Project direction:</Paragraph> Provide creative direction
              to junior designers and design teams, offering guidance, feedback, and mentoring to
              help them produce outstanding work. Help to understand process, establish goals, and
              develop skills.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Design strategy development:</Paragraph>
              Develop comprehensive design strategies that incorporate user experience, user
              interface, and overall product design considerations. Ensure all objectives achieved
              with design solution presented during 2-week sprint.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2019 to July 2021"
          location="Dallas, TX - On-Site"
          organization="Zimperium"
          title="UX/UI Designer"
          description="Lead designer for mobile threat detection company"
        >
          <YStack gap="$6">
            <Paragraph>
              <Paragraph fontWeight="bold">Design oversight:</Paragraph> Supervise design journey
              for product/engineering teams, from concept to production to refinement to handoff.
              Manage mobile, tablet and desktop designs for over 12 cobrands, including Cylance, LA
              Secure, Nexi, and more.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Process and procedures:</Paragraph> Establish, develop,
              and implement standardized design systems to create consistent and cohesive user
              experiences across all products and platforms. Design admin and dashboard screens for
              business units z3A, zScan, and more.
            </Paragraph>
            <Paragraph>
              <Paragraph fontWeight="bold">Quality assurance:</Paragraph> Review and assess design
              work to ensure it meets the agency's high-quality standards and expectations. Create
              end-to-end product design solutions and features in alignment with the company product
              roadmap.
            </Paragraph>
          </YStack>
        </ResumeItem>
      </YStack>
    </>
  )
}
