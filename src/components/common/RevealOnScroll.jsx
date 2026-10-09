import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    className = "",
}) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12 },
        );

        const currentElem = domRef.current;
        if (currentElem) observer.observe(currentElem);

        return () => {
            if (currentElem) observer.unobserve(currentElem);
        };
    }, []);

    const getTransform = () => {
        if (isVisible) return "none";
        switch (direction) {
            case "up":
                return "translateY(36px)";
            case "down":
                return "translateY(-36px)";
            case "left":
                return "translateX(36px)";
            case "right":
                return "translateX(-36px)";
            default:
                return "none";
        }
    };

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform",
    };

    return (
        <div ref={domRef} style={style} className={className}>
            {children}
        </div>
    );
}
