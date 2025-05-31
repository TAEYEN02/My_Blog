import React, { useState, useRef } from "react";

const MindMapDrawing = () => {
  const [lines, setLines] = useState([]); // 완성된 선들
  const [currentLine, setCurrentLine] = useState([]); // 그리는 중인 선
  const svgRef = useRef(null);

  // 마우스/터치 위치 계산 함수
  const getPoint = (e) => {
    const svg = svgRef.current;
    const CTM = svg.getScreenCTM();
    let x, y;
    if (e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    return {
      x: (x - CTM.e) / CTM.a,
      y: (y - CTM.f) / CTM.d,
    };
  };

  const handleDown = (e) => {
    e.preventDefault();
    const point = getPoint(e);
    setCurrentLine([point]);
  };

  const handleMove = (e) => {
    if (currentLine.length === 0) return;
    e.preventDefault();
    const point = getPoint(e);
    setCurrentLine([...currentLine, point]);
  };

  const handleUp = (e) => {
    if (currentLine.length > 0) {
      setLines([...lines, currentLine]);
      setCurrentLine([]);
    }
  };

  return (
    <svg
      ref={svgRef}
      width="600"
      height="400"
      style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
      {/* 이미 그려진 선들 */}
      {lines.map((line, i) => (
        <polyline
          key={i}
          points={line.map((p) => `${p.x},${p.y}`).join(" ")}
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* 그리고 있는 중인 선 */}
      {currentLine.length > 0 && (
        <polyline
          points={currentLine.map((p) => `${p.x},${p.y}`).join(" ")}
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.6}
        />
      )}
    </svg>
  );
};

export default MindMapDrawing;
