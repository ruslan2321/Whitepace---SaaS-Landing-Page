import PlateImg1 from "/images/PlateImg1.png";
import PlateImg2 from "/images/PlateImg2.png";
import PlateImg3 from "/images/PlateImg3.png";
import PlateImg4 from "/images/PlateImg4.png";
import bgImg1 from "/images/bgimg1.png";
import planet from "/images/planet.png";
import "./style.scss";
import { UI_Plate } from "../UI/Plate/Plate";
import { UI_Button } from "../UI/Button/Button";
import ArrowRight from "/svg/ArrowRight.svg";
import { UI_Cards } from "../UI/Cards/Cards";

export const Main = () => {
  return (
    <>
      <div>
        <UI_Plate
          label="Get More Done with whitepace"
          description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          img={PlateImg1}
          bgimg={bgImg1}
          color="white"
          content={
            <UI_Button
              icon={ArrowRight}
              bg={"blue"}
              size="md"
              text="Try Whitepace free"
            />
          }
        />
        <UI_Plate
          label="Project Management"
          description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          img={PlateImg2}
          content={
            <UI_Button
              size="lg"
              bg="blue"
              text="Get Started"
              icon={ArrowRight}
            />
          }
        />
        <UI_Plate
          label="Work together"
          description="With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
"
          img={planet}
          position="left"
          content={
            <UI_Button
              size="lg"
              bg="blue"
              text="Try it now"
              icon={ArrowRight}
            />
          }
        />
        <UI_Plate
          label="Use as Extension"
          description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
"
          content={
            <UI_Button
              size="lg"
              bg="blue"
              text="Get Started"
              icon={ArrowRight}
            />
          }
          img={PlateImg3}
          bg="darkblue"
        />
        <UI_Plate
          label="Customise it
to your needs"
          position="left"
          description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
          content={
            <UI_Button size="lg" bg="blue" text="Let’s Go" icon={ArrowRight} />
          }
          img={PlateImg4}
        />
        <UI_Plate
          label="Customise it
to your needs"
          position="down"
          description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
          content={
            <UI_Button size="lg" bg="blue" text="Let’s Go" icon={ArrowRight} />
          }
          img={PlateImg4}
        />
        <div className="flex justify-center flex-col items-center gap-[60px]">
          <h1 className="text-[72px] font-bold">Choose Your Plan</h1>
          <p className="text-center font-[200] w-[600px]">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
          <div className="flex gap-[32px]">
            <UI_Cards
              title="Free"
              description="Capture ideas and find them quickly"
              lable="$0"
              bg="white"
              size="md"
              contentfooter={<UI_Button size="sm" bg="gold" text="Let’s Go" />}
            />
            <UI_Cards
              title="Personal"
              description="Capture ideas and find them quickly"
              lable="$0"
              bg="darkblue"
              size="lg"
              contentfooter={<UI_Button size="sm" bg="blue" text="Let’s Go" />}
            />
            <UI_Cards
              title="Free"
              description="Capture ideas and find them quickly"
              lable="$0"
              bg="white"
              size="md"
              contentfooter={<UI_Button size="sm" bg="gold" text="Let’s Go" />}
            />
          </div>
        </div>

      </div>
    </>
  );
};
