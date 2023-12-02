import { data } from "../../data/data";
import { UserBlob } from "./UserBlob";
import UserEmoji from "../assets/images/EmojiUser/emojiUser5.webp";
import { Button } from ".";

export const CTA = () => {
  return (
    <div className="center-flex flex-col gap-5 h-screen">
      <div className="upperText">{data.cta.upperText}</div>
      <div className="headingTitle">{data.cta.title}</div>
      <div className="text-gray-500 w-1/3 text-center mt-5">
        {data.cta.subText}
      </div>
      <Button classNames="bg-lightGrey hover:bg-black hover:scale-110 transition p-4 rounded-xl">
        {data.hero.ctaText}
      </Button>
      <div>
        <UserBlob
          image={UserEmoji}
          blogText={data.cta.userText}
          blogSubText={data.cta.userName}
        />
      </div>
    </div>
  );
};
