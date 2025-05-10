import React from "react";

interface TextProps {
  title: string;
  subtitle: string;
  color?: string; // color del subrayado (opcional)
  className?: string; // clases adicionales para el contenedor
}

const Text: React.FC<TextProps> = ({
  title,
  subtitle,
  color = "#1d6cb0",
  className = "",
}) => {
  return (
    <div className={`text-center py-8 bg-[#f9f9f9] ${className}`}>
      <h2 className="text-xl md:text-2xl font-semibold text-[#1e2a38] tracking-wide uppercase">
        {title}
      </h2>
      <div
        className="w-16 h-1 mx-auto my-2"
        style={{ backgroundColor: color }}
      />
      <p className="text-sm md:text-base text-[#1e2a38]">{subtitle}</p>
    </div>
  );
};

export default Text;
