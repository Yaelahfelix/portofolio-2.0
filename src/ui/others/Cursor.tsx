import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newX = e.clientX;
            const newY = e.clientY;

            const dx = newX - position.x;
            const dy = newY - position.y;
            const radians = Math.atan2(dy, dx);
            const newAngle = radians * 360 / Math.PI;

            setPosition({ x: newX, y: newY });
            setAngle(newAngle);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);

    return (
        <motion.div
            style={{
                left: position.x - 15, // Sesuaikan agar roket berada di tengah cursor
                top: position.y - 15,
            }}
            className="cursor"
            animate={{ rotate: angle }}
        />
    );
};

export default Cursor;
