import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <div
          onClick={() => {
            scrollToTop();
          }}
        >
          <img
            height="50vm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW8VBr1YO5QewQSxNHhii276BUoDmRrp5_A&usqp=CAU"
            alt="Go to top"
          />
        </div>
      )}
    </div>
  );
}
