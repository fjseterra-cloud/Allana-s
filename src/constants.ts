
export const RESUME_URL = 'https://drive.google.com/file/d/1jqYTUPHjScGayhcmItsD9XhkMtygQo8D/view?usp=drive_link';
export const RESUME_FILENAME = 'Allana_Jeanne_Baloy_CV_Architect.pdf';

export type ProjectCategory = 'Architectural Rendering' | 'Cost Estimates' | 'Roadway Design' | 'Plans & Drafting';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  images?: string[];
  location?: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Villa',
    description: 'A high-end, photorealistic 3D architectural visualization of a modern residential villa, designed to showcase contemporary architecture, sophisticated aesthetics, and luxurious living spaces. The project highlights clean architectural lines, premium materials, expansive glass elements, and a seamless connection between indoor and outdoor environments. Created with meticulous attention to detail, realistic lighting, textures, and spatial composition to deliver an elegant and lifelike representation of the proposed residence..',
    category: 'Architectural Rendering',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-04-24_at_11.28.29_PM_412689a2.jpeg',
    images: [
      'https://i.imgur.com/lsgTOzj.png',
      'https://i.imgur.com/KnWh33m.png',
      'https://i.imgur.com/UnavIPk.jpeg'  
    ],
    location: 'Philippines'
  },
  {
    id: '2',
    title: 'Roadway Planning',
    description: 'A transportation infrastructure planning project focused on the development of a dedicated busway system in the Monumento area of Metro Manila. The project aims to improve public transportation efficiency, optimize traffic flow, and provide safer and more accessible commuter facilities. It involves roadway layout planning, traffic circulation analysis, bus lane allocation, and integration of public transport infrastructure to support smoother and more organized urban mobility.',
    category: 'Roadway Design',
    imageUrl: 'https://i.imgur.com/Ji4IlNQ.png',
    images: [
      'https://i.imgur.com/Ji4IlNQ.png',
      'https://i.imgur.com/FyZn2Ja.png',
      'https://i.imgur.com/rhPL1A5.jpeg'
    ],
    location: 'Manila, Philippines'
  },
  {
    id: '3',
    title: 'Complex Estimate',
    description: 'A comprehensive construction cost estimation project for a company office development, covering the preparation of a detailed Bill of Quantities (BOQ) and overall project cost analysis. The estimate includes material quantities, labor costs, equipment requirements, and other construction-related expenses. The project focuses on accurate quantity takeoffs, cost evaluation, and budget planning to support efficient resource allocation and informed project decision-making.',
    category: 'Cost Estimates',
    imageUrl: 'https://i.imgur.com/Coo7zr3.png',
    images: [
      'https://i.imgur.com/Coo7zr3.png',
      'https://i.imgur.com/XRZec4Y.png',
      'https://i.imgur.com/rhPL1A5.jpeg'
    ],
    location: 'Philippines'
  },
  {
    id: '4',
    title: 'Plan and Visualization',
    description: 'A comprehensive architectural planning and visualization project for a luxury residential house, featuring a detailed floor plan and high-end 3D renderings.',
    category: 'Plans & Drafting',
    imageUrl: 'https://i.imgur.com/gpKCEGI.png',
    images: [
      'https://i.imgur.com/gpKCEGI.png',
      'https://i.imgur.com/Zxwz7NE.png',
      'https://i.imgur.com/TEpQJmX.png'
    ],
    location: 'Philippines'
  },
  {
    id: '5',
    title: 'Shelves Design',
    description: 'A comprehensive architectural and structural drafting project focused on custom shelving design for U.S.-based clients. The project involves developing detailed technical drawings, dimensions, material specifications, and structural considerations to ensure functionality, durability, and visual appeal. Each design is carefully prepared to meet client requirements, construction standards, and practical space-planning needs.',
    category: 'Architectural Rendering',
    imageUrl: 'https://i.imgur.com/l6Sd5QO.jpeg',
    images: [
      'https://i.imgur.com/l6Sd5QO.jpeg',
      'https://i.imgur.com/AYW6KX7.jpeg',
      'https://i.imgur.com/B43kjqD.jpeg'
    ],
    location: 'Philippines'
  },
  {
    id: '6',
    title: 'Urban Planning',
    description: 'An integrated urban and landscape planning project focused on designing a sustainable community within a terraced agricultural landscape. The master plan incorporates residential houses strategically positioned along the natural terrain, with carefully planned pathways, access roads, and interconnected water channels. Special attention is given to the natural flow and distribution of water throughout the rice terraces, ensuring efficient irrigation, proper drainage, and minimal environmental impact. The design aims to create a harmonious balance between residential living, agricultural functionality, and the preservation of the natural landscape.',
    category: 'Plans & Drafting',
    imageUrl: 'https://i.imgur.com/qEaSuVA.png',
    images: [
      'https://i.imgur.com/qEaSuVA.png',
      'https://i.imgur.com/0Clbj50.png',
      'https://i.imgur.com/U9otK32.png'
    ],
    location: 'Philippines'
  }
];

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  category: ProjectCategory;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Architectural Estimates',
    description: 'Providing detailed and accurate cost estimates, including Bills of Quantities (BOQ) for various projects.',
    icon: 'Calculator',
    category: 'Cost Estimates'
  },
  {
    title: '3D Visualization',
    description: 'Creating realistic 3D renderings to help you present your designs to clients clearly and effectively.',
    icon: 'Layers',
    category: 'Architectural Rendering'
  },
  {
    title: 'Roadway Design',
    description: 'Assisting with layout and planning for roadways, subdivisions, and site development infrastructure.',
    icon: 'Map',
    category: 'Roadway Design'
  },
  {
    title: 'CAD Drafting',
    description: 'Delivering clean, organized, and accurate technical drawings based on your sketches and specifications.',
    icon: 'PenTool',
    category: 'Plans & Drafting'
  }
];
