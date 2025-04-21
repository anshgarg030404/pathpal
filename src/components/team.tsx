import { FocusCards } from "@/components/ui/focus-cards";

export function Team() {
  const cards = [
    {
      title: "Ansh Garg",
      src: "/ansh.jpg",
      content: "Ansh is the brain behind the tech powers Pathpal, combining his love for robotics and AI to build smart,real world solutions.He's the engine that powers innovation on our team",
      linkedin: "https://www.linkedin.com/in/ansh-garg-777ab7258/",
      mail: "mailto:anshgarg030404@gmail.com",
      phone: "tel:7503715775"
    },
    {
      title: "Unnati Jain",
      src: "/unnati.jpeg",
      content: "Unnati shapes the user experience, turning ideas into intuitive designs.Her creativity and eye for detail keep our product as elegant as it is functional.",
      linkedin: "https://www.linkedin.com/in/unnati-jain-46657a28b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjhvG9qkcRGCuClEYWjXD1Q%3D%3D",
      mail: "mailto:unnati.del@gmail.com",
      phone: "tel:7827731527"
    }
  ];

  return <FocusCards cards={cards} />;
}
