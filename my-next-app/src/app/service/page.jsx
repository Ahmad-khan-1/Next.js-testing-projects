// ✅ Yahan dono import kiye — page SERVER component hai
import ServiceList from "@/components/ServiceList";
import ServiceItem from "@/components/ServiceItem";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "SEO Optimization",
];

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>

      <ServiceList>
        {services.map((service) => (
          <ServiceItem key={service} service={service} />
        ))}
      </ServiceList>
    </div>
  );
}
