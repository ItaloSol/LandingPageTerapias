import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Building, Users, TrendingUp } from 'lucide-react';

const InstructorSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const listRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate first number from 0 to 35
          const duration1 = 2000; // 2 seconds
          const steps1 = 35;
          const increment1 = steps1 / (duration1 / 16); // 16ms is roughly one frame
          let current1 = 0;

          const timer1 = setInterval(() => {
            current1 += increment1;
            if (current1 >= steps1) {
              setCount1(35);
              clearInterval(timer1);
            } else {
              setCount1(Math.floor(current1));
            }
          }, 16);

          // Animate second number from 0 to 5000
          const duration2 = 2000; // 2 seconds
          const steps2 = 5000;
          const increment2 = steps2 / (duration2 / 16);
          let current2 = 0;

          const timer2 = setInterval(() => {
            current2 += increment2;
            if (current2 >= steps2) {
              setCount2(5000);
              clearInterval(timer2);
            } else {
              setCount2(Math.floor(current2));
            }
          }, 16);

          statsObserver.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, []);

  return (
    <section className="section bg-white" id="instructor">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sos-dark">
              Aprenda com Quem Entende
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Com mais de 35 anos de experiência, o <strong>Instituto Jorge Avellar</strong> oferece um treinamento focado para você dominar esta técnica exclusiva e revolucionar sua carreira profissional!
            </p>
            <div ref={statsRef} className="grid gap-4 mb-8">
              <div className="text-center p-4 bg-sos-green-light rounded-lg">
                <span className="text-3xl font-bold text-sos-green">{count1}+</span>
                <p className="text-sm text-gray-700">Anos de Experiência</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;