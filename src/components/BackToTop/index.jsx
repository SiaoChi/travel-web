import { useState, useEffect } from 'react';

function BackToTop(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = document.documentElement.scrollTop;
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility(); // 初始檢查

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-4 right-4 cursor-pointer z-50">
                    <img 
                        src="/footer/back-to-top.svg"
                        alt="回到頂部"
                        className="w-10 h-10 sm:w-12 sm:h-12"
                        onClick={scrollToTop}
                    />
                </div>
            )}
        </>
    )
}

export default BackToTop;