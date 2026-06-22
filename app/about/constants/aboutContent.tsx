import { StatsType } from "../page";
import stack from "../../../public/Stack.png";
import flag from "../../../public/Flag.png";
import globe from "../../../public/GlobeSimple.png";

export const aboutHeader: {
  tag: string;
  title: string;
  des1: string;
  des2: string;
} = {
  tag: "ABOUT PRINTFORGE",
  title: "Empowering makers worldwide",
  des1: `Founded in 2023, PrintForge has quickly become the go-to platform for
          3D printing enthusiasts, makers, and professional designers to share
          and discover amazing STL files for 3D printing.`,
  des2: `Our mission is to
          foster a vibrant community where creativity meets technology, enabling
          anyone to bring their ideas to life through 3D printing.`,
};

export const stats: StatsType[] = [
  {
    icon: stack,
    title: "100K+ Models",
    description:
      "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
  },
  {
    icon: globe,
    title: "Active Community",
    description:
      "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
  },
  {
    icon: flag,
    title: "Free to Use",
    description:
      "Most models are free to download, with optional premium features for power users.",
  },
];

export const aboutVision: { title: string; par1: string; par2: string } = {
  title: "Our vision",
  par1: "At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.",
  par2: "Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.",
};
