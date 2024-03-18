import { ResumeItem } from '../components/ResumeItem'
import { H6, Paragraph, YStack } from 'tamagui'
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
          description="Co-founded the design and development studio that provides freelance services to a variety of clients, directing design to optimize product solutions spanning web and native apps and deliver enhanced user experiences (UX)."
        >
          <YStack gap="$6" mt="$6">
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Strategic design leadership: </Paragraph>
              Shape and communicate design vision, strategy, and objectives for clients' projects,
              ensuring alignment with all business goals. Conduct stakeholder interviews with vested
              groups to determine the optimal design process.
            </Paragraph>

            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Pitching and business development: </Paragraph>
              Participate in client meetings and business development activities, showcasing the
              agency's design expertise to attract new clients and projects.
            </Paragraph>

            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Client presentations: </Paragraph>
              Deliver high-impact design presentations to clients, communicating design concepts,
              strategies, and outcomes effectively. Assist sales team in showcasing product concepts
              for fundraising and investment efforts.
            </Paragraph>

            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">React.js front-end development: </Paragraph>
              Utilize existing styles and implement minimalist concepts to reorganize the front page
              layouts for clients like Upquest, a Reddit alternative, in React.js and Axios with
              fully responsive web design.
            </Paragraph>

            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Client management: </Paragraph>
              Act as a primary point of contact for clients. Understands needs and provides
              high-level design consultation and recommendations. Manage design jobs for clients,
              including GGWP, RFID Interlock, ScoutFlix, and more.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="July 2022 to June 2023"
          location="Dallas, TX - Hybrid"
          organization="Insite"
          title="UX Specialist"
          description="Specialized in user research, responsive web design, and innovation. Utilized expertise in front-end frameworks including React, Angular, and Vue.js, alongside various platforms like WordPress and Webflow to develop client sites and products."
        >
          <YStack gap="$6" mt="$6">
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">User research synthesis: </Paragraph>
              Oversaw user research initiatives, ensuring they were effectively conducted and
              integrated into the design process to inform user-centric design decisions.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Responsive web design: </Paragraph>
              Championed responsive web design principles, ensuring user interfaces (UI) were
              adaptable to various screen sizes and devices. Technologies included Bootstrap,
              Drupal, Django, and more.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Innovation and thought leadership: </Paragraph>
              Stayed up-to-date with industry trends and emerging design technologies, and applied
              innovative thinking to clients' projects. Shared trending design principles, to stay
              on top of bleeding-edge technologies.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Front-end frameworks: </Paragraph>
              Made decisions about the use of front-end frameworks (e.g., React, Angular, Vue.js)
              and guided the client and development team in their implementation. Other technologies
              included WordPress, SquareSpace, Webflow, and more.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2021 to June 2022"
          location="London, UK - Remote"
          organization="Photon"
          title="UX/UI Designer"
          description="Drove design excellence at a global IT agency by setting and upholding UX/UI design standards, mentoring junior UX designers, and providing product creative direction. Developed holistic design strategies to meet objectives within 2-week sprints."
        >
          <YStack gap="$6" mt="$6">
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Design standards and best practices: </Paragraph>
              Established and maintained UX/UI design standards and best practices within the
              agency, ensuring the quality and consistency of design deliverables.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Project direction: </Paragraph>
              Provided creative direction to junior UX designers and design teams, offering
              guidance, feedback, and mentoring to help them produce outstanding work. Helped to
              understand the process, establish goals, and develop skills.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Design strategy development: </Paragraph>
              Developed comprehensive design strategies that incorporated user experience (UX), user
              interface (UI), and overall product design considerations. Ensured all objectives were
              achieved with design solutions presented during a 2-week sprint.
            </Paragraph>
          </YStack>
        </ResumeItem>

        <ResumeItem
          dates="September 2019 to July 2021"
          location="Dallas, TX - On-Site"
          organization="Zimperium"
          title="UX/UI Designer"
          description="Oversaw design journey from concept to handoff for a SaaS-based cybersecurity agency specializing in mobile threat detection. Managed designs for 12+ cobrands, established standardized design systems, and ensured high-quality design solutions aligned with the product roadmap."
        >
          <YStack gap="$6" mt="$6">
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Design oversight: </Paragraph> Supervised design journey
              for product/engineering teams, from concept to production to refinement to handoff.
              Managed mobile, tablet, and desktop designs for over 12 cobrands, including Cylance,
              LA Secure, Nexi, and more.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Process and procedures: </Paragraph> Established,
              developed, and implemented standardized design systems to create consistent and
              cohesive user experiences (UX) across all products and platforms. Designed admin and
              dashboard screens for business units z3A, zScan, and more.
            </Paragraph>
            <Paragraph lh="$5">
              <Paragraph fontWeight="bold">Quality assurance: </Paragraph> Reviewed and assessed
              design work to ensure it meets the agency's high-quality standards and expectations.
              Created end-to-end product design solutions and features in alignment with the company
              product roadmap.
            </Paragraph>
          </YStack>
        </ResumeItem>
      </YStack>
    </>
  )
}
