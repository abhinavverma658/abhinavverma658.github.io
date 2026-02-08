import { useEffect, useState, useRef } from "react";
import { getGithubContributions } from "../api/github";

// Simple in-memory cache to avoid refetching
let cachedContributions = null;

// Animated number component
const AnimatedNumber = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  // Animation logic - only runs when visible
  useEffect(() => {
    if (!isVisible || target === null || target === undefined) return;

    let startTime = null;
    const startValue = 0;
    const endValue =
      typeof target === "string" ? parseInt(target.replace(/\D/g, "")) : target;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuad = progress * (2 - progress); // Easing function
      const currentCount = Math.floor(
        easeOutQuad * (endValue - startValue) + startValue,
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const statsNumber = () => {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (cachedContributions !== null) {
        setContributions(cachedContributions);
        setLoading(false);
        return;
      }

      try {
        const total = await getGithubContributions("abhinavverma658");
        cachedContributions = total;
        setContributions(total);
      } catch (error) {
        console.error("Error fetching GitHub data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-[#923cb5] dark:bg-black border-b border-t border-gray-800 mt-10 p-3">
      <div className="max-w-5xl  md:flex justify-center gap-3 mx-auto">
        <div className="md:flex grid grid-cols-2 p-4 text-center  md:py-10 justify-center  gap-4 md:gap-16 ">
          <div className="text-white  md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">
              <AnimatedNumber target={120} suffix="+" />
            </h2>
            <h5 className="text-md md:text-xl text-white dark:text-[#923cb5]">
              Projects Completed
            </h5>
          </div>
          <div className="text-white  md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">
              {contributions && (
                <AnimatedNumber target={contributions} suffix="+" />
              )}
            </h2>
            <h5 className="text-md md:text-xl text-white dark:text-[#923cb5]">
              GitHub Contributions
            </h5>
            <p className="text-sm text-white  dark:text-[#923cb5]">
              (Last Year)
            </p>
          </div>
          <div className="text-white  md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">
              <AnimatedNumber target={5000} suffix="+" />
            </h2>
            <h5 className="text-md md:text-xl text-white dark:text-[#923cb5]">
              LinkedIn Followers
            </h5>
          </div>
          <div className="text-white  md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">
              <AnimatedNumber target={6} suffix="+" />
            </h2>
            <h5 className="text-md md:text-xl text-white dark:text-[#923cb5]">
              Certifications
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default statsNumber;
