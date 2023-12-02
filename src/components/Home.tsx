import { Button } from '.';
import { data } from "../../data/data";

export const Home = () => {
  return (
    <div className="w-full h-screen center-flex flex-col gap-7">
      <div className="upperText">{data.hero.heroUpperText}</div>
      <div className="headingTitle">{data.hero.heroTitle}</div>
      <div className="text-2xl leading-8 font-medium max-w-[50%] text-center text-gray-600 my-4">
        {data.hero.heroSubText}
      </div>
      <Button
        classNames={
          "bg-lightGrey hover:bg-black hover:scale-110 transition p-4 rounded-xl"
        }
      >
        {data.hero.ctaText}
      </Button>
      <p className="text-xs text-gray-500">{data.hero.buttonSubText}</p>
      <div>
        <iframe
          id="cldxqquwh0005xh0kgigijx32"
          title="PraiseHive - cldxqquwh0005xh0kgigijx32"
          src="https://embed.praisehive.com/cldxqquwh0005xh0kgigijx32"
          style={{ width: "326px", height: "42px", overflow: "hidden" }}
        ></iframe>
      </div>
    </div>
  );
};
