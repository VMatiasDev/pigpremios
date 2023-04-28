import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function ImageSlider({ slides }) {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div onClick={goToPrevious}>
        <FontAwesomeIcon
          icon={faCaretLeft}
          color='#FF8A29'
          height={40}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            left: '32px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          height: '100%',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div onClick={goToNext}>
        <FontAwesomeIcon
          icon={faCaretRight}
          color='#FF8A29'
          height={40}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            right: '32px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '12px',
        }}
      >
        {slides.map((slides, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <FontAwesomeIcon
              icon={faCircle}
              color='#FF8A29'
              height={10}
              style={{ margin: '0 3px', cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
