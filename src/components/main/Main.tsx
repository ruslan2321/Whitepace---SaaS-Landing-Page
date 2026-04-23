import "./style.scss";
import { UI_Plate } from "../UI/Plate/PlateDefault";
import { UI_Button } from "../UI/Button/Button";
import ArrowRight from "/svg/ArrowRight.svg";
import { UI_Cards } from "../UI/Cards/Cards";
import { UI_PlateDown } from "../UI/Plate/PlateDown/PlateDown";
import { UI_CardPeople } from "../UI/Cards/CardPeople";

export const Main = () => {
  return (
    <>
      <div>
        <UI_Plate
          plateProps={{
            label: "Get More Done with whitepace",
            description:
              "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
            img: "/images/PlateImg1.png",
            bgimg: "/images/bgimg1.png",
            color: "white",
            content: (
              <UI_Button
                icon={ArrowRight}
                bg={"blue"}
                size="md"
                text="Try Whitepace free"
              />
            ),
          }}
        />
        <UI_Plate
          plateProps={{
            label: "Project Management",
            description:
              "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
            img: "/images/PlateImg2.png",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Get Started"
                icon={ArrowRight}
              />
            ),
          }}
        />
        <UI_Plate
          plateProps={{
            label: "Work together",
            description:
              "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
            img: "/images/planet.png",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Try it now"
                icon={ArrowRight}
              />
            ),
          }}
          position="left"
        />
        <UI_Plate
          plateProps={{
            label: "Use as Extension",
            description:
              "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
            img: "/images/PlateImg3.png",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Get Started"
                icon={ArrowRight}
              />
            ),
            bg: "darkblue",
          }}
        />
        <UI_Plate
          plateProps={{
            label: "Customise it to your needs",
            description:
              "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
            img: "/images/PlateImg4.png",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Let’s Go"
                icon={ArrowRight}
              />
            ),
            bg: "white",
          }}
          position="left"
        />
        <UI_PlateDown
          plateProps={{
            label: "Choose Your Plan",
            description:
              " Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.",
            bg: "white",
            content: (
              <div className="flex gap-[32px]">
                <UI_Cards
                  title="Free"
                  description="Capture ideas and find them quickly"
                  lable="$0"
                  bg="white"
                  size="md"
                  content={
                    <ul>
                      <li>
                        <p>Sync unlimited devices</p>
                      </li>
                      <li>
                        <p>10 GB monthly uploads</p>
                      </li>
                      <li>
                        <p>200 MB max. note size</p>
                      </li>
                      <li>
                        <p>Customize Home dashboard and access extra widgets</p>
                      </li>
                      <li>
                        <p>Connect primary Google Calendar account</p>
                      </li>
                      <li>
                        <p>
                          Add due dates, reminders, and notifications to your
                          tasks
                        </p>
                      </li>
                    </ul>
                  }
                  contentfooter={
                    <UI_Button size="sm" bg="gold" text="Let’s Go" />
                  }
                />
                <UI_Cards
                  title="Personal"
                  content={
                    <ul>
                      <li>
                        <p>Sync unlimited devices</p>
                      </li>
                      <li>
                        <p>10 GB monthly uploads</p>
                      </li>
                      <li>
                        <p>200 MB max. note size</p>
                      </li>
                      <li>
                        <p>Customize Home dashboard and access extra widgets</p>
                      </li>
                      <li>
                        <p>Connect primary Google Calendar account</p>
                      </li>
                      <li>
                        <p>
                          Add due dates, reminders, and notifications to your
                          tasks
                        </p>
                      </li>
                    </ul>
                  }
                  description="Capture ideas and find them quickly"
                  lable="$0"
                  bg="darkblue"
                  size="lg"
                  contentfooter={
                    <UI_Button size="sm" bg="blue" text="Let’s Go" />
                  }
                />
                <UI_Cards
                  content={
                    <ul>
                      <li>
                        <p>Sync unlimited devices</p>
                      </li>
                      <li>
                        <p>10 GB monthly uploads</p>
                      </li>
                      <li>
                        <p>200 MB max. note size</p>
                      </li>
                      <li>
                        <p>Customize Home dashboard and access extra widgets</p>
                      </li>
                      <li>
                        <p>Connect primary Google Calendar account</p>
                      </li>
                      <li>
                        <p>
                          Add due dates, reminders, and notifications to your
                          tasks
                        </p>
                      </li>
                    </ul>
                  }
                  title="Free"
                  description="Capture ideas and find them quickly"
                  lable="$0"
                  bg="white"
                  size="md"
                  contentfooter={
                    <UI_Button size="sm" bg="gold" text="Let’s Go" />
                  }
                />
              </div>
            ),
          }}
          position="down"
        />
        <UI_PlateDown
          plateProps={{
            label: "Your work, everywhere you are",
            description:
              "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Try Taskey"
                icon={ArrowRight}
              />
            ),
            bg: "darkblue",
          }}
        />
        <UI_Plate
          plateProps={{
            label: "100% your data",
            description:
              "The app is open source and your notes are saved to an open format, so you ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but ",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Read more"
                icon={ArrowRight}
              />
            ),
            img: "/images/Map.png",
          }}
        />
        <UI_PlateDown
          plateProps={{
            label: "Our sponsors",
            content: (
              <div className="flex justify-center gap-[10%]">
                <img src="/public/svg/Apple.svg" />
                <img src="/public/svg/Microsoft.svg" />
                <img src="/public/svg/Slack.svg" />
                <img src="/public/svg/Google.svg" />
              </div>
            ),
          }}
        />
        <UI_Plate
          plateProps={{
            label: "Work with Your Favorite Apps Using whitepace",
            description:
              "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
            content: (
              <UI_Button
                size="lg"
                bg="blue"
                text="Read more"
                icon={ArrowRight}
              />
            ),
            bgimg: "/images/bgimg1.png",
            img: "/images/Apps.png",
            color: "white",
          }}
          position="left"
        />
        <UI_PlateDown
          plateProps={{
            label: "What Our Clients Says",
            content: (
              <div className="flex flex-col gap-[60px] items-center">
                <div className="flex gap-[20px]">
                  <UI_CardPeople
                    img="/public/images/ImgHeaderPeople1.png"
                    bg="white"
                    name="Oberon Shaw, MCH"
                    descriptionPeopl="Head of Talent Acquisition, North America"
                    description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
                    avatar="/public/images/Avater.png"
                  />
                  <UI_CardPeople
                    img="/public/images/ImgHeader2.png"
                    bg="sky-blue"
                    name="Oberon Shaw, MCH"
                    descriptionPeopl="Head of Talent Acquisition, North America"
                    description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
                    avatar="/public/images/Avater2.png"
                  />
                  <UI_CardPeople
                    img="/public/images/ImgHeader2.png"
                    bg="sky-blue"
                    name="Oberon Shaw, MCH"
                    descriptionPeopl="Head of Talent Acquisition, North America"
                    description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
                    avatar="/public/images/Avater3.png"
                  />
                </div>
                <div className="flex gap-[12px]">
                  <div className="w-[12px] h-[12px] bg-[#4F9CF9] rounded-2xl"></div>
                  <div className="w-[12px] h-[12px] bg-[#043873] rounded-2xl"></div>
                  <div className="w-[12px] h-[12px] bg-[#4F9CF9] rounded-2xl"></div>
                </div>
              </div>
            ),
          }}
        />
        <UI_PlateDown
          plateProps={{
            label: "Try Whitepace today",
            description:
              "Get started for free. Add your whole team as your needs grow.",
            bg: "darkblue",
            content: (
              <div className="flex flex-col gap-[40px]">
                <UI_Button
                  size="lg"
                  bg="blue"
                  text="Read more"
                  icon={ArrowRight}
                />
                <p className="font-300">On a big team? Contact sales</p>
                <div className="flex gap-[40px]">
                  <img src="/public/svg/Apple-white.svg" alt="" />
                  <img src="/public/svg/Microsoft-white.svg" alt="" />
                  <img src="/public/svg/Android.svg" alt="" />
                </div>
              </div>
            ),
          }}
        />
      </div>
    </>
  );
};
