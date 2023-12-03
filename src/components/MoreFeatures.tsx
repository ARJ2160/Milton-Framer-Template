import { data } from '../../data/data';
import { FeatureCard } from '.';

export const MoreFeatures = () => {
  return (
    <div className='center-flex flex-col h-fit'>
      <div className='upperText'>{data.moreFeatures.moreFeaturesUpperText}</div>
      <div className='headingTitle'>{data.moreFeatures.moreFeaturesTitle}</div>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-10 gap-20'>
        {data.moreFeatures.featureCard.map((feature, key) => {
          return (
            <div className='col-span-1' key={key}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                subText={feature.subText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
