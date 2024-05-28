import Play from '@/../public/icons/playButton.svg';
import { ServiceCard } from './components/common/ServiceCard';

export const Viewer = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        nemo possimus, ipsa hic dolores commodi incidunt modi labore aliquam?
        Repellendus explicabo architecto dolore asperiores nam earum ipsum.
        Ipsum dolorem dicta sunt libero molestias voluptatibus necessitatibus
        incidunt non facilis tenetur vero eos rem fuga laudantium aspernatur,
        distinctio cupiditate itaque est, explicabo neque magni ea! Incidunt
        cumque molestiae illum odio! Culpa assumenda accusantium cupiditate hic
        quasi quia aperiam qui, voluptatum incidunt? Similique unde tempora,
        modi rem quasi fugiat. Nam totam perferendis iure veniam quos quis
        deleniti laudantium aliquid natus? Soluta?
      </p>

      <button
        type='button'
        className='h-[51px] w-[51px] rounded-full bg-orange-600 pb-4 pl-[21px] pr-[17px] pt-[17px]'
      >
        <Play width={13} height={18} />
      </button>
      <ServiceCard/>
    </>
  );
};
