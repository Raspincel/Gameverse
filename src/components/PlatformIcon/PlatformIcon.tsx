import { IconType } from "react-icons";
import { IconContainer } from "./style";
import { IconContext } from "react-icons";

interface PlatformIconProps {
    Icon: IconType,
    platformName: string
}

const PlatformIcon = ({ Icon, platformName }: PlatformIconProps) => {
  
  return (
      <IconContext.Provider value={{ className: "platform-icon", color: "#0DADEA" }}>
        <IconContainer>
        <Icon />
        <div className="info">
          <span>Available on {platformName}</span>
        </div>

      </IconContainer>
    </IconContext.Provider>
  );
};

export { PlatformIcon };