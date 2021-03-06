import * as React from 'react';

function LinkedInIcon(props) {
  return (
    <a
      href="https://www.linkedin.com/in/srijan-s-262bb398/"
      rel="noreferrer"
      target="_blank"
      aria-label="LinkedIn"
    >
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 lg:h-12 lg:w-12"
        {...props}
      >
        <title>{'LinkedIn'}</title>
        <rect width={48} height={48} rx={24} fill="#0077B5" />
        <path
          d="M37.325 35.325a97.67 97.67 0 00-4.688 0c-.337 0-.412-.075-.412-.413V26.55c0-.637-.038-1.275-.225-1.875-.563-1.95-2.813-2.663-4.425-1.35-.863.675-1.2 1.613-1.2 2.738v7.875c0 .337-.038.674 0 1.05.038.3-.113.374-.375.337h-4.8c-.3 0-.375-.075-.375-.375.038-2.363.038-4.725.038-7.125 0-2.925 0-5.85-.038-8.738 0-.337.075-.412.375-.412H26c.3 0 .375.075.375.375v1.912l.188-.187c1.462-2.137 3.524-2.737 5.962-2.362 2.813.45 4.612 2.4 5.063 5.4.112.712.15 1.425.15 2.137v8.963c0 .3-.075.412-.413.412zM17.825 27v7.875c0 .337-.075.45-.412.45-1.575-.038-3.15 0-4.726 0-.3 0-.374-.075-.374-.375v-15.9c0-.262.074-.375.374-.375h4.838c.338 0 .375.113.375.412-.075 2.625-.075 5.25-.075 7.913zM18.087 14.325c-.375 1.5-1.912 2.363-3.675 2.063-1.875-.3-2.925-2.138-2.25-3.938.45-1.125 1.538-1.8 2.925-1.762 2.1-.038 3.488 1.65 3 3.637z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}

export default LinkedInIcon;
