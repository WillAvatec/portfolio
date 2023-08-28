import ListItem from "./ListItem";

type SquareBubbleProps = { active: boolean; toggle: (value: boolean) => void };

function SquareBubble({ active, toggle }: SquareBubbleProps) {
  const showBubble = active ? "show-bubble fixed" : "hidden";
  return (
    <div
      className={`${showBubble} top-0 right-0 font-Montserrat w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] z-[9999] bg-white rounded-bl-full shadow-xl transition-all`}
    >
      <CloseButton toggle={toggle} />
      <div className="h-full text-center">
        <ul className="text-xl md:text-2xl lg:text-4xl pt-[20%] pl-[20%]">
          <ListItem href="#about" isBubble>
            About
          </ListItem>
          <ListItem href="#projects" isBubble>
            Projects
          </ListItem>
          <ListItem href="#contact" isBubble>
            Contact
          </ListItem>
        </ul>
      </div>
    </div>
  );
}

const CloseButton = ({ toggle }: { toggle: (value: boolean) => void }) => {
  return (
    <button
      className="absolute top-3 right-3 aspect-square w-14 bg-orange-600 hover:bg-gray-400 rounded-full"
      onClick={() => toggle(false)}
    >
      <div className="relative w-full h-full group">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2/4 h-1/5 bg-white group-hover:bg-black" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45 w-2/4 h-1/5 bg-white group-hover:bg-black" />
      </div>
    </button>
  );
};

export default SquareBubble;
