import React, { useEffect } from "react";

const ElevenLabsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
  <elevenlabs-convai agent-id="agent_01jz7fdxrret8vzhmq80kkpeez" />    
  );
};

export default ElevenLabsWidget;
