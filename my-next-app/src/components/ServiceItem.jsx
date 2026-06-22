export default function ServiceItem({ service }) {
  // Ye check karta hai: server par chal raha hai ya client par?
  if (typeof window === "undefined") {
    console.log("Running ServiceItem as a SERVER component ✅");
  } else {
    console.log("Running ServiceItem as a CLIENT component ❌");
  }

  return <li>{service}</li>;
}
