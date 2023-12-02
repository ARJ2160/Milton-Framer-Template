import { data } from '../../data/data';
import { FeatureSection } from './FeatureSection';

export const Features = () => {
  return (
    <div className='center-flex flex-col gap-5 h-fit m-10'>
      <div className='upperText'>{data.features.featuresUpperText}</div>
      <div className='headingTitle w-fit'>{data.features.featuresTitles}</div>
      <div className='mt-10'>
        {[...Array(4)].map((_: any, i: number) => {
          return (
            <div key={i}>
              <FeatureSection
                index={i}
                title={data.features.titles[i]}
                chipText={data.features.chipsText[i]}
                subText={data.features.subText[i]}
                emojiText={data.features.emojiText[i]}
                emojiImage={data.features.emojiUsersImages[i]}
                featureImage={data.features.featureImages[i]}
                emojiUsername={data.features.emojiUsername[i]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
