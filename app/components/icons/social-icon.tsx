interface SocialIconProps {
  name: "linkedin" | "telegram" | "discord" | "x";
  className?: string;
  size?: number;
}

const SocialIcon = ({ name, className = "", size = 24 }: SocialIconProps) => {
  if (name === "linkedin") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M8 11V16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8V8.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "telegram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "discord") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8946 14.7348 13 15 13C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5004 17C15.5004 18 17.0004 20 17.5004 20C19.0004 20 20.3334 18.333 21.0004 17C21.6674 15.333 21.5004 11.167 19.5004 5.5C18.0434 4.485 16.5004 4.16 15.0004 4L14.0284 5.923C12.6874 5.6915 11.3165 5.6915 9.97544 5.923L9.00044 4C7.50044 4.16 5.95744 4.485 4.50044 5.5C2.50044 11.167 2.33344 15.333 3.00044 17C3.66744 18.333 5.00044 20 6.50044 20C7.00044 20 8.50044 18 8.50044 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16.5C10.5 17.5 13.5 17.5 17 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3.33301 3.33325L13.1105 16.6666H16.6663L6.88884 3.33325H3.33301Z" stroke="currentColor" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.33301 16.6666L8.97301 11.0266M11.023 8.97659L16.6663 3.33325" stroke="currentColor" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default SocialIcon;
