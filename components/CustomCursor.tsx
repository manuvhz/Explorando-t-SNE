
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            const pointer = window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer';
            setIsPointer(pointer);
            setIsHovering(pointer || target.closest('button, a, input[type="range"]') !== null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const outlineSize = isHovering ? 50 : 40;
    const dotOpacity = isHovering ? 0 : 1;
    const outlineScale = isPointer ? 1.2 : 1;

    return (
        <div className="hidden lg:block">
            <div
                className="custom-cursor-outline fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
                style={{
                    transform: `translate(${position.x - outlineSize / 2}px, ${position.y - outlineSize / 2}px) scale(${outlineScale})`,
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                }}
            />
            <div
                className="custom-cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-opacity duration-200"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                    opacity: dotOpacity,
                }}
            />
        </div>
    );
};

export default CustomCursor;
