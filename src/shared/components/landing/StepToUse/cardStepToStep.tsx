import React from "react";

interface CardProps {
  image: JSX.Element | string; // Para que acepte tantp imagenes como svg
  title: string;
  description: string;
}

export default function CardStepToStep({ image, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:w-1/5">
      <div>
        {typeof image === 'string' ? (
          <img src={image} alt={title} />
        ) : (
          image
        )}
      </div>
      <p className="text-chaarcoal700 font-bold text-xl mt-3">{title}</p>
      <p className="text-slateGrayBase font-semibold text-base mt-3 w-4/5 lg:w-full">{description}</p>
    </div>
  );
}
