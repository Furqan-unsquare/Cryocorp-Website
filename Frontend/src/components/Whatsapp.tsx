import React, { useEffect } from "react";

interface WhatsAppRedirectProps {
  /** The WhatsApp link to redirect to, e.g., 'https://wa.me/1234567890' */
  link: string;
}

const WhatsAppRedirect: React.FC<WhatsAppRedirectProps> = ({ link }) => {
  useEffect(() => {
    window.location.href = link;
  }, [link]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow text-center">
        <svg
          className="mx-auto mb-4 text-green-500"
          width="48"
          height="48"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.042 1.998c-5.059 0-9.161 4.102-9.161 9.161 0 1.617.424 3.199 1.229 4.592l-1.281 4.684a1.008 1.008 0 001.237 1.242l4.608-1.211c1.351.734 2.889 1.127 4.368 1.127 5.058 0 9.16-4.102 9.16-9.161s-4.102-9.16-9.16-9.16zm0 16.66c-1.374 0-2.729-.354-3.903-1.026l-.28-.162-2.734.718.753-2.747-.172-.282a7.142 7.142 0 01-1.164-3.924c0-3.944 3.21-7.152 7.153-7.152 3.944 0 7.152 3.208 7.152 7.152s-3.208 7.153-7.152 7.153zm4.027-5.373c-.217-.109-1.283-.635-1.482-.709-.199-.079-.344-.109-.488.109-.146.215-.561.709-.687.851-.126.146-.254.164-.471.055-.217-.109-.917-.338-1.747-1.078-.646-.577-1.082-1.289-1.211-1.505-.127-.217-.014-.334.096-.443.099-.1.217-.254.324-.381.109-.126.144-.215.217-.361.071-.145.036-.273-.019-.381-.055-.108-.488-1.177-.668-1.613-.176-.423-.358-.354-.488-.36l-.416-.007a.972.972 0 00-.703.327c-.24.252-.915.893-.915 2.178 0 1.281.936 2.52 1.067 2.695.127.168 1.843 2.814 4.482 3.838.627.229 1.117.366 1.5.47.63.168 1.203.145 1.658.088.507-.057 1.283-.52 1.463-1.024.18-.504.18-.936.127-1.024-.055-.09-.199-.145-.416-.254z"/>
        </svg>
        <h2 className="text-lg font-semibold mb-2">Redirecting to WhatsApp...</h2>
        <p className="text-gray-500 text-sm">If you are not redirected, <a href={link} className="text-green-500 underline">click here</a>.</p>
      </div>
    </div>
  );
};

export default WhatsAppRedirect;
