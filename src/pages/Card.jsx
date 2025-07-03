import React from "react";

const Card = ({ image, name, role, description, linkedinUrl, dribbbleUrl, closeUrl }) => {
  return (
    <div className="bg-black/50 text-white rounded-lg p-6 flex flex-col items-center shadow-lg transition transform hover:scale-105">
      {/* Image placeholder or actual image */}
      <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740" alt={name} className="object-cover w-full h-full" />
      </div>

      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">{role}</p>
      <p className="text-center text-sm mb-4">{description}</p>

      {/* Social links as text */}
      <div className="flex space-x-4 text-sm">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            className="hover:underline text-blue-400"
          >
            LinkedIn
          </a>
        )}
        {closeUrl && (
          <a
            href={closeUrl}
            target="_blank"

            className="hover:underline text-red-400"
          >
            Close
          </a>
        )}
        {dribbbleUrl && (
          <a
            href={dribbbleUrl}
            target="_blank"

            className="hover:underline text-pink-400"
          >
            Dribbble
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
