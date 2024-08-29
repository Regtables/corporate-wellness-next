type IconPath = {
  [icon: string]: {
    src: string;
    height?: number;
    width?: number;
  };
};

export const VALUES_ICONS: IconPath = {
  heart: { src: "/heart.svg", width: 80, height: 50 },
  respect: { src: "/respect.svg", width: 80, height: 50 },
  trust: { src: "/trust.svg", width: 80, height: 50 },
  authenticity: { src: "/authenticity.svg", width: 80, height: 50 },
};

export const SERVICES_ICONS: IconPath = {
  "Individual Coaching": { src: "/individual.svg", width: 80, height: 50 },
  "Team Coaching": { src: "/team.svg", width: 100, height: 50 },
  "HR Consultance": { src: "/hr.svg", width: 60, height: 50 },
  "Customised Solutions": { src: "/individual.svg", width: 80, height: 50 },
  "Business-Centric Approach": { src: "/team.svg", width: 100, height: 50 },
  "Holistic Perspective": { src: "/hr.svg", width: 60, height: 50 },
};

export const TREE_ICONS: IconPath = {
  'baobab': { src: "/baobab-white.png" },
  'willow': { src: "/willow-white.png" },
};

export const SERVICE_BENEFITS_ICONS = {
  "Customised Solutions": { src: "/individual.svg", width: 80, height: 50 },
  "Business-Centric Approach": { src: "/team.svg", width: 100, height: 50 },
  "Holistic Perspective": { src: "/hr.svg", width: 60, height: 50 },
}

export const SERVICE_PROCESS_ICONS:IconPath = {
  "Individual Coaching": { src: "/individual-process.png", width: 80, height: 50 },
  "Team Coaching": { src: "/team-process.png", width: 100, height: 50 },
  "HR Consultance": { src: "/hr-process.png", width: 60, height: 50 },
}
