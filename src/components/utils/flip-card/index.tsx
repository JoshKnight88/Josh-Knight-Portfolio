import '../../../assets/components/utils/flip-card.css'

interface IFlipCardProps {
  front: string;
  back: string;
  exp: string;
}

export const FlipCard: React.FC<IFlipCardProps> = ({ front, back, exp }) => {
    return (
      <div className='flip-card-outer'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={front} alt='language icon' className='card-images'></img>
          </div>
          <div className='flip-card-back'>
            <p className='card-text'>{back}<br/>{exp}</p>
          </div>
        </div>
      </div>
    );
  };
