import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, X, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './PodcastPlayer.css';

const PodcastPlayer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    // Initial show delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.error("Play failed", e));
            setIsPlaying(true);
            setIsVisible(false); // Close modal on play
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            <audio ref={audioRef} src="/Vinay Kumar Podcast.mp3" loop />

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="podcast-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="podcast-modal glass-panel"
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                        >
                            <button className="close-btn" onClick={handleClose}>
                                <X size={20} />
                            </button>
                            <div className="podcast-icon">
                                <Headphones size={48} color="var(--primary)" />
                            </div>
                            <h3>Enjoy The Podcast?</h3>
                            <p>Click below to listen while you explore!</p>
                            <button className="play-btn btn-primary" onClick={handlePlay}>
                                <Play size={18} fill="currentColor" /> Play Podcast
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isPlaying && (
                <motion.button
                    className="audio-toggle-btn glass-panel"
                    onClick={toggleMute}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </motion.button>
            )}
        </>
    );
};

export default PodcastPlayer;
