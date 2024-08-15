import MovingText from "react-moving-text";

const AnimateText = () => {
  return (
    <div className="text-[60px] font-black text-center opacity-15">
      <MovingText
        type="slideInFromBottom"
        duration="3000ms"
        delay="1s"
        direction="alternate"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        BONJOUR ET BIENVENUE !
      </MovingText>
    </div>
  );
};

export default AnimateText;
