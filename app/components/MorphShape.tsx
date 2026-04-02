export default function MorphShape() {
  return (
    <div className="morph-shape-wrapper">
      <svg
        viewBox="0 0 100 100"
        className="morph-star"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M50 0 C50 30, 70 50, 100 50 C70 50, 50 70, 50 100 C50 70, 30 50, 0 50 C30 50, 50 30, 50 0 Z"
        />
      </svg>
    </div>
  );
}
